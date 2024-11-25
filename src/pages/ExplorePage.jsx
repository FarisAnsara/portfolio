import React from 'react'
import { Link } from 'react-router-dom'

const ExplorePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Faris Ansara's Portfolio</h1>
        <p className="text-lg mb-6">Click the explore button to explore more about Faris</p>
        
        <Link to="/home">
            <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-300">
                Explore
            </button>
        </Link>
  </div>
  )
}

export default ExplorePage
