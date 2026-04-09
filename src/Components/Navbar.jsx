import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-red-500/20 shadow-lg">
  
  <h1 className="text-xl font-bold">
    <span className="text-white">My</span>{" "}
    <span className="text-red-500">Portfolio</span>
  </h1>

  <div className="space-x-6 text-gray-300">
    <a href="/" className="hover:text-red-500 transition">Home</a>
    <a href="/contact" className="hover:text-red-500 transition">Contact</a>
    <a href="/education" className="hover:text-red-500 transition">Education</a>
    <a href="/skill" className="hover:text-red-500 transition">Skills</a>
    <a href="/weather" className="hover:text-red-500 transition">Weather</a>
  </div>

  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
    Login
  </button>
</nav>
    </div>
  )
}

export default Navbar