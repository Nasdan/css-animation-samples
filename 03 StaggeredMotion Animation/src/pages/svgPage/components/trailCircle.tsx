import * as React from 'react';
import { RainbowAnimation, TrailAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

const RenderTrailCircle = TrailAnimation(Circle);

export const TrailCircle: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderTrailCircle
      className="cursor-pointer"
      x={props.x}
      y={props.y}
    />
  );
};
