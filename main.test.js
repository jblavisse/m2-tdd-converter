import { expect, it } from "vitest";
import main from "./main.js";

/**
 * @vitest-environment jsdom
 */

it("Test if h1 is present", () => {
  document.body.innerHTML = `
    <h1>Coucou</h1>
`;

  let h1 = document.querySelector("h1");
  expect(h1.innerHTML).toBe("Coucou");
});

it("changeToFahrenheit", () => {
  // 1. Je rends mon composant
  document.body.innerHTML = `
    <input
    type="number"
    id="celsius"
    />
    <input
    type="number"
    id="fahrenheit"
    />`;
  main();

  // 2. Simuler l'événement qui m'intéresse
  let celsiusInput = document.getElementById("celsius");
  celsiusInput.value = "0";
  celsiusInput.dispatchEvent(new Event("change"));

  // 3. Vérifie si c'est conforme à ce que j'attends
  let fahrenheitInput = document.getElementById("fahrenheit");
  expect(fahrenheitInput.value).toBe("32");
});

it("changeToCelsius", () => {});
