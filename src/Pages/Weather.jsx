import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6454f480e7a8e9a32b4dd7bf0693683d&units=metric`
      );

      const result = await res.json();

      if (result.cod === "404") {
        setError("City not found ❌");
        setData(null);
      } else {
        setData(result);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong ⚠️");
    }
  };

  return (
    <div className="h-full flex items-center justify-center">

      <div className="bg-red-950/30 backdrop-blur-lg border border-red-500/20 p-8 rounded-2xl shadow-lg text-center w-350px">

        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Weather App 🌦️
        </h1>

        <input
          type="text"
          placeholder="Enter city (e.g. Delhi)"
          className="w-full p-2 rounded bg-black border border-red-500/30 text-white mb-4"
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={getWeather}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
        >
          Search
        </button>

        {/* ❌ ERROR */}
        {error && <p className="text-red-400 mt-4">{error}</p>}

        {/* ✅ RESULT */}
        {data && data.main && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">{data.name}</h2>

            <p className="text-3xl text-red-400">
              {data.main.temp}°C
            </p>

            <p className="text-gray-400 capitalize">
              {data.weather[0].description}
            </p>

            {/* 🔥 Extra Info */}
            <p className="text-gray-400 mt-2">
              Humidity: {data.main.humidity}%
            </p>

            <p className="text-gray-400">
              Wind: {data.wind.speed} km/h
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Weather;