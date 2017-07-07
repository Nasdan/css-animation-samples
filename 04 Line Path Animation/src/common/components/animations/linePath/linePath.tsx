import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { AnimationComponent } from '../animation';
import { LineComponent } from './line';
import { points, Point, addPoint } from './points';

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

export const LinePathAnimation = (Component) =>
  AnimationComponent((props) => (
    <Motion
      style={getAnimationStyles(props)}
    >
      {({ x, y }) => {
        addPoint({ x, y });

        return (
          <g>
            {
              points.map((point, index) => (
                index > 0 &&
                <LineComponent
                  key={index}
                  x1={props.x + points[index - 1].x}
                  y1={props.y + points[index - 1].y}
                  x2={props.x + point.x}
                  y2={props.y + point.y}
                />
              ))
            }
            <Component
              {...props}
              translate={`translate(${x}, ${y})`}
            />
          </g>
        );
      }}
    </Motion>
  ));
