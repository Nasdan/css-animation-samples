import * as React from 'react';
import { AutoSizer } from 'react-virtualized';
import { viewBox } from './constants';
import { Circle, AnimatedCircle } from './components';
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
              y={25}
              className={animationStyles.rainbowAnimation}
            />
            <AnimatedCircle
              y={75}
            />
          </svg>
        )}
      </AutoSizer>
    </div>
  );
};
