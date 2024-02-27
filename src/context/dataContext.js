/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useEffect, useState} from 'react';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState({});
  const [autoComplete, setAutoComplete] = useState();
  const [city, setCity] = useState('London');
  const [astroData, setAstroData] = useState('');

  const apiKey = '7456bbcf39164b58bce125218231312';
  const baseUrl = 'https://api.weatherapi.com/v1/';

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = async function () {
    let forecastResponse = await fetch(
      baseUrl + `forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`,
    );
    forecastResponse = await forecastResponse.json();
    let autoCompleteResponse = await fetch(
      baseUrl + `search.json?key=${apiKey}&q=${city}`,
    );
    autoCompleteResponse = await autoCompleteResponse.json();

    const astroInfo = forecastResponse?.forecast?.forecastday[0]?.astro;
    setAstroData([astroInfo?.sunrise, astroInfo?.sunset]);

    setWeatherData(forecastResponse);
    setAutoComplete(autoCompleteResponse);
  };

  const contextValues = {
    weatherData,
    fetchWeatherData,
    city,
    setCity,
    autoComplete,
    astroData,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext hook must be used within a DataProvider');
  }
  return context;
};
