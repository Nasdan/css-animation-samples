import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { AnimationComponent } from './animation';

interface Props {
  startAnimation: boolean;
}

const getAnimationStyles = (props: Props) => (
  {
    x: spring(getXValue(props), { stiffness: 300, damping: 47 }),
    y: spring(getYValue(props), { stiffness: 80, damping: 50 }),
  }
);

const getXValue = (props): number => (
  props.startAnimation ?
    300 :
    0
);

const getYValue = (props): number => (
  props.startAnimation ?
    300 :
    0
);

export const PathAnimation = (Component) =>
  AnimationComponent((props) => (
    <Motion
      style={getAnimationStyles(props)}
    >
      {({x, y}) => {
        return (
          <g>
            <Component
              {...props}
              translate={`translate(${x}, ${y})`}
            />
          </g>
        );
      }}
    </Motion>
  ));
