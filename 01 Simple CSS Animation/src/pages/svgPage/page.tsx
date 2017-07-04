import * as React from 'react';
import { AutoSizer } from 'react-virtualized';
import { viewBox } from './constants';
import { Circle } from './components';
const styles: any = require('./page.scss');

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
            <Circle />
          </svg>
        )}
      </AutoSizer>
    </div>
  );
};
