import React from 'react';
import { connect } from 'react-redux';
import SaveButton from '../components/SaveButton';
import { saveTask } from '../actions';

const Toolbar = ({ onSave }) => (
  <div>
    <SaveButton onSave={onSave}/>
  </div>
);

Toolbar.propTypes = {
  onSave: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isPrivate: state.editor.isPrivate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(saveTask());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);