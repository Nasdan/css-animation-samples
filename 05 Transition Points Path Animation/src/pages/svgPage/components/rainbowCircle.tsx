import * as React from 'react';
import { RainbowAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

const RenderRainbowCircle = RainbowAnimation(Circle);

export const RainbowCircle: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderRainbowCircle
      className="cursor-pointer"
      x={props.x}
      y={props.y}
    />
  );
};
