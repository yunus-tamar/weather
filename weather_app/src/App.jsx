import { useEffect, useState } from 'react';
import WeatherImg from './assets/Weather.png'
import WeatherTemp from './assets/Temp.png'

const App = () => {

  const [data, SetData] = useState("null");
  const [city, setCity] = useState("noida");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1abd81f47cca57118da172c3ad17cf4`;
      const response = await fetch(url);
      const result = await response.json();
      SetData(result.main);
      // console.log(result.main);
    }
    fetchApi();
  }, [city])

  function fun(e) {
    setCity(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className=" bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900  flex flex-col min-h-screen items-center justify-center text-white">
      <h1 className=" text-center w-3/4 flex items-center justify-center  text-4xl font-bold">Find Weather!</h1>
      <img src={WeatherImg} alt="" style={{ height: "200px" }} />
      <input type="text" placeholder='Enter City Name ' className='rounded text-black font-bold p-2' onChange={fun} />
      {!data ? (
        <div><h1 className='text-3xl font-bold'>data not found</h1></div>
      ) : (
        <div className='m-8 text-2xl font-bold'>
          <div className='flex'>Temperature:  {data.temp} <img src={WeatherTemp} alt="" style={{ height: "30px" }} /></div>
          <h3>City:  {city}</h3>
          <h3>Humidity:  {data.humidity}</h3>
          <h3>Pressure:  {data.pressure}</h3>
        </div>
      )}
    </div>
  )
}

export default App

