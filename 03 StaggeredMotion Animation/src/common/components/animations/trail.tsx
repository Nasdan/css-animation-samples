import * as React from 'react';
import { StaggeredMotion, spring, SpringHelperConfig } from 'react-motion';

interface Props {
  startAnimation: boolean;
}

const animationConfig: SpringHelperConfig = {
  stiffness: 25,
  damping: 5,
};

const getAnimationStyles = (props: Props) => (previousStyles: any[]) => (
  previousStyles.map((_, index) => (
    {
      x: spring(getXValue(props), animationConfig),
    }
  ))
);

const getXValue = (props: Props): number => (
  props.startAnimation ?
    100 :
    0
);

const getX2LineValue = (initalXValue, currentXValue) => (
  currentXValue > initalXValue ?
    currentXValue + initalXValue :
    initalXValue
);

export const TrailAnimation = (Component) => (
  class extends React.Component<any, {}> {
    render() {
      return (
        <StaggeredMotion
          defaultStyles={[0, 1].map(() => ({ x: 0 }))}
          styles={getAnimationStyles(this.props)}
        >
          {(springs) => (
            <g>
              <line
                x1={this.props.x}
                x2={getX2LineValue(this.props.x, springs[1].x)}
                y1={this.props.y}
                y2={this.props.y}
                stroke="black"
              />
              <Component
                {...this.props}
                translateX={`translate(${springs[0].x})`}
              />
            </g>
          )}
        </StaggeredMotion>
      );
    }
  }
);
