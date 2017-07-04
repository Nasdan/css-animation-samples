import * as React from 'react';
const styles: any = require('./circle.scss');

export const Circle: React.StatelessComponent<{}> = (props) => {
  return (
    <circle
      className={styles.circle}
      cx={45}
      cy={45}
      r={25}
    />
  );
};
