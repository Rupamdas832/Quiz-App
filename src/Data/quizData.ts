import { QuizGame } from "./quizData.types";


const QuizData: QuizGame = {
    quizzes: [
        {
            quizId: "abc",
            quizNo: 1,
            title: "Marvel Quiz",
            img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            highestScore: 450,
            highScorerName: "Rupam",
            questions: [
                {
                    question: "Where does Rocket Raccoon spend most of his time?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "On Earth",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "In space",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "Under the sea",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Whose nickname is Murder Bot?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "Iron Man",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Vision",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Ultron",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "What is the strongest metal in the Marvel Universe?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "Vibranium",
                            isCorrect: true
                        },
                        {
                            id: 2,
                            value: "Frelunium",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Stretchium",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Vision is a…what?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "Android",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ghost",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Alien",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "In the 2012 movie, The Avengers features Captain America. What is his real name?",
                    points: 10,
                    negativePoints: 5,
                    options: [
                        {
                            id: 1,
                            value: "Tony Stark",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Steve Rogers",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "Buck Rogers",
                            isCorrect: false
                        },
                    ]
                },
            ]
        },
        {
            quizId: "abc1",
            quizNo: 2,
            title: "Science Quiz",
            img: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZSUyMGV4cGVyaW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            highestScore: 215,
            highScorerName: "Aman",
            questions: [
                {
                    question: "Whose nickname is Murder Bot?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Iron Man",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Vision",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Ultron",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "What is the strongest metal in the Marvel Universe?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Vibranium",
                            isCorrect: true
                        },
                        {
                            id: 2,
                            value: "Frelunium",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Stretchium",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Vision is a…what?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Android",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ghost",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Alien",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
            ]
        },
        {
            quizId: "abc2",
            quizNo: 3,
            title: "Star Wars Quiz",
            img: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            highestScore: 215,
            highScorerName: "Aman",
            questions: [
                {
                    question: "Whose nickname is Murder Bot?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Iron Man",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Vision",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Ultron",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "What is the strongest metal in the Marvel Universe?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Vibranium",
                            isCorrect: true
                        },
                        {
                            id: 2,
                            value: "Frelunium",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Stretchium",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Vision is a…what?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Android",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ghost",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Alien",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
            ]
        },
        {
            quizId: "abc3",
            quizNo: 4,
            title: "World Quiz",
            img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            highestScore: 215,
            highScorerName: "Aman",
            questions: [
                {
                    question: "Whose nickname is Murder Bot?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Iron Man",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Vision",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Ultron",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "What is the strongest metal in the Marvel Universe?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Vibranium",
                            isCorrect: true
                        },
                        {
                            id: 2,
                            value: "Frelunium",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Stretchium",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Vision is a…what?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Android",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ghost",
                            isCorrect: false
                        },
                        {
                            id: 3,
                            value: "Alien",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "In the comic book series, who were the original Avengers?",
                    points: 2,
                    negativePoints: 1,
                    options: [
                        {
                            id: 1,
                            value: "Batman, Spider-man, Superman, Wonder Women",
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: "Ant-man, Hulk, Iron Man, Wasp, Thor",
                            isCorrect: true
                        },
                        {
                            id: 3,
                            value: "The Hulk, Black Widow, Howard the Duck, Thor",
                            isCorrect: false
                        },
                    ]
                },
            ]
        },
    ]
}

export default QuizData