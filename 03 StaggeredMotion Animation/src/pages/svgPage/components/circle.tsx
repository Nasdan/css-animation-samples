import * as React from 'react';

interface Props {
  y: number;
  className?: string;
  translateX?: string;
  fill?: string;
  onClick?: () => void;
}

export const Circle: React.StatelessComponent<Props> = (props) => {
  return (
    <circle
      className={props.className}
      cx={45}
      cy={props.y}
      r={25}
      transform={props.translateX}
      fill={props.fill}
      onClick={props.onClick}
    />
  );
};
