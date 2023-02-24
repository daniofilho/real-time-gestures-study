import {
  ICanvasDrawer,
  IRectangleProps,
  ICanvasDrawerProps,
  ITextProps,
  IPointParams,
} from './types';

const CanvasDrawer = ({ context }: ICanvasDrawerProps): ICanvasDrawer => ({
  rectangle: ({ color, x, y, height, width }: IRectangleProps) => {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  },
  text: ({ color, x, y, text, fontSize }: ITextProps) => {
    context.font = `${fontSize} Arial`;
    context.fillStyle = color;
    context.fillText(text, x, y);
  },
  point: ({ color, radius, x, y }: IPointParams) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  },
});

export default CanvasDrawer;
