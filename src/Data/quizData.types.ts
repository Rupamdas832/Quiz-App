export type QuizGame = {
    totalScore: number;
    totalAccuracy: number;
    quizCompleted: number;
    quizzes: Quiz[];
}

export type Quiz = {
    quizId: number;
    title: string;
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