import config from '../../../config';
import CanvasDrawer from '../../core/CanvasDrawer';
import { ICanvasDrawer } from '../../core/CanvasDrawer/types';
import Car from '../car';
import { ILevelProps } from './types';

class Level {
  drawer?: ICanvasDrawer;
  car?: Car;
  track?: ITrack;

  sky = {
    height: config.canvas.height * 0.5,
    color: '#3983d1', // TODO parâmetro
  };

  lines = new Array(config.canvas.height / 2).fill('');
  lineHeight = (config.canvas.height - this.sky.height) / this.lines.length;

  roadProps = {
    color: '#555555', // TODO parâmetro
    width: (config.canvas.width * 1) / 2, // Road takes 100% of screen, but / 2 is to make road symmetrical on both sides
  };

  grassProps = {
    colors: ['#20aa20', '#20BB20'],
    frequency: 60,
  };

  roadLineProps = {
    colors: ['#AA0000', '#FFFFFF'],
    width: this.roadProps.width * 0.1,
    frequency: 60,
  };

  screenWidth = config.canvas.width;

  // Points on track
  //offset: number = 0; // how much the car has moved
  trackSection: number = 0; // in which section of the track is the car
  lap: number = 1;
  trackLength: number = 0;

  curvature: number = 0;
  curvatureLimit: number = 0.4;

  constructor({ context, car, track }: ILevelProps) {
    this.drawer = CanvasDrawer({ context });
    this.car = car;
    this.track = track;

    this.trackLength = this.track.coordinates[this.track.coordinates.length - 1].distance;
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // find position on track
  updateTrackSection = (): void => {
    if (!this.track || !this.car) return;

    // going forward
    if (this.car.speed >= 0) {
      if (this.car.positionOnTrack <= this.track.coordinates[this.trackSection].distance) return;

      let newTrackSection = this.trackSection + 1;
      if (newTrackSection > this.track.coordinates.length - 1) {
        newTrackSection = 0;
        this.lap++; // ! There is a glitch here, the user can reverse and add a lap everytime he cross point 0
        this.car.positionOnTrack = 0;
      }

      this.trackSection = newTrackSection;
    }
  };

  render = ({}: IRenderObjectProps) => {
    if (!this.car) return;

    this.updateTrackSection();

    this.lines.map((_, index) => {
      if (!this.drawer || !this.car || !this.track) return;

      const initialY = this.sky.height + index * this.lineHeight;

      // * This is the key code to define the width of each line and make the perspective effect of road

      let perspective = index / (config.canvas.height / 2);
      perspective = 0.05 + perspective * 0.8; // limit perspective to goes from 5% to 80%

      const variableRoadWidth = this.roadProps.width * perspective;

      // * - - -

      // * Elements Props

      let targetCurvature = this.track.coordinates[this.trackSection].curvature;
      targetCurvature = targetCurvature * this.curvatureLimit;

      // Makes the curvature of the track interpolate from a value to another instead
      // of changing values directly. This avoids an strange effect when showing curves
      const trackCurvatureDiff = targetCurvature - this.curvature * (this.car.speed * 0.5);
      this.curvature += trackCurvatureDiff;

      /*
      tentativa que não deu certo

      const trackCurvatureDiff = targetCurvature - this.curvature;
      if (trackCurvatureDiff < 0) {
        this.curvature -= 0.001 * deltaTime * Math.abs(this.car.speed);

        if (this.curvature <= targetCurvature) this.curvature = targetCurvature;
      } else {
        this.curvature += 0.001 * deltaTime * Math.abs(this.car.speed);

        if (this.curvature >= targetCurvature) this.curvature = targetCurvature;
      }*/

      const middlePoint = 0.5 + this.curvature * Math.pow(1 - perspective, 3); // * correctly apply perspective to curve
      const centerX = this.screenWidth * middlePoint;

      // # Road props
      const road = {
        ...this.roadProps,
        x: centerX - variableRoadWidth,
        width: variableRoadWidth,
      };

      // # Road line props
      const variableLineWidth = this.roadLineProps.width * perspective;

      const roadLine = {
        ...this.roadLineProps,
        color:
          Math.sin(
            this.roadLineProps.frequency * Math.pow(1 - perspective, 2) +
              this.car.positionOnTrack * 2
          ) > 0
            ? this.roadLineProps.colors[0]
            : this.roadLineProps.colors[1],
        left: {
          x: centerX - road.width - variableLineWidth,
        },
        right: {
          x: centerX + road.width,
        },
        width: variableLineWidth,
      };

      // Grass props
      const grassVariableWidth = this.screenWidth / 2 - variableLineWidth;
      const grassLeftWidth = centerX - road.width - variableLineWidth;

      const grass = {
        ...this.grassProps,
        width: grassVariableWidth,
        color:
          Math.sin(
            this.grassProps.frequency * Math.pow(1 - perspective, 2) + this.car.positionOnTrack * 2
          ) > 0
            ? this.grassProps.colors[0]
            : this.grassProps.colors[1],
        right: {
          x: centerX + road.width + variableLineWidth,
        },
        left: {
          width: grassLeftWidth,
        },
      };

      // * Draw

      // # Left Grass
      this.drawer.rectangle({
        color: grass.color,
        x: 0, // fit the rest of screen from left
        y: initialY,
        width: grass.left.width,
        height: this.lineHeight,
      });

      // # Left Road Line
      this.drawer.rectangle({
        color: roadLine.color,
        x: roadLine.left.x,
        y: initialY,
        width: roadLine.width,
        height: this.lineHeight,
      });

      // # Road
      this.drawer.rectangle({
        color: road.color,
        x: road.x,
        y: initialY,
        width: road.width * 2,
        height: this.lineHeight,
      });

      // # Right Grass
      this.drawer.rectangle({
        color: grass.color,
        x: grass.right.x,
        y: initialY,
        width: this.screenWidth - grass.right.x, // fit the rest of the screen
        height: this.lineHeight,
      });

      // # Right Road Line
      this.drawer.rectangle({
        color: roadLine.color,
        x: roadLine.right.x,
        y: initialY,
        width: roadLine.width,
        height: this.lineHeight,
      });
    });
  };
}

export default Level;
