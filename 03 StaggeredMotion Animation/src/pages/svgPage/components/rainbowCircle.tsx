import * as React from 'react';
import { RainbowAnimation } from '../../../common/components/animations';
import { Circle } from './circle';
const styles: any = require('./rainbowCircle.scss');

interface Props {
  y: number;
}

interface State {
  startAnimation: boolean;
}

const RenderRainbowCirle = RainbowAnimation(Circle);

export class RainbowCircle extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      startAnimation: false,
    };
  }

  onClick = () => {
    this.setState({
      startAnimation: !this.state.startAnimation,
    });
  }

  render() {
    return (
      <RenderRainbowCirle
        className={styles.circle}
        onClick={this.onClick}
        startAnimation={this.state.startAnimation}
        y={this.props.y}
      />
    );
  }
}
