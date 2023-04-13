import { expect, it } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converter.js";

it("fahrenheitToCelsius", () => {
  expect(fahrenheitToCelsius(0)).toBeCloseTo(-17.8, 1);
  expect(fahrenheitToCelsius(40)).toBeCloseTo(4.4, 1);
  expect(fahrenheitToCelsius(-10)).toBeCloseTo(-23.3, 1);
});

it("celsiusToFahrenheit", () => {
  expect(celsiusToFahrenheit(30)).toBe(86);
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});
