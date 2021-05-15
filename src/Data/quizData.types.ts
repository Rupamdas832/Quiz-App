export type QuizGame = {
    quizzes: Quiz[];
}

export type Quiz = {
    quizId: number;
    title: string;
    highestScore: number;
    highScorerName: string;
    questions: Question[];
};
export type Question = {
    question: string;
    points: number;
    negativePoints: number;
    options: Option[];
};
export type Option = {
    id: number;
    value: string;
    isCorrect: boolean;
};

export type User = {
    _id: string;
    name: string;
    email:string;
    totalScore: number;
    totalAccuracy: number;
    quizCompleted: QuizPlayed[]
}

export type QuizPlayed = {
    quizId: number;
    score: number;
}

export type Action = 
| {type: "INCREASE_SCORE", payload: number } 
| {type: "DECREASE_SCORE", payload: number} 
| {type: "RESET"}
| {type: "NEXT_QUESTION"}
| {type: "PREVIOUS_QUESTION"}
| {type: "CORRECT_ANSWER"}
| {type: "ACCURACY", payload: number}

export type StoreAction = 
| {type: "QUIZ_COMPLETE", payload: {quizId: number, score: number, name: string}}

export type UserAction = 
| {type: "QUIZ_COMPLETE", payload: {quizId: number, score: number, accuracy: number}}