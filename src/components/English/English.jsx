'use client';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What is the synonym of 'Happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correctAnswer: "Joyful",
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Blue", "Book", "Quickly"],
    correctAnswer: "Book",
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definitely", "Definetely", "Definantly"],
    correctAnswer: "Definitely",
  },
  {
    question: "What is the opposite of 'Cold'?",
    options: ["Cool", "Hot", "Warm", "Wet"],
    correctAnswer: "Hot",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "He don't like pizza.",
      "He doesn't likes pizza.",
      "He doesn't like pizza.",
      "He do not like pizza."
    ],
    correctAnswer: "He doesn't like pizza.",
  },
  {
    question: "Identify the verb: 'She sings beautifully.'",
    options: ["She", "Sings", "Beautifully", "None"],
    correctAnswer: "Sings",
  },
  {
    question: "Choose the adjective in the sentence: 'It was a rainy day.'",
    options: ["It", "Was", "Rainy", "Day"],
    correctAnswer: "Rainy",
  },
  {
    question: "What is the plural of 'Child'?",
    options: ["Childs", "Children", "Childes", "Childer"],
    correctAnswer: "Children",
  },
  {
    question: "Which punctuation ends a question?",
    options: [".", "!", ",", "?"],
    correctAnswer: "?",
  },
  {
    question: "Which word is a preposition?",
    options: ["Above", "Dog", "Jump", "Nice"],
    correctAnswer: "Above",
  },
];

const English = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          nextQuestion();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQ]);

  const nextQuestion = () => {
    setSelected(null);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
      setTimeLeft(60);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">English Quiz</h1>
      <div className="mb-4 text-lg text-blue-700 font-semibold">Time Left: {timeLeft}s</div>

      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-lg">Your Score: <span className="font-bold">{score}</span> / 10</p>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            Q{currentQ + 1}. {questions[currentQ].question}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`py-2 px-4 rounded border ${
                  selected === opt
                    ? opt === questions[currentQ].correctAnswer
                      ? 'bg-green-300'
                      : 'bg-red-300'
                    : 'bg-gray-100 hover:bg-indigo-200'
                }`}
                disabled={selected}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default English;
