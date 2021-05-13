import { Action } from "../Data/quizData.types"

const QuizReducer = (state: any, action: Action) => {
    switch (action.type) {
        case "RESET":
            return {...state, score: 0, questionNumber: 1}
        case "INCREASE_SCORE":
            return {...state, score: state.score + action.payload}
        case "DECREASE_SCORE":
            return {...state, score: state.score - action.payload}
        case "NEXT_QUESTION":
            return {...state, questionNumber: state.totalQuestions === state.questionNumber ? (state.totalQuestions) : (state.questionNumber + 1)}
        case "PREVIOUS_QUESTION":
            return {...state, questionNumber: state.questionNumber <= 1 ? (1) : (state.questionNumber - 1)}
        default:
            return state;
    }
}

export default QuizReducer