import { useRef, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getValue = useRef(null);

  const getWeather = (event) => {
    event.preventDefault();
    setLoading(true);
    const apiKey = '2aabea5f82e14886a5e131324242408';

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${getValue.current.value}&aqi=no`)
      .then((res) => {
        const cityExists = data.some(item => item.location.name === res.data.location.name);
        if (!cityExists) {
          setData([res.data, ...data]);
        } else {
          alert('City already exists.');
        }
        getValue.current.value = '';
        setLoading(false);
      })
      .catch((err) => {
        alert('This City Is Not Exists In My Data Try Another');
        getValue.current.value = '';
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white flex flex-col items-center py-10 px-6">
      <h1 className="text-5xl font-extrabold text-yellow-200 tracking-wider mb-8 shadow-md">
        Weather App
      </h1>

      <form onSubmit={getWeather} className="w-full max-w-md bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl p-6 shadow-lg">
        <div className="relative mb-4">
          <input
            ref={getValue}
            type="text"
            placeholder="Enter City Name"
            className="w-full py-4 px-5 rounded-lg bg-gray-900 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-300 focus:outline-none shadow-md"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-yellow-400 py-3 rounded-lg text-xl font-bold text-gray-900 hover:bg-yellow-300 transition duration-300 shadow-lg">
            {loading ? 'Loading...' : 'Check Weather'}
          </button>
        </div>
      </form>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {data.length > 0 ? data.map((item) => (
          <Card
            key={item.location.name}
            name={item.location.name}
            temperature={item.current.temp_c}
            src={item.current.condition.icon}
            date={item.location.localtime}
            weatherText={item.current.condition.text}
            country={item.location.country}
          />
        )) : <h2 className="text-gray-300 text-lg font-mono">Start by searching for a city.</h2>}
      </div>
    </div>
  );
}
