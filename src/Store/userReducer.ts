import { User, UserAction } from "../Data/quizData.types"

const UserReducer = (state: User, action: UserAction) => {

    switch (action.type) {
        case "QUIZ_COMPLETE":
            return {...state, 
            totalScore: state.totalScore + action.payload.score,
            totalAccuracy: (state.totalAccuracy === 0 ? action.payload.accuracy : (state.totalAccuracy + action.payload.accuracy)/2) ,
            quizCompleted: state.quizCompleted.concat({quizId: action.payload.quizId, score: action.payload.score})
            }
        case "USER_LOGOUT":
            return {...state, 
                _id: "", 
                name: "",
                email: "",
                totalScore: 0,
                totalAccuracy: 0,
                quizCompleted: [],
                isLoggedIn: false
            }
        case "USER_LOAD":
            return {...state,
                _id: action.payload._id, 
                name: action.payload.name,
                email: action.payload.email,
                totalScore: action.payload.totalScore,
                totalAccuracy: action.payload.totalAccuracy,
                quizCompleted: action.payload.quizCompleted,
                isLoggedIn: true
            }
        default:
            return state;
    }
}

export default UserReducer