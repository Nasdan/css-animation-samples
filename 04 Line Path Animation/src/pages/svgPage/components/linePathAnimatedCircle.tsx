import * as React from 'react';
import { LinePathAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

const RenderLinePathAnimedCircle = LinePathAnimation(Circle);

export const LinePathAnimatedCircle: React.StatelessComponent<Props> = (props) => {
  return (
    <RenderLinePathAnimedCircle
      className="cursor-pointer"
      x={props.x}
      y={props.y}
    />
  );
};
