import React, { useState } from "react";


const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-red-950/30 backdrop-blur-lg border border-red-500/20 p-10 rounded-2xl shadow-lg shadow-red-500/20 text-center w-350px hover:scale-105 transition">
        <h1 className="text-3xl font-bold">
          Hi, I'm <span className="text-red-500">Prabir</span> 👋
        </h1>

        <p className="text-gray-400 mt-2 mb-6">
          CSE Student | Web Developer | AI/ML Enthusiast
        </p>

        <h2 className="mb-4 text-lg">Counter: {count}</h2>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
