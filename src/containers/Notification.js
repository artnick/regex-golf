import React from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../actions';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: false };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notification;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.notification) {
      this.setState({
        isShowing: true,
      });
      this.timerID = setTimeout(() => {
        this.setState({
          isShowing: false,
        });
        this.props.dispatch(hideNotification());
      }, 4000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    return (
      <div className={`notification ${this.state.isShowing ? 'notification_show' : ''}`}>
        {this.props.notification}
      </div>
    );
  }
}

Notification.propTypes = {
  notification: React.PropTypes.string,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
