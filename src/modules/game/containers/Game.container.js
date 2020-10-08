// libraries
import { connect } from 'react-redux';

// actions

// module
import Game from '../screens/Game';

const mapStateToProps = (state) => state.game;

export default connect(mapStateToProps)(Game);
