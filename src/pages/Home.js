import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-9xl font-bold mb-4 text-blue-500">Welcome to Our App</h1>
      <p className="text-lg text-blue-600 mb-8 max-w-lg mx-auto">Streamline school management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.</p>
      
      <div className="flex space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;