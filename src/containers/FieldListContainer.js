import { connect } from 'react-redux';
import FieldList from '../components/FieldList';
import { changeValue, addField } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.editor[ownProps.title],
    title: ownProps.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value, index, title) => {
      dispatch(changeValue(value, index, title));
    },
    onAddField: (title) => {
      dispatch(addField(title));
    },

  };
};

const FieldListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldList);

export default FieldListContainer;