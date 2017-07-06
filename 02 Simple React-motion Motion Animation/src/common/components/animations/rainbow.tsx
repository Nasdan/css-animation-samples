import * as React from 'react';
import { Motion, spring, presets, SpringHelperConfig } from 'react-motion';
import * as chroma from 'chroma-js';

interface Props {
  startAnimation: boolean;
}

const animationConfig: SpringHelperConfig = {
  stiffness: 25,
  damping: 5,
};

const getAnimationStyle = (props: Props) => (
  {
    xSpring: spring(getXValue(props), animationConfig),
    colorSpring: spring(getColorValue(props), animationConfig),
  }
);

const getXValue = (props: Props): number => (
  props.startAnimation ?
    100 :
    0
);

const getColorValue = (props: Props): number => (
  props.startAnimation ?
    1 :
    0
);

const scaleColorSpring = chroma.bezier(['blue', 'red']);

export const RainbowAnimation = (Component) => (
  class extends React.Component<any, {}> {
    render() {
      return (
        <Motion style={getAnimationStyle(this.props)}>
          {({ xSpring, colorSpring }) => (
            <Component
              {...this.props}
              translateX={`translate(${xSpring})`}
              fill={scaleColorSpring(colorSpring)}
            />
          )}
        </Motion>
      );
    }
  }
);
