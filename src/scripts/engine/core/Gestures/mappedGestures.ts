const { GestureDescription, Finger, FingerCurl } = (window as any).fp; // ! FIX ANY

const accelerateGesture = new GestureDescription('accelerate'); // ✊️

// accelerate
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
accelerateGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
accelerateGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  accelerateGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  accelerateGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

const gestures = [accelerateGesture];

export { gestures };
