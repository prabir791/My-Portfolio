import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-full">
  
  <div className="bg-red-950/30 backdrop-blur-lg border border-red-500/20 p-8 rounded-2xl shadow-lg text-center w-96">
    
    <h1 className="text-2xl font-bold text-red-500 mb-6">Contact Me</h1>

    <p className="text-gray-400">📧 prabirrahman1@gmail.com</p>
    <p className="text-gray-400">📘 facebook.com/prabir</p>
    <p className="text-gray-400">📸 instagram.com/prab1rr</p>

    <button className="mt-5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
      Message Me
    </button>

  </div>
</div>
  )
}

export default Contact