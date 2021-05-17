import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { Toast } from '../Components'
import URL from '../Components/ServerURL'
import { useQuiz, useStore, useUser } from '../Store'

export const Result = () =>{

    const {quizState, quizDispatch} = useQuiz()
    const {totalQuestions, score, correctAnswers, quizId} = quizState;

    const navigation = useNavigate()

    const {userState,userDispatch} = useUser()
    const {userId} = userState;

    const {storeState,storeDispatch} = useStore()
    const {loadingMessage} = storeState
    console.log("RESULT",loadingMessage)

    const calAccuracyPercentage = () => {
        const accuracy = (correctAnswers/totalQuestions)*100
        return accuracy
    }

    const resetBtn = async () => {
        const quizDone = {
            quizId: quizId,
            score: score,
            accuracy: calAccuracyPercentage()
        }
        storeDispatch({type: "IS_LOADING", payload: "updating"})
        try {
            const response = await axios.post(`${URL}/user/${userId}`, {
                "score": score,
                "accuracy": calAccuracyPercentage(),
                "quizId": quizId
            })
            if(response.status === 201){
                userDispatch({type: "QUIZ_COMPLETE", payload: quizDone})
                quizDispatch({type: "RESET"})
                navigation("/categories")
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            storeDispatch({type: "IS_LOADING", payload: "success"})
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center p-5 relative">
            {loadingMessage === "updating" ? <Toast title="Updating Score"/> : null}
            <div className="flex flex-col bg-white p-5 text-center items-center rounded-xl">
                <div className="h-40 w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcUZ8w5kl0XDGZ4ItBmXTWBPRX_JAb-HPeg&usqp=CAU" alt="trophy" className="w-full"/>
                </div>
                <h2>Congrats! <span className="text-green-700 text-xl">{calAccuracyPercentage().toFixed(0)}</span>% Accuracy</h2>
                <h1 className="text-green-700 text-3xl font-bold my-3">{score} Score</h1>
                <p className="font-bold">Quiz completed successfully.</p>
                <p className="font-medium">You attempted <span className="text-purple-700">{totalQuestions}</span> questions and from that <span className="text-green-700">{correctAnswers}</span> is correct</p>
                <div className="flex flex-row justify-evenly w-full my-5">
                    <button className="border-2 border-purple-700 px-2 py-1 rounded-md" onClick={resetBtn}>Main Menu</button>
                    <button className="border-2 border-purple-600 px-2 py-1 rounded-md" onClick={resetBtn}>Play More</button>
                </div>
            </div>
        </div>
    )
}
