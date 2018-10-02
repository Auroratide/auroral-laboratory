import React from 'react';

/**
 * This is a container for a React component. It carries behavioural logic for
 * hidding the alert component. We separate behaviour from presentation since
 * in more sophisticated projects, this kind of visibility behaviour could
 * be used for multiple components.
 */

export default WrappedComponent => class ClosableAlertContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  close() {
    this.setState({ visible: false });
  }
  
  render() {
    return this.state.visible && <WrappedComponent onClose={() => this.close()} {...this.props} />;
  }
}