function generateRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 5) {
    const random = Math.floor(Math.random() * 20) + 1;
    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
    }
  }
  return randomNumbers;
}

function playLottery() {
  const userNumbers = [];
  const userNumbersInput = document.getElementById("user-numbers").value;
  const resultElement = document.getElementById("result");
  const randomNumbersElement = document.getElementById("random-numbers");

  if (userNumbersInput.length !== 5) {
    resultElement.textContent = "Please enter 5 numbers.";
    return;
  }

  for (let i = 0; i < userNumbersInput.length; i++) {
    const num = parseInt(userNumbersInput[i]);
    if (!userNumbers.includes(num)) {
      userNumbers.push(num);
    }
  }

  if (userNumbers.length !== 5) {
    resultElement.textContent = "Please enter 5 unique numbers.";
    return;
  }

  const randomNumbers = generateRandomNumbers();
  randomNumbersElement.textContent = `Random Numbers: ${randomNumbers.join(
    ", "
  )}`;
  randomNumbersElement.style.display = "block";

  const matchedNumbers = userNumbers.filter((number) =>
    randomNumbers.includes(number)
  );

  if (matchedNumbers.length === 0) {
    resultElement.textContent = "Sorry, no matching numbers. Try again!";
  } else if (matchedNumbers.length >= 2) {
    resultElement.textContent = `You matched ${
      matchedNumbers.length
    } numbers: ${matchedNumbers.join(", ")}. You won!`;
  } else {
    resultElement.textContent = `You matched ${
      matchedNumbers.length
    } numbers: ${matchedNumbers.join(", ")}. Try again!`;
  }
}
