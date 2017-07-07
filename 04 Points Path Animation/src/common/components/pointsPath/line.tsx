import * as React from 'react';

interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const LineComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <line
      x1={props.x1}
      y1={props.y1}
      x2={props.x2}
      y2={props.y2}
      strokeWidth={2}
      stroke="black"
    />
  );
};
