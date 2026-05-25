import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const weeks = [
  { week: 1, phase: "Month 1 — Foundation", focus: "Algebra + Quran + C++ Syntax" },
  { week: 2, phase: "Month 1 — Foundation", focus: "Algebra Drills + Cyber Ch.2 + German" },
  { week: 3, phase: "Month 1 — Foundation", focus: "Math Review + C++ Conditionals + Book 1" },
  { week: 4, phase: "Month 1 — Foundation", focus: "Math Test + Cyber Ch.4 + Electrical Intro" },

  { week: 5, phase: "Month 2 — Go Deeper", focus: "Physics Ch.1 + C++ Functions + Mechatronics" },
  { week: 6, phase: "Month 2 — Go Deeper", focus: "Electric Currents + Cyber Mid + Practice" },
  { week: 7, phase: "Month 2 — Go Deeper", focus: "Physics Problems + C++ OOP + Spanish" },
  { week: 8, phase: "Month 2 — Go Deeper", focus: "Physics Review + Mechatronics + Languages" },

  { week: 9, phase: "Month 3 — Finish Strong", focus: "Data Analysis + Cyber Final + Engineering Project" },
  { week: 10, phase: "Month 3 — Finish Strong", focus: "Physics Review + Cyber CTF" },
  { week: 11, phase: "Month 3 — Finish Strong", focus: "Engineering Project + Full Review" },
  { week: 12, phase: "Month 3 — Finish Strong", focus: "Final Reviews + Celebration" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function SummerOS() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [completed, setCompleted] = useState({});

  const toggleTask = (key) => {
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const progress = useMemo(() => {
    const total = Object.keys(completed).length;
    const done = Object.values(completed).filter(Boolean).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }, [completed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold tracking-wide">
            ⚡ ALI SUMMER OS
          </h1>
          <p className="text-gray-400 mt-2">
            Cyber • Engineering • Language • Athlete System
          </p>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-800 rounded-full h-3">
            <div
              className="h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-1">Progress: {progress}%</p>
        </motion.div>

        {/* Week Selector */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 my-6">
          {weeks.map((w) => (
            <button
              key={w.week}
              onClick={() => setSelectedWeek(w.week)}
              className={`p-2 rounded-xl border transition-all text-xs md:text-sm ${
                selectedWeek === w.week
                  ? "bg-white text-black shadow-lg"
                  : "bg-gray-900 border-gray-700 hover:border-cyan-400"
              }`}
            >
              W{w.week}
            </button>
          ))}
        </div>

        {/* Week Info Card */}
        <motion.div
          key={selectedWeek}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-5 mb-6"
        >
          <h2 className="text-xl font-semibold">
            {weeks[selectedWeek - 1].phase}
          </h2>
          <p className="text-gray-400 mt-1">
            {weeks[selectedWeek - 1].focus}
          </p>
        </motion.div>

        {/* Daily Grid */}
        <div className="grid md:grid-cols-7 gap-3">
          {days.map((day) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={day}
              className="bg-gray-900/70 border border-gray-800 rounded-xl p-3"
            >
              <h3 className="font-bold text-cyan-300 mb-2">{day}</h3>

              {[
                "Study",
                "Cyber / Coding",
                "Reading",
                "Quran",
                "Language",
              ].map((task) => (
                <label key={task} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!completed[`${selectedWeek}-${day}-${task}`]}
                    onChange={() =>
                      toggleTask(`${selectedWeek}-${day}-${task}`)
                    }
                  />
                  {task}
                </label>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 mt-10 text-sm">
          Built as a custom operating system for Ali ⚡ | Summer Control Hub
        </div>
      </div>
    </div>
  );
}
