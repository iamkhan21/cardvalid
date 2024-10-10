import { validateCardNumber } from "./utils.js";
import { test, expect } from "vitest";

test.each([
  ["4137 8947 1175 5903", false],
  ["4137 8947 1175 5904", true],
  ["4137894711755905", false],
  ["4917484589897307", false],
  ["4347699988887747", false],
  ["5011054488597827", true],
  ["6271701225979642", true],
  ["6034932528973614", true],
  ["6362970000457013", true],
  ["6062826786276634", true],
  ["3566000020000410", true],
  ["3530111333300000", true],
  ["6250941006528599", true],
  ["5304224831894090", true],
])(
  'result of validation the card number "%s" should be %s',
  (cardNumber, expected) => {
    expect(validateCardNumber(cardNumber)).toBe(expected);
  },
);
``;
