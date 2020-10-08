// libraries
import { connect } from 'react-redux';

// actions
import { restartGame } from '../../game/redux/Game.actions';

// module
import GameOver from '../screens/GameOver';

const mapStateToProps = (state) => state.game;

const mapDispatchToProps = (dispatch) => ({
   restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
