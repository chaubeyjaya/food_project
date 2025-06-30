'use client';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correctAnswer: "Asia",
  },
  {
    question: "Which country has the highest population?",
    options: ["India", "China", "USA", "Russia"],
    correctAnswer: "China",
  },
  {
    question: "Which ocean is the deepest?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "The Sahara Desert is located in which continent?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: "Africa",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Alps", "Himalayas", "Andes", "Rockies"],
    correctAnswer: "Himalayas",
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    question: "Which layer of the Earth do we live on?",
    options: ["Mantle", "Outer Core", "Inner Core", "Crust"],
    correctAnswer: "Crust",
  },
  {
    question: "Which line divides the Earth into Northern and Southern Hemispheres?",
    options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
    correctAnswer: "Equator",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["India", "China", "Japan", "Thailand"],
    correctAnswer: "Japan",
  },
];

const Geography = () => {
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
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Geography Quiz</h1>
      <div className="mb-4 text-lg text-blue-800 font-semibold">Time Left: {timeLeft}s</div>

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
                    : 'bg-gray-100 hover:bg-blue-200'
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

export default Geography;
