import QuizData from "../Data/quizData"
import { Action, QuizState } from "../Data/quizData.types"

const quiz = QuizData.quizzes[0]

const QuizReducer = (state: QuizState, action: Action) => {
    switch (action.type) {
        case "LOAD_QUIZ":
            return {...state, 
                score: 0,
                status: "starting",
                title: action.payload.title,
                questions: action.payload.questions,
                quizId: action.payload.quizId,
                questionNumber: 1,
                totalQuestions: action.payload.questions.length,
                correctAnswers: 0,
                accuracy: 0
            }
        case "RESET":
            return {...state, 
                score: 0,
                status: "starting",
                quiz: quiz,
                questionNumber: 1,
                totalQuestions: quiz.questions.length,
                correctAnswers: 0
            }
        case "INCREASE_SCORE":
            return {...state, score: state.score + action.payload}
        case "DECREASE_SCORE":
            return {...state, score: state.score - action.payload}
        case "NEXT_QUESTION":
            return {...state, questionNumber: state.totalQuestions === state.questionNumber ? (state.totalQuestions) : (state.questionNumber + 1)}
        case "PREVIOUS_QUESTION":
            return {...state, questionNumber: state.questionNumber <= 1 ? (1) : (state.questionNumber - 1)}
        case "CORRECT_ANSWER":
            return {...state, correctAnswers: state.correctAnswers + 1}
        case "ACCURACY":
            return {...state, accuracy : action.payload}
        default:
            return state;
    }
}

export default QuizReducer