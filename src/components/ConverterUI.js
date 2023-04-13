import { celsiusToFahrenheit, fahrenheitToCelsius } from "../logic/converter";

export default function ConverterUI() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.addEventListener("input", changeToFahrenheit);
  fahrenheitInput.addEventListener("input", changeToCelsius);

  function changeToFahrenheit() {
    console.log("Go to fahrenheit");
    fahrenheitInput.value = celsiusToFahrenheit(celsiusInput.value);
  }

  function changeToCelsius() {
    console.log("Go to celsius");
    celsiusInput.value = fahrenheitToCelsius(fahrenheitInput.value);
  }
}
