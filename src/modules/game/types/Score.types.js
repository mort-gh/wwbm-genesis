import PropTypes from 'prop-types';

export default {
   score: PropTypes.number.isRequired,
   questions: PropTypes.instanceOf(Array).isRequired,
};
