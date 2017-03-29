import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { fetchTask } from '../actions';

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(fetchTask(this.props.match.params.id));
  }

  render() {
    return (
      <div className='task'>
        <Task matchList={this.props.matchList} noMatchList={this.props.noMatchList}/>
      </div>
    );
  }
}

TaskPage.propTypes = {
  match: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  matchList: React.PropTypes.array,
  noMatchList: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    matchList: state.task.matchList,
    noMatchList: state.task.noMatchList,
  };
};

export default connect(
  mapStateToProps,
  null
)(TaskPage);
