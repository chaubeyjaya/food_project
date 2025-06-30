// 'use client';
// import React, { useState, useEffect } from 'react';

// const questions = [
//   {
//     question: "What planet is known as the Red Planet?",
//     options: ["Earth", "Venus", "Mars", "Jupiter"],
//     correctAnswer: "Mars",
//   },
//   {
//     question: "Water freezes at what temperature (in °C)?",
//     options: ["0", "32", "100", "10"],
//     correctAnswer: "0",
//   },
//   {
//     question: "What gas do plants absorb from the atmosphere?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     correctAnswer: "Carbon Dioxide",
//   },
//   {
//     question: "Which organ pumps blood through the body?",
//     options: ["Lungs", "Liver", "Heart", "Brain"],
//     correctAnswer: "Heart",
//   },
//   {
//     question: "Which of these is not a state of matter?",
//     options: ["Solid", "Liquid", "Energy", "Gas"],
//     correctAnswer: "Energy",
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     options: ["HO", "H2O", "OH2", "H2"],
//     correctAnswer: "H2O",
//   },
//   {
//     question: "What part of the plant conducts photosynthesis?",
//     options: ["Root", "Stem", "Leaf", "Flower"],
//     correctAnswer: "Leaf",
//   },
//   {
//     question: "Which is the closest star to Earth?",
//     options: ["Sirius", "Alpha Centauri", "The Sun", "Polaris"],
//     correctAnswer: "The Sun",
//   },
//   {
//     question: "Which planet has the most gravity?",
//     options: ["Earth", "Jupiter", "Mars", "Saturn"],
//     correctAnswer: "Jupiter",
//   },
//   {
//     question: "Which gas is most abundant in Earth’s atmosphere?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     correctAnswer: "Nitrogen",
//   },
// ];

// const Science = () => {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev === 1) {
//           nextQuestion();
//           return 60;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [currentQ]);

//   const nextQuestion = () => {
//     setSelected(null);
//     if (currentQ + 1 < questions.length) {
//       setCurrentQ(currentQ + 1);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setSelected(option);
//     if (option === questions[currentQ].correctAnswer) {
//       setScore(score + 1);
//     }

//     setTimeout(() => {
//       nextQuestion();
//       setTimeLeft(60);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Science Quiz</h1>
//       <div className="mb-4 text-lg text-red-500 font-semibold">Time Left: {timeLeft}s</div>

//       {showScore ? (
//         <div className="bg-white p-6 rounded-lg shadow text-center">
//           <h2 className="text-2xl font-semibold mb-4">Quiz Finished!</h2>
//           <p className="text-lg">Your Score: <span className="font-bold">{score}</span> / 10</p>
//         </div>
//       ) : (
//         <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">
//             Q{currentQ + 1}. {questions[currentQ].question}
//           </h2>

//           <div className="grid grid-cols-2 gap-4">
//             {questions[currentQ].options.map((opt, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleOptionClick(opt)}
//                 className={`py-2 px-4 rounded border ${
//                   selected === opt
//                     ? opt === questions[currentQ].correctAnswer
//                       ? 'bg-green-300'
//                       : 'bg-red-300'
//                     : 'bg-gray-100 hover:bg-blue-200'
//                 }`}
//                 disabled={selected}
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

// export default Science;

'use client';
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Water freezes at what temperature (in °C)?",
    options: ["0", "32", "100", "10"],
    correctAnswer: "0",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Lungs", "Liver", "Heart", "Brain"],
    correctAnswer: "Heart",
  },
  {
    question: "Which of these is not a state of matter?",
    options: ["Solid", "Liquid", "Energy", "Gas"],
    correctAnswer: "Energy",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["HO", "H2O", "OH2", "H2"],
    correctAnswer: "H2O",
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: "Leaf",
  },
  {
    question: "Which is the closest star to Earth?",
    options: ["Sirius", "Alpha Centauri", "The Sun", "Polaris"],
    correctAnswer: "The Sun",
  },
  {
    question: "Which planet has the most gravity?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which gas is most abundant in Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
];

const Science = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!showScore) {
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
    }
  }, [currentQ, showScore]);

  const nextQuestion = () => {
    setSelected(null);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(60);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(nextQuestion, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-50 to-green-100 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-green-800 text-center">🌿 Science Quiz</h1>

      {!showScore && (
        <>
          {/* Timer Bar */}
          <div className="w-full max-w-xl bg-gray-200 rounded-full h-4 mb-6 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>
          <div className="text-sm text-gray-600 mb-4">⏳ Time Left: {timeLeft}s</div>
        </>
      )}

      {showScore ? (
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-green-700">🎉 Quiz Finished!</h2>
          <p className="text-lg mb-6">Your Score: <span className="font-bold">{score}</span> / 10</p>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowScore(false);
              setTimeLeft(60);
            }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-6">
            Q{currentQ + 1}. {questions[currentQ].question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`py-3 px-4 rounded-xl border text-sm transition ${
                  selected === opt
                    ? opt === questions[currentQ].correctAnswer
                      ? 'bg-green-300 text-green-900 border-green-400'
                      : 'bg-red-300 text-red-900 border-red-400'
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

export default Science;

