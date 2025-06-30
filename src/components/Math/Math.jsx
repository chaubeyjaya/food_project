'use client';

import React, { useEffect, useState } from 'react';

const questions = [
  { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
  { question: "What is 9 - 4?", options: ["4", "5", "6", "3"], correctAnswer: "5" },
  { question: "What is 6 x 2?", options: ["10", "12", "8", "14"], correctAnswer: "12" },
  { question: "What is 15 ÷ 3?", options: ["4", "5", "6", "3"], correctAnswer: "5" },
  { question: "What is the square of 4?", options: ["12", "14", "16", "18"], correctAnswer: "16" },
  { question: "What is 10 % 3?", options: ["1", "2", "3", "0"], correctAnswer: "1" },
  { question: "What is 7 x 5?", options: ["30", "35", "25", "40"], correctAnswer: "35" },
  { question: "What is 100 - 45?", options: ["65", "55", "60", "75"], correctAnswer: "55" },
  { question: "What is the cube of 2?", options: ["6", "8", "4", "10"], correctAnswer: "8" },
  { question: "What is 11 + 13?", options: ["22", "24", "23", "25"], correctAnswer: "24" }
];

const Math = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) {
      nextQuestion();
    }

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const nextQuestion = () => {
    setSelected(null);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setTimer(60);
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
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-200 via-pink-100 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-purple-100">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-10 animate-pulse">
          🧮 Math Quiz Master
        </h1>

        {showScore ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-600 mb-4">🎉 Quiz Completed!</h2>
            <p className="text-2xl font-semibold text-purple-700 mb-2">
              Your Score: <span className="text-blue-800">{score}</span> / {questions.length}
            </p>
            <p className="text-lg text-gray-600">Amazing work! Keep it up 💪</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-700">
                Question {currentQ + 1} of {questions.length}
              </h2>
              <div className="text-lg font-bold text-red-600 bg-white px-3 py-1 rounded-full shadow-sm">
                ⏱️ {timer}s
              </div>
            </div>

            <div className="bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm mb-6">
              <p className="text-2xl font-medium text-indigo-800 mb-4">
                {questions[currentQ].question}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className={`py-3 px-6 rounded-full font-semibold transition-all duration-300 transform shadow-md ${
                      selected === opt
                        ? opt === questions[currentQ].correctAnswer
                          ? 'bg-green-500 text-white scale-105'
                          : 'bg-red-500 text-white scale-105'
                        : 'bg-indigo-300 text-white hover:bg-indigo-500 hover:scale-105'
                    }`}
                    disabled={selected}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Math;
