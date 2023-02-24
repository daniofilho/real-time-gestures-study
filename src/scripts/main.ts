import Game from './engine/core/Game/index';
import config from './config';
import initCamera from './engine/core/Gestures/camera';

window.onload = function () {
  initCamera(config.video.width, config.video.height, config.fps).then((video) => {
    video.play();
    video.addEventListener('loadeddata', () => {
      console.log('Camera is ready');

      const game = new Game(video);
      game.run();
    });
  });
};
