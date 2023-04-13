import "./style.css";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} from "./src/logic/converter";

export default function main() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.addEventListener("change", changeToFahrenheit);
  fahrenheitInput.addEventListener("change", changeToCelsius);

  function changeToFahrenheit() {
    console.log("Go to fahrenheit");
    fahrenheitInput.value = celsiusToFahrenheit(celsiusInput.value);
  }

  function changeToCelsius() {
    console.log("Go to celsius");
    celsiusInput.value = fahrenheitToCelsius(fahrenheitInput.value);
  }
}
