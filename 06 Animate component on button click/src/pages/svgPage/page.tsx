import * as React from 'react';
import { AutoSizer } from 'react-virtualized';
import { viewBox } from './constants';
import {
  Circle, RainbowCircle, PathAnimatedCircle, CircleWithPointsPath,
  CircleWithTransitionPointsPath,
} from './components';
const styles: any = require('./page.scss');
const animationStyles: any = require('../../content/sass/animations/rainbow.scss');

interface State {
  startAnimationCircle4: boolean;
  startAnimationCircle5: boolean;
}

export class SVGPageComponent extends React.PureComponent<{}, State> {
  constructor() {
    super();
    this.state = {
      startAnimationCircle4: false,
      startAnimationCircle5: false,
    };
  }

  private onClick4 = () => {
    this.setState({
      ...this.state,
      startAnimationCircle4: !this.state.startAnimationCircle4,
    });
  }
  private onClick5 = () => {
    this.setState({
      ...this.state,
      startAnimationCircle5: !this.state.startAnimationCircle5,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <button type="button" onClick={this.onClick4}>
          Start animation Circle 4
        </button>
        <button type="button" onClick={this.onClick5}>
          Start animation Circle 5
        </button>

        <AutoSizer>
          {({ width, height }) => (
            <svg
              width={width}
              height={height}
              viewBox={viewBox}
            >
              <Circle
                x={45}
                y={25}
                className={animationStyles.rainbowAnimation}
              />
              <RainbowCircle
                x={45}
                y={75}
              />
              <PathAnimatedCircle
                x={45}
                y={125}
              />
              <CircleWithPointsPath
                x={45}
                y={175}
                startAnimation={this.state.startAnimationCircle4}
              />
              <CircleWithTransitionPointsPath
                x={45}
                y={225}
                startAnimation={this.state.startAnimationCircle5}
              />
            </svg>
          )}
        </AutoSizer>
      </div>
    );
  }
}
