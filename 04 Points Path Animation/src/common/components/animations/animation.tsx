import * as React from 'react';

interface State {
  startAnimation: boolean;
}

export const AnimationComponent = (Component) => (
  class extends React.Component<any, State> {
    constructor() {
      super();
      this.state = {
        startAnimation: false,
      };
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
