import { UserAction } from "../Data/quizData.types"

const UserReducer = (state: any, action: UserAction) => {

    switch (action.type) {
        case "QUIZ_COMPLETE":
            return {...state, 
            totalScore: state.totalScore + action.payload.score,
            totalAccuracy: (state.totalAccuracy + action.payload.accuracy)/2,
            quizCompleted: state.quizCompleted.concat({quizId: action.payload.quizId, score: action.payload.score})
            }
        default:
            return state;
    }
}

export default UserReducer