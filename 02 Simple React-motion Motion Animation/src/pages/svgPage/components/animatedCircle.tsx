import * as React from 'react';
import { RainbowAnimation } from '../../../common/components/animations';
import { Circle } from './circle';
const styles: any = require('./animatedCircle.scss');

interface Props {
  y: number;
}

interface State {
  startAnimation: boolean;
}

const RenderAnimatedCirle = RainbowAnimation(Circle);

export class AnimatedCircle extends React.Component<Props, State> {
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
      <RenderAnimatedCirle
        className={styles.circle}
        onClick={this.onClick}
        startAnimation={this.state.startAnimation}
        y={this.props.y}
      />
    );
  }
}
