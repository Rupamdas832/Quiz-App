import { UserAction } from "../Data/quizData.types";
import UserReducer from "../Store/userReducer";

describe("testing user", () => {
  it("should update score and accuracy", () => {
    const initialState = {
      _id: "",
      name: "",
      email: "",
      totalScore: 0,
      totalAccuracy: 60,
      quizCompleted: [],
      isLoggedIn: false,
    };
    const finalState = {
      _id: "",
      name: "",
      email: "",
      totalScore: 50,
      totalAccuracy: 70,
      quizCompleted: [{ _id: "abc", score: 50 }],
      isLoggedIn: false,
    };

    let action = {
      type: "QUIZ_COMPLETE",
      payload: {
        _id: "abc",
        score: 50,
        accuracy: 80,
      },
    };

    let state = UserReducer(initialState, <UserAction>action);
    expect(state).toEqual(finalState);
  });
});
