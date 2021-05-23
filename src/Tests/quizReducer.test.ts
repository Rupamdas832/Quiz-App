import { Action } from "../Data/quizData.types";
import QuizReducer from "../Store/quizReducer";

describe("testing quiz", () => {
  it("should increase score", () => {
    const initialState = {
      _id: "",
      score: 0,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const finalState = {
      _id: "",
      score: 75,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const action = {
      type: "INCREASE_SCORE",
      payload: 75,
    };

    const state = QuizReducer(initialState, <Action>action);

    expect(state).toEqual(finalState);
  });

  it("should decrese score", () => {
    const initialState = {
      _id: "",
      score: 50,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const finalState = {
      _id: "",
      score: 45,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const action = {
      type: "DECREASE_SCORE",
      payload: 5,
    };

    const state = QuizReducer(initialState, <Action>action);

    expect(state).toEqual(finalState);
  });

  it("should load quiz data", () => {
    const initialState = {
      _id: "",
      score: 0,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 0,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const finalState = {
      _id: "abc",
      score: 0,
      title: "Unreal Engine",
      questions: [
        {
          _id: "cde",
          question: "Have you heard about unreal engine 4",
          points: 10,
          negativePoints: 5,
          options: [
            {
              _id: "fgh",
              value: "Yes",
              isCorrect: true,
            },
            {
              _id: "ijk",
              value: "No",
              isCorrect: false,
            },
            {
              _id: "fgh",
              value: "Don't know",
              isCorrect: false,
            },
          ],
        },
        {
          _id: "cde",
          question: "Have you heard about unreal engine 4",
          points: 10,
          negativePoints: 5,
          options: [
            {
              _id: "fgh",
              value: "Yes",
              isCorrect: true,
            },
            {
              _id: "ijk",
              value: "No",
              isCorrect: false,
            },
            {
              _id: "fgh",
              value: "Don't know",
              isCorrect: false,
            },
          ],
        },
        {
          _id: "cde",
          question: "Have you heard about unreal engine 4",
          points: 10,
          negativePoints: 5,
          options: [
            {
              _id: "fgh",
              value: "Yes",
              isCorrect: true,
            },
            {
              _id: "ijk",
              value: "No",
              isCorrect: false,
            },
            {
              _id: "fgh",
              value: "Don't know",
              isCorrect: false,
            },
          ],
        },
      ],
      quizNo: 0,
      questionNumber: 1,
      totalQuestions: 3,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };

    const action = {
      type: "LOAD_QUIZ",
      payload: {
        _id: "abc",
        title: "Unreal Engine",
        questions: [
          {
            _id: "cde",
            question: "Have you heard about unreal engine 4",
            points: 10,
            negativePoints: 5,
            options: [
              {
                _id: "fgh",
                value: "Yes",
                isCorrect: true,
              },
              {
                _id: "ijk",
                value: "No",
                isCorrect: false,
              },
              {
                _id: "fgh",
                value: "Don't know",
                isCorrect: false,
              },
            ],
          },
          {
            _id: "cde",
            question: "Have you heard about unreal engine 4",
            points: 10,
            negativePoints: 5,
            options: [
              {
                _id: "fgh",
                value: "Yes",
                isCorrect: true,
              },
              {
                _id: "ijk",
                value: "No",
                isCorrect: false,
              },
              {
                _id: "fgh",
                value: "Don't know",
                isCorrect: false,
              },
            ],
          },
          {
            _id: "cde",
            question: "Have you heard about unreal engine 4",
            points: 10,
            negativePoints: 5,
            options: [
              {
                _id: "fgh",
                value: "Yes",
                isCorrect: true,
              },
              {
                _id: "ijk",
                value: "No",
                isCorrect: false,
              },
              {
                _id: "fgh",
                value: "Don't know",
                isCorrect: false,
              },
            ],
          },
        ],
        highestScore: 0,
      },
    };

    const state = QuizReducer(initialState, <Action>action);

    expect(state).toEqual(finalState);
  });
  it("should increase question number without exceeding total no of questions", () => {
    const initialState = {
      _id: "",
      score: 0,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 6,
      totalQuestions: 6,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const finalState = {
      _id: "",
      score: 0,
      title: "",
      questions: [],
      quizNo: 0,
      questionNumber: 6,
      totalQuestions: 6,
      correctAnswers: 0,
      accuracy: 0,
      highestScore: 0,
      questionsAttempted: [],
    };
    const action = {
      type: "NEXT_QUESTION",
    };

    const state = QuizReducer(initialState, <Action>action);

    expect(state).toEqual(finalState);
  });
});
