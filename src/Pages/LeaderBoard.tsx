import React from 'react'

export const LeaderBoard = () => {
    return (
        <div className="flex flex-col h-screen items-center p-5">
            <div className="flex flex-col items-center w-full md:w-1/2 bg-white p-5 rounded-b-3xl shadow-xl">
                <h1 className="text-3xl font-extrabold uppercase tracking-wider text-yellow-500 shadow-md">LeaderBoard</h1>
                <div className="flex flex-row justify-between items-center w-full mt-5">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">405</h1>
                        <p className="text-purple-700 text-sm">Total Score</p>
                    </div>
                    <div  className="flex flex-col items-center">
                        <h1 className="text-2xl">3</h1>
                        <p className="text-purple-700 text-sm">Quiz Completed</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <h1 className="text-2xl">85%</h1>
                        <p className="text-purple-700 text-sm">Accuracy</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full flex flex-col items-center">
                <div className="grid grid-cols-3 mt-3 w-full text-center text-md py-3 text-md rounded md:w-1/2 md:text-xl md:my-3 md:p-3">
                    <p>Quiz Name</p>
                    <p>Highest Scorer</p>
                    <p>Your Score</p>
                </div>
                <div className="grid grid-cols-3 mt-3 w-full text-center py-3 bg-purple-700 text-white text-md rounded shadow-md md:w-1/2 md:text-xl md:my-3 md:p-3">
                    <p>Marvel</p>
                    <p>Rupam-120</p>
                    <p>65</p>
                </div>
                <div className="grid grid-cols-3 mt-3 w-full text-center py-3 bg-purple-700 text-white text-md rounded shadow-md md:w-1/2 md:text-xl md:my-3 md:p-3">
                    <p>Science</p>
                    <p>Aman-72</p>
                    <p>35</p>
                </div>
                <div className="grid grid-cols-3 mt-3 w-full text-center py-3 bg-purple-700 text-white text-md rounded shadow-md md:w-1/2 md:text-xl md:my-3 md:p-3">
                    <p>Stars Wars</p>
                    <p>Karan-95</p>
                    <p>50</p>
                </div>
            </div>
        </div>
    )
}
