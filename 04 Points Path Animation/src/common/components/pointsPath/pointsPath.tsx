import * as React from 'react';
import { LineComponent } from './line';

interface Point {
  x: number;
  y: number;
}

interface Props {
  originPoint: Point;
  nextPoint: Point;
}

interface State {
  points: Point[];
}

export class PointsPath extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      points: [],
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!this.existPoint(nextProps.nextPoint)) {
      this.addPoint(nextProps.nextPoint);
    }
  }

  existPoint = (point: Point) => {
    const index = this.state.points.findIndex((p) => (
      p.x === point.x &&
      p.y === point.y
    ));

    return index > 0;
  }

  addPoint = (point: Point) => {
    this.setState({
      points: [...this.state.points, point],
    });
  }

  render() {
    return (
      <g>
        {
          this.state.points.map((point, index) => (
            index > 0 &&
            <LineComponent
              key={index}
              x1={this.props.originPoint.x + this.state.points[index - 1].x}
              y1={this.props.originPoint.y + this.state.points[index - 1].y}
              x2={this.props.originPoint.x + point.x}
              y2={this.props.originPoint.y + point.y}
            />
          ))
        }
      </g>
    );
  }
}
