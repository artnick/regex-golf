import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='task'>
        <h3>ID: {this.props.match.params.id}</h3>
      </div>
    );
  }
}

Task.propTypes = {
  match: React.PropTypes.array,
  noMatch: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
};

export default Task;
