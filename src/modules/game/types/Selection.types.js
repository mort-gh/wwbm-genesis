import PropTypes from 'prop-types';

export default {
   questions: PropTypes.instanceOf(Array).isRequired,
   question: PropTypes.instanceOf(Object).isRequired,
   score: PropTypes.number.isRequired,
   questionNumber: PropTypes.number.isRequired,
   totalQuestions: PropTypes.number.isRequired,
   saveScore: PropTypes.func.isRequired,
   nextQuestionHandler: PropTypes.func.isRequired,
   history: PropTypes.shape({
      push: PropTypes.func.isRequired,
   }).isRequired,
};
