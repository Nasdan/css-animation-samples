import * as React from 'react';
import { AutoSizer } from 'react-virtualized';
import { viewBox } from './constants';
import { Circle, RainbowCircle, TrailCircle } from './components';
const styles: any = require('./page.scss');
const animationStyles: any = require('../../content/sass/animations/rainbow.scss');

export const SVGPageComponent: React.StatelessComponent<{}> = (props) => {
  return (
    <div className={styles.container}>
      <AutoSizer>
        {({ width, height }) => (
          <svg
            width={width}
            height={height}
            viewBox={viewBox}
          >
            <Circle
              x={45}
              y={5}
              className={animationStyles.rainbowAnimation}
            />
            <RainbowCircle
              x={45}
              y={55}
            />
            <TrailCircle
              x={45}
              y={105}
            />
          </svg>
        )}
      </AutoSizer>
    </div>
  );
};
