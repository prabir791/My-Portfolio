import React from 'react'

const Education = () => {
  return (
    <div className="h-full px-6 py-10">
  
  <h1 className="text-3xl font-bold text-center text-red-500 mb-10">
    Education
  </h1>

  <div className="max-w-2xl mx-auto space-y-6">

    <div className="bg-red-950/30 p-5 rounded-xl border border-red-500/20 gap-3.5">
      <h2>B.Tech CSE</h2>
      <p className="text-gray-400">Dhemaji Engineering College</p>
      <span className="text-red-400 text-sm">2024 - Present</span>
      
      <h2>12TH</h2>
      <p className="text-gray-400">Polygon Senior Secondary School</p>
      <span className="text-red-400 text-sm">2021-2023</span>

      <h2>10TH</h2>
      <p className="text-gray-400">Madhabdev Jatiya Vidyalaya</p>
      <span className="text-red-400 text-sm">2021</span>

    </div>

  </div>
</div>
  )
}

export default Education