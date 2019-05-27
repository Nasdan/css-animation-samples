import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { AnimationComponent } from './animation';
import { PointsPath } from '../pointsPath';

interface Props {
  startAnimation: boolean;
}

const getAnimationStyles = (props: Props) => (
  {
    x: spring(getXValue(props), { stiffness: 300, damping: 47 }),
    y: spring(getYValue(props), { stiffness: 80, damping: 50 }),
  }
);

const xValue = {
  origin: 0,
  destination: 300,
};

const getXValue = (props): number => (
  props.startAnimation ?
    xValue.destination :
    xValue.origin
);

const yValue = {
  origin: 0,
  destination: 300,
};

const getYValue = (props): number => (
  props.startAnimation ?
    yValue.destination :
    yValue.origin
);

export const PointsPathAnimation = (Component) =>
  AnimationComponent((props) => (
    <Motion
      style={getAnimationStyles(props)}
      onRest={onRest}
    >
      {({ x, y }) => (
        <g>
          <PointsPath
            originPoint={{ x: props.x, y: props.y }}
            nextPoint={{ x, y }}
          />
          <Component
            {...props}
            translate={`translate(${x}, ${y})`}
          />
        </g>
      )}
    </Motion>
  ));

  const onRest = () => {
    // tslint:disable-next-line:no-console
    console.log('Animation interrupted!!');
  }
