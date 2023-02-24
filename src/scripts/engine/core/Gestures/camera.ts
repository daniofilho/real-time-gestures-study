const initCamera = async (
  width: number,
  height: number,
  fps: number
): Promise<HTMLVideoElement> => {
  const constraints = {
    audio: false,
    video: {
      facingMode: 'user',
      width: width,
      height: height,
      frameRate: { max: fps },
    },
  };

  const video = document.getElementById('camera') as HTMLVideoElement;
  if (!video) throw new Error('No DOM for camera found!');

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
};

export default initCamera;
