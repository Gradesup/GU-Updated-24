import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("London");
  const [countryName, setCountryName] = useState("GB");

  useEffect(() => {
    const fetchCity = async () => {
      try {
        // First API request to get the user's IP
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        const d = ipData;

        let fetchedCity = d.city || 'London'; // Set default value
        let fetchedCountry = d.country || 'GB'; // Set default value

        setCityName(fetchedCity);
        setCountryName(fetchedCountry);

      } catch (error) {
        console.log('An error occurred:', error);
        // If the API request fails, set default values
        setCityName('London');
        setCountryName('GB');
      }
    };

    fetchCity();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const weatherApiKey = '790507b0aebef1c3eb6df77c4ee0cd66';
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )},${encodeURIComponent(countryName)}&appid=${weatherApiKey}`
      );

      const weatherData = weatherResponse.data;

      setWeather({
        temperature: weatherData.main.temp,
        weatherIcon: weatherData.weather[0].icon,
      });
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [cityName, countryName]);

  // Return the weather state here
  return { weather, loading };
};

export default useWeatherData;
