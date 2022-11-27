function getExplodedNumber(number, toString) {
  let digits = number.toString(10).length;
  let explodedNumber = [];
  for (let i = digits; i > 0; i--) {
    let x = number % Math.pow(10, i);
    let y = number % Math.pow(10, i - 1);
    explodedNumber.push(x - y)
  }
  if (toString) {
    explodedNumber = explodedNumber.map((part, j) => {
      return part === 0 ? "0".repeat(digits - j) : part
    });
    return explodedNumber.join(" + ")
  } else {
    return explodedNumber
  }
}


for (let n = 1; n <= 5; n++) {
  let randNum = Math.floor(Math.random() * 999_999);
  let randBool = Math.round(Math.random()); // Returns number
  let isToString = randBool === 1; // Returns boolean
  console.log([
    { randNum },
    { isToString },
    getExplodedNumber(randNum, randBool)
  ])
}