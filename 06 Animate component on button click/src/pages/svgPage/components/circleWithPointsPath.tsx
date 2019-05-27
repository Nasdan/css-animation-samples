import * as React from 'react';
import { PointsPathAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
  startAnimation: boolean;
}

const RenderCircleWithPointsPath = PointsPathAnimation(Circle);

export const CircleWithPointsPath: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderCircleWithPointsPath
      className="cursor-pointer"
      x={props.x}
      y={props.y}
      startAnimation={props.startAnimation}
    />
  );
};
