import * as React from 'react';
import { TransitionMotion, spring } from 'react-motion';
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

interface State {
  components: [{ key: string }];
}

const keys = {
  pointsPath: 'pointsPath',
  externalComponent: 'externalComponent',
};

const offset = 1;

export const TransitionPointsPathAnimation = (Component) =>
  AnimationComponent(class extends React.Component<any, State> {
    constructor() {
      super();
    }

    hasTransitionEnd = ({ x, y }) => {
      return (x < xValue.origin + offset || x > xValue.destination - offset) &&
        (y < yValue.origin + offset || y > yValue.destination - offset);
    }

    render() {
      return (
        <TransitionMotion
          styles={[{
            key: keys.externalComponent,
            style: getAnimationStyles(this.props),
          }]}
        >
          {(components) => (
            <g>
              {
                components.map(({ key, style }) => (
                  !this.hasTransitionEnd({ x: style.x, y: style.y }) ?
                    <g key={key}>
                      <PointsPath
                        originPoint={{ x: this.props.x, y: this.props.y }}
                        nextPoint={{ x: style.x, y: style.y }}
                      />
                      <Component
                        {...this.props}
                        x={this.props.x + style.x}
                        y={this.props.y + style.y}
                      />
                    </g> :
                    <Component
                      key={key}
                      {...this.props}
                      x={this.props.x + style.x}
                      y={this.props.y + style.y}
                    />
                ))}
            </g>
          )}
        </TransitionMotion>
      );
    }
  });
