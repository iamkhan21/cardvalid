export const validateCardNumber = (cardNumber: string) => {
  // check if card number is a string
  if (typeof cardNumber !== "string") {
    throw new Error("Card number must be a string");
  }

  // remove all spaces from card number
  cardNumber = cardNumber.replace(/\s/g, "");

  // check if card number is empty
  if (!cardNumber) {
    throw new Error("Card number cannot be empty");
  }

  // check if card number has only digits
  if (!cardNumber.match(/^\d+$/)) {
    throw new Error("Card number must only contain digits");
  }

  // check if card number is valid

  // step 1 - split the string to digits
  const cardDigits = cardNumber.split("");

  // step 2 - calculate the checksum for luhn algorithm
  let checksum = 0;

  for (let i = 0, len = cardDigits.length; i < len; i++) {
    let cardDigit = Number(cardDigits[i]);

    if (i % 2 === 0) {
      // double every other digit
      cardDigit *= 2;

      if (cardDigit > 9) {
        // if doubled digit is greater than 9, then sum the digits
        cardDigit -= 9;
      }
    }

    checksum += cardDigit;
  }

  // step 3 - if sum is divisible by 10, then sum of digits of result is valid
  return checksum % 10 === 0;
};
