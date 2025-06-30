'use client'
import React, { useState } from 'react';

const Quize = () => {
  const questions = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
      answer: 'Delhi',
    },
    {
      question: 'Who is the founder of Microsoft?',
      options: ['Steve Jobs', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg'],
      answer: 'Bill Gates',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Mars'],
      answer: 'Jupiter',
    },
    {
      question: 'Which language runs in a web browser?',
      options: ['Java', 'C', 'Python', 'JavaScript'],
      answer: 'JavaScript',
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['William Wordsworth', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      answer: 'William Shakespeare',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'CO2', 'H2O', 'NaCl'],
      answer: 'H2O',
    },
    {
      question: 'How many continents are there?',
      options: ['5', '6', '7', '8'],
      answer: '7',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'Thailand', 'India'],
      answer: 'Japan',
    },
    {
      question: 'Which device is used to measure temperature?',
      options: ['Barometer', 'Thermometer', 'Altimeter', 'Speedometer'],
      answer: 'Thermometer',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">🎯 Quiz Game</h1>

      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl text-green-600 font-semibold">🎉 Quiz Finished!</h2>
          <p className="text-lg mt-4">Your Score: <span className="font-bold">{score}</span> / {questions.length}</p>
          <button
            onClick={restartQuiz}
            className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-medium mb-6">
            Q{current + 1}: {questions[current].question}
          </h3>
          <div className="space-y-4">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium rounded-lg transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quize;
