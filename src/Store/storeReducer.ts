import { StoreAction, Question } from "../Data/quizData.types"
type Quiz = {
    quizId: number;
    title: string;
    highestScore: number;
    highScorerName: string;
    questions: Question[];
};

const StoreReducer = (state: any, action: StoreAction) => {
    switch (action.type) {
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