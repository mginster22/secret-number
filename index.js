const SECRIT_PIN = 20;

const checkIsValueNotNumber = function (number) {
  return number === null || number === "" || isNaN(number);
};

const guessHiddenNumber = function () {
  let tryValue = 0;
  while (true) {
    const userInputNumber = prompt("Enter your number");
    if (checkIsValueNotNumber(userInputNumber)) {
      alert("You didn't enter a number, please try again");
    } else {
      if (Number(userInputNumber) > SECRIT_PIN) {
        alert("The number must be less, please try again");
      } else if (Number(userInputNumber) < SECRIT_PIN) {
        alert("The number must be greater, please try again");
      } else {
        alert("You WIN " + tryValue + " attempts");
        break;
      }
      tryValue++;
    }
  }
};
guessHiddenNumber();
