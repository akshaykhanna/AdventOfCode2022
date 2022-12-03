function calorieCounting(inputStr) {
  const LINE_SPLITTER = "\n";
  const eachElfCalories = inputStr.split(LINE_SPLITTER + LINE_SPLITTER);
  let [firstMaxCal, secMaxCal, thirdMaxCal] = [0, 0, 0];
  for (let elfCaloriesStr of eachElfCalories) {
    const sumOfCalories = elfCaloriesStr
      .split(LINE_SPLITTER)
      .map((c) => Number(c))
      .reduce((c1, c2) => c1 + c2);
    if (sumOfCalories > firstMaxCal) {
      thirdMaxCal = secMaxCal;
      secMaxCal = firstMaxCal;
      firstMaxCal = sumOfCalories;
    } else if (sumOfCalories > secMaxCal) {
      thirdMaxCal = secMaxCal;
      secMaxCal = sumOfCalories;
    } else if (sumOfCalories > thirdMaxCal) {
      thirdMaxCal = sumOfCalories;
    }
  }
  console.log(firstMaxCal, secMaxCal, thirdMaxCal);
  return firstMaxCal + secMaxCal + thirdMaxCal;
}

const inputStr = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;
console.log("Output:", calorieCounting(inputStr));
