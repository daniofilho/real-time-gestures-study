import CanvasDrawer from '../../core/CanvasDrawer';
import { ICanvasDrawer } from '../../core/CanvasDrawer/types';
import { IGesturesProps, AvailableGestures } from './types';
import * as config from './config';
import { gestures } from './mappedGestures';

import fp from 'fingerpose';

class Gestures {
  #video?: HTMLVideoElement;
  #drawer?: ICanvasDrawer;
  #detector?: any; // ! FIX ANY
  #gestureEstimator?: any; // ! FIX ANY

  #actualGesture: AvailableGestures = '';
  #x: number = 0;

  constructor({ context, video }: IGesturesProps) {
    this.#drawer = CanvasDrawer({ context });
    this.#video = video;
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  #createDetector = async () => {
    return (window as any).handPoseDetection.createDetector(
      (window as any).handPoseDetection.SupportedModels.MediaPipeHands,
      {
        runtime: 'mediapipe',
        modelType: 'full',
        maxHands: 1,
        solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915`,
      }
    );
  };

  start = async () => {
    this.#gestureEstimator = new fp.GestureEstimator(gestures);
    this.#detector = await this.#createDetector();
  };

  getGesture = (): AvailableGestures => this.#actualGesture;
  get x() {
    return this.#x;
  }

  render = async ({}: IRenderObjectProps) => {
    if (!this.#drawer || !this.#video || !this.#detector || !this.#gestureEstimator) return;

    // get hand landmarks from video
    const hands = await this.#detector.estimateHands(this.#video, {
      flipHorizontal: true,
    });

    for (const hand of hands) {
      for (const keypoint of hand.keypoints) {
        const name = keypoint.name
          .split('_')[0]
          .toString()
          .toLowerCase() as keyof typeof config.landmarkColors;
        const color = config.landmarkColors[name];

        // The X of the player will be the "wrist" position
        if (name === 'wrist') this.#x = keypoint.x;

        this.#drawer.point({
          x: keypoint.x,
          y: keypoint.y,
          radius: 3,
          color,
        });
      }

      // getting data from tensorflow for hands
      const keypoints3D = hand.keypoints3D.map((keypoint: any) => [
        keypoint.x,
        keypoint.y,
        keypoint.z,
      ]); // ! FIX ANY

      const predictions = this.#gestureEstimator.estimate(keypoints3D, 9);

      if (predictions.gestures.length > 0) {
        // find gesture with highest match score
        const result = predictions.gestures.reduce((p: any, c: any) => (p.score > c.score ? p : c)); // ! FIX ANY
        const found = result.name as AvailableGestures;

        this.#actualGesture = found;
      } else {
        this.#actualGesture = '';
      }
    }
  };
}

export default Gestures;
