import * as React from 'react';
import { Motion, spring, presets, SpringHelperConfig } from 'react-motion';
import * as chroma from 'chroma-js';
import { AnimationComponent } from './animation';

interface Props {
  startAnimation: boolean;
}

const animationConfig: SpringHelperConfig = {
  stiffness: 25,
  damping: 1,
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

export const RainbowAnimation = (Component) =>
  AnimationComponent((props) => (
    <Motion style={getAnimationStyle(props)}>
      {({ xSpring, colorSpring }) => (
        <Component
          {...props}
          translate={`translate(${xSpring})`}
          fill={scaleColorSpring(colorSpring)}
        />
      )}
    </Motion>
  ));
