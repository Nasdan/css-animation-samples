import * as React from 'react';

interface Props {
  startAnimation?: boolean;
}

interface State {
  startAnimation: boolean;
}

export const AnimationComponent = (Component) => (
  class extends React.Component<any & Props, State> {
    constructor() {
      super();
      this.state = {
        startAnimation: false,
      };
    }

    componentWillReceiveProps(nextProps: Props) {
      this.setState({
        startAnimation: nextProps.startAnimation,
      });
    }

    onStartAnimation = () => {
      this.setState({
        startAnimation: !this.state.startAnimation,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          startAnimation={this.state.startAnimation}
          onStartAnimation={this.onStartAnimation}
        />
      );
    }
  }
);
