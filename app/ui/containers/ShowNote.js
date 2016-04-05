import { Note } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
