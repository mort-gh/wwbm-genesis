// libraries
import { connect } from 'react-redux';

// modules
import Score from '../screens/Score';

const mapStateToProps = (state) => state.game;

export default connect(mapStateToProps)(Score);
