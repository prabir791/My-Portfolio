import React from "react";

const Skill = () => {
  return (
    <div className="h-full px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
        Skills
      </h1>

      <div className="flex justify-center gap-4 flex-wrap">
        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          React
        </span>

        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          Node.js
        </span>

        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          JavaScript
        </span>

        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          C++
        </span>
        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          HTML
        </span>
        <span className="px-4 py-2 border border-red-500 text-red-400 rounded-lg">
          CSS
        </span>
      </div>
    </div>
  );
};

export default Skill;
