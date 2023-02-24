import { gestures } from "./gestures.js";
import { drawPoint } from "./canvas.js";
import * as config from "./config.js";

async function main() {
  const video = document.querySelector("#pose-video");
  const canvas = document.querySelector("#pose-canvas");
  const ctx = canvas.getContext("2d");

  const resultLayer = {
    right: document.querySelector("#pose-result-right"),
    left: document.querySelector("#pose-result-left"),
  };

  // configure gesture estimator
  // add "✌🏻" and "👍" as sample gestures
  const knownGestures = [
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture,
    ...gestures,
  ];

  const GE = new fp.GestureEstimator(knownGestures);

  // load handpose model
  const detector = await config.createDetector();
  console.log("mediaPose model loaded");

  const pair = new Set();

  function checkGestureCombination(chosenHand, poseData) {
    const addToPairIfCorrect = (chosenHand) => {
      const containsHand = poseData.some((finger) =>
        config.dontGesturePattern[chosenHand].includes(finger[2])
      );
      if (!containsHand) return;
      pair.add(chosenHand);
    };

    addToPairIfCorrect(chosenHand);

    if (pair.size !== 2) return;

    resultLayer.left.innerText = resultLayer.right.innerText =
      config.gestureStrings.dont;
    pair.clear();
  }

  // main estimation loop
  const estimateHands = async () => {
    // clear canvas overlay
    ctx.clearRect(0, 0, config.video.width, config.video.height);
    resultLayer.right.innerText = "";
    resultLayer.left.innerText = "";

    // get hand landmarks from video
    const hands = await detector.estimateHands(video, {
      flipHorizontal: true,
    });

    for (const hand of hands) {
      for (const keypoint of hand.keypoints) {
        const name = keypoint.name.split("_")[0].toString().toLowerCase();
        const color = config.landmarkColors[name];
        drawPoint(ctx, keypoint.x, keypoint.y, 3, color);
      }

      // getting data from tensorflow for hands
      const keypoints3D = hand.keypoints3D.map((keypoint) => [
        keypoint.x,
        keypoint.y,
        keypoint.z,
      ]);

      const predictions = GE.estimate(keypoints3D, 9);

      // if don't recognize any gesture, debug actual movement on left hand
      if (!predictions.gestures.length) {
        updateDebugInfo(predictions.poseData, "left");
      }

      if (predictions.gestures.length > 0) {
        // find gesture with highest match score
        const result = predictions.gestures.reduce((p, c) =>
          p.score > c.score ? p : c
        );
        const found = config.gestureStrings[result.name];
        const chosenHand = hand.handedness.toLowerCase();

        updateDebugInfo(predictions.poseData, chosenHand);

        // If it's not the 'dont' gesture, continue logic normally
        if (found !== config.gestureStrings.dont) {
          resultLayer[chosenHand].innerText = found;
          continue;
        }

        checkGestureCombination(chosenHand, predictions.poseData);
      }
    }
    // ...and so on
    setTimeout(() => {
      estimateHands();
    }, 1000 / config.video.fps);
  };

  estimateHands();
  console.log("Starting predictions");
}

async function initCamera(width, height, fps) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      frameRate: { max: fps },
    },
  };

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

function updateDebugInfo(data, hand) {
  const summaryTable = `#summary-${hand}`;
  for (let fingerIdx in data) {
    document.querySelector(`${summaryTable} span#curl-${fingerIdx}`).innerHTML =
      data[fingerIdx][1];
    document.querySelector(`${summaryTable} span#dir-${fingerIdx}`).innerHTML =
      data[fingerIdx][2];
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initCamera(config.video.width, config.video.height, config.video.fps).then(
    (video) => {
      video.play();
      video.addEventListener("loadeddata", (event) => {
        console.log("Camera is ready");
        main();
      });
    }
  );

  const canvas = document.querySelector("#pose-canvas");
  canvas.width = config.video.width;
  canvas.height = config.video.height;
  console.log("Canvas initialized");
});
