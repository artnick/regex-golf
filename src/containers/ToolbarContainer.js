import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { saveTask, changePrivate } from '../actions';

const mapStateToProps = (state) => {
  return {
    isPrivate: state.editor.isPrivate,
    isSaving: state.editor.isSaving,
    link: state.editor.link,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(saveTask());
    },
    onChangePrivate: (checked) => {
      dispatch(changePrivate(checked));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);