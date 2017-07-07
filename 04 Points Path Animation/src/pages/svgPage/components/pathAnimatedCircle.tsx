import * as React from 'react';
import { PathAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

const RenderPathAnimedCircle = PathAnimation(Circle);

export const PathAnimatedCircle: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderPathAnimedCircle
      className="cursor-pointer"
      x={props.x}
      y={props.y}
    />
  );
};
