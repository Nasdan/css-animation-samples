import * as React from 'react';

interface Props {
  x: number;
  y: number;
  className?: string;
  translate?: string;
  fill?: string;
  onStartAnimation?: () => void;
}

export const Circle: React.StatelessComponent<Props> = (props) => {
  return (
    <circle
      style={{transition: 'all ease-in-out'}}
      className={props.className}
      cx={props.x}
      cy={props.y}
      r={25}
      transform={props.translate}
      fill={props.fill}
      onClick={props.onStartAnimation}
    />
  );
};
