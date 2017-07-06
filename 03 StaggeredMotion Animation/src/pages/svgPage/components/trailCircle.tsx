import * as React from 'react';
import { RainbowAnimation, TrailAnimation } from '../../../common/components/animations';
import { Circle } from './circle';

interface Props {
  y: number;
  x: number;
}

interface State {
  startAnimation: boolean;
}

const RenderTrailCirle = TrailAnimation(Circle);

export class TrailCircle extends React.Component<Props, State> {
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
      <RenderTrailCirle
        className="cursor-pointer"
        onClick={this.onClick}
        startAnimation={this.state.startAnimation}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
}
