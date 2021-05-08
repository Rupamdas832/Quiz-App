export type Quiz = {
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
    value: string;
    isCorrect: boolean;
};