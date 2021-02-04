import { showWeather } from "../reducers/weatherReducer";

const API_key = "e006b8259fc763ab279dac6c09f4d5db";
const country_code = "USA";

export const getWeather = (query) => {
  return (dispatch) => {
    return fetch(
      `api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country_code}&appid=${API_key}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        dispatch(showWeather(weatherData.hits));
      });
  };
};

//NOTES: the action type is on line 12, "showWeather", and that is what will get selected at the
// switch case block in the weatherReducer.
