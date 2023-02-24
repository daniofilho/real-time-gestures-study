import config from '../../../config';
import CanvasDrawer from '../../core/CanvasDrawer';
import { ICanvasDrawer } from '../../core/CanvasDrawer/types';

class Car {
  drawer: ICanvasDrawer | null;

  width: number = config.canvas.width * 0.15;
  height: number = config.canvas.height * 0.1;
  color = '#FF0';
  y: number = config.canvas.height - config.canvas.height * 0.2;
  sideVelocity: number = 0.05;
  acceleration: number = 2;

  position: number = 0; // -1 to 1, 0 is center of screen
  distanceTraveled: number = 0;
  positionOnTrack: number = 0;
  speed: number = 0;
  maxSpeed: number = 100;
  maxReverseSpeed: number = -1;

  centerX: number = config.canvas.width / 2;
  screenWidthWithBounds: number = config.canvas.width - this.width;

  constructor({ context }: ICarProps) {
    this.drawer = CanvasDrawer({ context });
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  setPosition = (x: number): void => {
    // TODO make this logic better

    const halfScreenWidth = config.canvas.width / 2;

    let handPosition = x;
    let screenSide = 'left';

    if (handPosition > halfScreenWidth) {
      handPosition -= halfScreenWidth;
      screenSide = 'right';
    }

    let newPosition = (100 * handPosition) / halfScreenWidth / 100;

    if (newPosition < -1) newPosition = -1;

    if (screenSide === 'left') {
      newPosition = (1 - newPosition) * -1;
    }

    this.position = newPosition;
  };

  accelerate = (deltaTime: number): void => {
    let newSpeed = this.speed + this.acceleration * deltaTime;
    if (newSpeed >= this.maxSpeed) newSpeed = this.maxSpeed;

    this.speed = newSpeed;
  };

  slowDown = (deltaTime: number): void => {
    let newSpeed = 0;
    const reverseSpeed = this.acceleration * 2;

    if (this.speed <= 0) {
      newSpeed = this.speed + reverseSpeed * deltaTime;

      if (newSpeed > 0) newSpeed = 0;
    } else {
      newSpeed = this.speed - reverseSpeed * deltaTime;

      if (newSpeed <= 0) newSpeed = 0;
    }

    this.speed = newSpeed;
  };

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render = ({ deltaTime }: IRenderObjectProps): void => {
    if (!this.drawer) return;

    let carX = this.centerX + (this.screenWidthWithBounds * this.position) / 2 - this.width / 2;

    this.drawer.rectangle({
      color: this.color,
      height: this.height,
      width: this.width,
      y: this.y,
      x: carX,
    });

    // Update distance traveled based on speed
    //const newTraveled = (this.speed / 70) * deltaTime;
    const newTraveled = this.speed * 70 * deltaTime;
    if (this.speed > 0) this.distanceTraveled += newTraveled;
    this.positionOnTrack += newTraveled;
  };
}

export default Car;
