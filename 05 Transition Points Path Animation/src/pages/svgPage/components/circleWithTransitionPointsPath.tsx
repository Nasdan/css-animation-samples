import * as React from 'react';
import { TransitionPointsPathAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

const RenderCircleWithTransitionPointsPath = TransitionPointsPathAnimation(Circle);

export const CircleWithTransitionPointsPath: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderCircleWithTransitionPointsPath
      className="cursor-pointer"
      x={props.x}
      y={props.y}
    />
  );
};
