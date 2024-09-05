import React from 'react';

const Card = ({ name, date, src, temperature, weatherText, country }) => {
  return (
    <div className="bg-gradient-to-b from-sky-400 via-teal-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl max-w-md mx-auto relative group cursor-pointer">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-300 pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-white">{name}, {country}</h2>
            <p className="text-sm text-blue-200 mt-1">{new Date(date).toLocaleString()}</p>
          </div>
          <img 
            src={src} 
            alt={`Weather icon for ${weatherText}`} 
            className="w-20 h-20 object-cover rounded-full border-2 border-sky-300 shadow-md" 
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-5xl font-bold text-yellow-300">{temperature}°C</h3>
          <p className="text-blue-100 text-xl mt-2">{weatherText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
