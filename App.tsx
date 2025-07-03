import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ultrasound Tech Schedule
          </h1>
          <p className="text-lg text-gray-600">
            This is the starting point for our application.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            The project is now set up for deployment on Netlify. From here, we will build the features.
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-6">
            You have successfully reset the application to its initial state.
        </p>
      </div>
    </div>
  );
}

export default App;