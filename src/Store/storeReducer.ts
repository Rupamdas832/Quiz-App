import { StoreAction, Question, Quiz } from "../Data/quizData.types"

const StoreReducer = (state: any, action: StoreAction) => {
    switch (action.type) {
        case "IS_LOADING": 
            return {...state, loadingMessage: action.payload}
        case "QUIZ_COMPLETE":
            return {...state, quizzes: state.quizzes.map((quiz: Quiz)  => {
                if(quiz.quizId === action.payload.quizId){
                    quiz.highestScore = action.payload.score;
                    quiz.highScorerName = action.payload.name;
                    return quiz
                }
                return quiz
            })}
        default:
            return state;
    }
}

export default StoreReducer