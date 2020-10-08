// libraries
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { saveScore, nextQuestionHandler } from '../redux/Game.actions';

// module
import Selection from '../screens/Selecton';

const mapStateToProps = (state) => state.game;

const mapDispatchToProps = (dispatch) => ({
   saveScore: (value) => dispatch(saveScore(value)),
   nextQuestionHandler: (num, score) => dispatch(nextQuestionHandler(num, score)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Selection);
