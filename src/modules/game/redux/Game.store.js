import questions from '../../../db/questions.json';
import { toShuffle } from '../../../shared/utils';

// Get the first question from the list:
const initialQuestion = questions[0];
// Add random answers before rendering the first question:
const shuffledOptions = toShuffle(initialQuestion.options);
initialQuestion.options = shuffledOptions;

export default {
   questions,
   question: initialQuestion,
   questionNumber: 1,
   score: 0,
   totalQuestions: questions.length,
   disable: false,
};
