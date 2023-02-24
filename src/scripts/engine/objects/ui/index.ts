import CanvasDrawer from '../../core/CanvasDrawer';
import { ICanvasDrawer } from '../../core/CanvasDrawer/types';
import Car from '../car';
import Level from '../level';
import { IUIProps } from './types';

class UI {
  drawer?: ICanvasDrawer;
  car?: Car;
  level?: Level;

  constructor({ context, car, level }: IUIProps) {
    this.drawer = CanvasDrawer({ context });
    this.car = car;
    this.level = level;
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render = ({}: IRenderObjectProps): void => {
    if (!this.drawer || !this.car || !this.level) return;

    // Speed
    this.drawer.text({
      color: '#FFFFFF',
      text: `Speed: ${Math.floor(this.car.speed)}`,
      y: 10,
      x: 2,
      fontSize: '10px',
    });
  };
}

export default UI;
