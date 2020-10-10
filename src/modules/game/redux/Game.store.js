import questions from '../../../db/questions.json';

export default {
   questions,
   question: questions[0],
   questionNumber: 1,
   score: 0,
   totalQuestions: questions.length,
   disable: false,
};
