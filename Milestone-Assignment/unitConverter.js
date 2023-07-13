function celToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsiusTemperature = 25;
  let fahrenheitTemperature = celToFahrenheit(celsiusTemperature);
  console.log("Fahrenheit temperature:", fahrenheitTemperature);
  