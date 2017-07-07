import * as React from 'react';
import { StaggeredMotion, spring, SpringHelperConfig } from 'react-motion';
import { AnimationComponent } from './animation';

interface Props {
  startAnimation: boolean;
}

const animationConfig: SpringHelperConfig = {
  stiffness: 10,
  damping: 5,
};

const getAnimationStyles = (props: Props) => (previousStyles: any[]) => (
  previousStyles.map((_, index) => {
    const x = spring(getXValue(props), animationConfig);
    // tslint:disable-next-line:no-console
    console.log(x);

    return index === 0 ?
      {
        x,
        y: spring(getYValue(props, previousStyles[0].x), animationConfig),
      } :
      {
        x: spring(previousStyles[index - 1].x, animationConfig),
        y: spring(previousStyles[index - 1].y, animationConfig),
      };
  })
);

const getXValue = (props: Props): number => (
  props.startAnimation ?
    -300 :
    0
);

const getYValue = (props: Props, x): number => {
  const result = -x;
  // tslint:disable-next-line:no-console
  console.log(result);
  return result;
};

const getX2LineValue = (initalXValue, currentXValue) => (
  currentXValue > initalXValue ?
    currentXValue + initalXValue :
    initalXValue
);

export const TrailAnimation = (Component) =>
  AnimationComponent((props) => (
    <StaggeredMotion
      defaultStyles={[0, 1].map(() => ({ x: 0, y: 0 }))}
      styles={getAnimationStyles(props)}
    >
      {(springs) => {
        const x2 = springs[0].x + props.x;
        const y2 = springs[0].y + props.y;
        return (
          <g>
            <path
              d={`M${props.x} ${props.y} C${x2 + 10} ${y2 + 10}, ${x2 + 30} ${y2 + 20}, ${x2 + 40} ${y2 + 10}`}
              stroke="black"
              fill="transparent"
            />
            <Component
              {...props}
              translateX={`translate(${springs[0].x}, ${springs[0].y})`}
            />
          </g>
        );
      }}
    </StaggeredMotion>
  ));
