// ***REDUCERS **********************
const initialState = {
  weatherData: [],
};

//** Here is the SWITCH CASE BLOCK which takes in an ACTION TYPE being selected by the fetch(async), and depending on
// that ACTION TYPE, a case is chosen */

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_WEATHER:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };

    default:
      return state;
  }
}

//***ACTION TYPES- is what you will pass into your action creators and use in your cases (above).
const SHOW_WEATHER = "SHOW_WEATHER";

//***ACTION CREATORS- these are functions that returns a 'type' and 'payload'
// For search:
export const showWeather = (weatherData) => {
  return {
    type: SHOW_WEATHER,
    payload: {
      weatherData,
    },
  };
};

//NOTES:
//***ACTION CREATORS- these are functions that returns a 'type' and 'payload'
//(which represent the target)
// *Target means property in your state.
// Synchronous actions.
// The difference from thunk is - Action creators return objects, and Thunk creators return
//functions.
