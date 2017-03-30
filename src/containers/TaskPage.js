import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { fetchTask, changeRegExp } from '../actions';

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    return (
      <div className='task'>
        <Task
          regExp={this.props.regExp} 
          matchList={this.props.matchList}
          noMatchList={this.props.noMatchList}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

TaskPage.propTypes = {
  match: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  regExp: React.PropTypes.string,
  matchList: React.PropTypes.array,
  noMatchList: React.PropTypes.array,
  onChange: React.PropTypes.func,
  onLoad: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    regExp: state.task.regExp,
    matchList: state.task.matchList,
    noMatchList: state.task.noMatchList,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(changeRegExp(value));
    },
    onLoad: (id) => {
      dispatch(fetchTask(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage);
