'use client';
import { useRouter } from 'next/navigation';
import { Brain } from 'lucide-react'; // Optional icon for UI flavor

const EnglishLevel = () => {
  const router = useRouter();

  const handleLevelClick = (level) => {
    router.push(`/english?level=${level}`);
  };

  const levels = [
    { label: "Low", gradient: "from-green-400 to-green-600", emoji: "🟢" },
    { label: "Medium", gradient: "from-yellow-400 to-yellow-600", emoji: "🟡" },
    { label: "Hard", gradient: "from-red-400 to-red-600", emoji: "🔴" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-indigo-900 text-white px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
          Choose Your <span className="text-yellow-300">Difficulty Level</span>
        </h1>
        <p className="text-gray-300 mt-2 text-lg flex justify-center items-center gap-2">
          <Brain className="w-6 h-6 text-yellow-400" /> Boost your English skills!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        {levels.map(({ label, gradient, emoji }) => (
          <div
            key={label}
            onClick={() => handleLevelClick(label.toLowerCase())}
            className={`cursor-pointer p-8 rounded-2xl shadow-lg bg-gradient-to-br ${gradient} text-white text-center transform hover:scale-105 transition-all duration-300 border-2 border-white/10 hover:border-yellow-300`}
          >
            <div className="text-5xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold">{label} Level</h2>
            <p className="text-sm text-white/80 mt-2">
              {label === "Low"
                ? "Perfect for beginners"
                : label === "Medium"
                ? "Challenge yourself"
                : "Master-level difficulty"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishLevel;

