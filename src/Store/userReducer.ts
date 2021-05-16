import { UserAction } from "../Data/quizData.types"

const UserReducer = (state: any, action: UserAction) => {

    switch (action.type) {
        case "QUIZ_COMPLETE":
            return {...state, 
            totalScore: state.totalScore + action.payload.score,
            totalAccuracy: (state.totalAccuracy === 0 ? action.payload.accuracy : (state.totalAccuracy + action.payload.accuracy)/2) ,
            quizCompleted: state.quizCompleted.concat({quizId: action.payload.quizId, score: action.payload.score})
            }
        case "USER_LOGIN":
            return {...state, isLoggedIn: true}
        case "USER_LOGOUT":
            return {...state, isLoggedIn: false}
        case "LOAD_USER":
            return {...state,
                userId: action.payload._id, 
                name: action.payload.name,
                email: action.payload.email,
                totalScore: action.payload.totalScore,
                totalAccuracy: action.payload.totalAccuracy,
                quizCompleted: action.payload.quizCompleted,
            }
        default:
            return state;
    }
}

export default UserReducer