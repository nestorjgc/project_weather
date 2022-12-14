import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

export default function App() {
  // HOOK: genera el State
  //Check
  // [[], fn modificadora()]
  const [cities, setCities] = useState([]);
  //
  // ['Buenos Aires', 'Cordoba'] ---> onSearch('Bogota') <- return
  // ['Buenos Aires', 'Cordoba', 'Bogota']

  function onSearch(ciudad) {
    console.log(ciudad);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };

        setCities((oldCities) => [...oldCities, ciudad]);
      });
  }

  function onClose(id) {
    setCities((prevState) => prevState.filter((c) => c.id !== id));
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
      <div className='footer-bg'>
        <div className='footer'>
          <h4>@2022 Copyright Nestor</h4>
        </div>
      </div>
    </div>
  );
}
