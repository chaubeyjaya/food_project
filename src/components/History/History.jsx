// 'use client';
// import React, { useState, useEffect } from 'react';

// const questions = [
//   {
//     question: "Who was the first President of the United States?",
//     options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
//     correctAnswer: "George Washington",
//   },
//   {
//     question: "In which year did World War II end?",
//     options: ["1940", "1945", "1939", "1950"],
//     correctAnswer: "1945",
//   },
//   {
//     question: "Which ancient civilization built the pyramids?",
//     options: ["Greeks", "Romans", "Egyptians", "Mayans"],
//     correctAnswer: "Egyptians",
//   },
//   {
//     question: "The Great Wall of China was mainly built to protect against which group?",
//     options: ["Japanese", "Romans", "Mongols", "Vikings"],
//     correctAnswer: "Mongols",
//   },
//   {
//     question: "Who discovered America in 1492?",
//     options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"],
//     correctAnswer: "Christopher Columbus",
//   },
//   {
//     question: "Which country gifted the Statue of Liberty to the USA?",
//     options: ["France", "Italy", "Canada", "England"],
//     correctAnswer: "France",
//   },
//   {
//     question: "Where was Mahatma Gandhi born?",
//     options: ["Delhi", "Porbandar", "Mumbai", "Ahmedabad"],
//     correctAnswer: "Porbandar",
//   },
//   {
//     question: "What was the name of the ship that sank in 1912?",
//     options: ["Britannic", "Lusitania", "Titanic", "Queen Mary"],
//     correctAnswer: "Titanic",
//   },
//   {
//     question: "Who was the famous queen of ancient Egypt?",
//     options: ["Cleopatra", "Elizabeth", "Victoria", "Mary"],
//     correctAnswer: "Cleopatra",
//   },
//   {
//     question: "Which empire was ruled by Akbar the Great?",
//     options: ["Maurya", "Mughal", "Gupta", "British"],
//     correctAnswer: "Mughal",
//   },
// ];

// const History = () => {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60);

//   useEffect(() => {
//     if (!showScore) {
//       const timer = setInterval(() => {
//         setTimeLeft(prev => {
//           if (prev <= 1) {
//             setShowScore(true);
//             clearInterval(timer);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [showScore]);

//   const handleOptionClick = (option) => {
//     setSelected(option);
//     if (option === questions[currentQ].correctAnswer) {
//       setScore(score + 1);
//     }

//     setTimeout(() => {
//       setSelected(null);
//       if (currentQ + 1 < questions.length) {
//         setCurrentQ(currentQ + 1);
//       } else {
//         setShowScore(true);
//       }
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4 text-yellow-800">History Quiz</h1>

//       {!showScore && (
//         <div className="mb-6 text-lg font-semibold text-red-600 bg-white px-4 py-2 rounded shadow">
//           Time Left: {timeLeft}s
//         </div>
//       )}

//       {showScore ? (
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
//           <h2 className="text-2xl font-semibold mb-4 text-green-700">⏱️ Quiz Finished!</h2>
//           <p className="text-lg">Your Score:</p>
//           <p className="text-3xl font-bold text-blue-700">{score} / {questions.length}</p>
//         </div>
//       ) : (
//         <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Q{currentQ + 1}. {questions[currentQ].question}
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {questions[currentQ].options.map((opt, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleOptionClick(opt)}
//                 disabled={selected}
//                 className={`py-2 px-4 rounded-lg border transition duration-200 text-center ${
//                   selected === opt
//                     ? opt === questions[currentQ].correctAnswer
//                       ? 'bg-green-300 border-green-600'
//                       : 'bg-red-300 border-red-600'
//                     : 'bg-gray-100 hover:bg-yellow-100 border-gray-300'
//                 }`}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default History;


'use client';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
    correctAnswer: "George Washington",
  },
  {
    question: "In which year did World War II end?",
    options: ["1940", "1945", "1939", "1950"],
    correctAnswer: "1945",
  },
  {
    question: "Which ancient civilization built the pyramids?",
    options: ["Greeks", "Romans", "Egyptians", "Mayans"],
    correctAnswer: "Egyptians",
  },
  {
    question: "The Great Wall of China was mainly built to protect against which group?",
    options: ["Japanese", "Romans", "Mongols", "Vikings"],
    correctAnswer: "Mongols",
  },
  {
    question: "Who discovered America in 1492?",
    options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"],
    correctAnswer: "Christopher Columbus",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "Italy", "Canada", "England"],
    correctAnswer: "France",
  },
  {
    question: "Where was Mahatma Gandhi born?",
    options: ["Delhi", "Porbandar", "Mumbai", "Ahmedabad"],
    correctAnswer: "Porbandar",
  },
  {
    question: "What was the name of the ship that sank in 1912?",
    options: ["Britannic", "Lusitania", "Titanic", "Queen Mary"],
    correctAnswer: "Titanic",
  },
  {
    question: "Who was the famous queen of ancient Egypt?",
    options: ["Cleopatra", "Elizabeth", "Victoria", "Mary"],
    correctAnswer: "Cleopatra",
  },
  {
    question: "Which empire was ruled by Akbar the Great?",
    options: ["Maurya", "Mughal", "Gupta", "British"],
    correctAnswer: "Mughal",
  },
];

const History = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const savedScore = localStorage.getItem("historyScore");
    const savedQ = localStorage.getItem("historyCurrentQ");
    const savedTime = localStorage.getItem("historyTimeLeft");

    if (savedScore && savedQ && savedTime) {
      setScore(parseInt(savedScore));
      setCurrentQ(parseInt(savedQ));
      setTimeLeft(parseInt(savedTime));
    }
  }, []);

  useEffect(() => {
    if (!showScore) {
      localStorage.setItem("historyScore", score);
      localStorage.setItem("historyCurrentQ", currentQ);
      localStorage.setItem("historyTimeLeft", timeLeft);
    }
  }, [score, currentQ, timeLeft, showScore]);

  useEffect(() => {
    if (showScore) return;

    if (timeLeft === 0) {
      setShowScore(true);
      localStorage.clear();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showScore]);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (currentQ + 1 < questions.length) {
        setCurrentQ(prev => prev + 1);
      } else {
        setShowScore(true);
        localStorage.clear();
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
    setTimeLeft(60);
    localStorage.clear();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-100 via-orange-100 to-pink-100 flex flex-col items-center justify-center px-4 py-8 font-sans">
      <h1 className="text-5xl font-extrabold mb-6 text-pink-700 drop-shadow">🌟 History Quiz</h1>

      {!showScore && (
        <div className="mb-6 text-2xl text-red-600 font-bold animate-pulse">
          ⏳ Time Left: {timeLeft}s
        </div>
      )}

      {showScore ? (
        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center max-w-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">🎉 Quiz Finished!</h2>
          <p className="text-xl mb-6">
            Your Score: <span className="font-bold text-blue-700">{score}</span> / {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-pink-600 text-white rounded-full text-lg hover:bg-pink-700 transition-all"
          >
            🔁 Restart Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Q{currentQ + 1}. {questions[currentQ].question}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`py-3 px-4 rounded-xl border text-left text-lg transition-all duration-300 ease-in-out ${
                  selected === opt
                    ? opt === questions[currentQ].correctAnswer
                      ? 'bg-green-200 border-green-600 scale-105'
                      : 'bg-red-200 border-red-600 scale-105'
                    : 'bg-gray-100 hover:bg-yellow-200 hover:scale-105 border-gray-300'
                }`}
                disabled={!!selected}
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

export default History;


