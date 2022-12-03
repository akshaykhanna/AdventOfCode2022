function calorieCounting(inputStr) {
  const LINE_SPLITTER = "\n";
  const eachElfCalories = inputStr.split(LINE_SPLITTER + LINE_SPLITTER);
  let maxCaloriesByAElf = 0;
  for (let elfCaloriesStr of eachElfCalories) {
    const sumOfCalories = elfCaloriesStr
      .split(LINE_SPLITTER)
      .map((c) => Number(c))
      .reduce((c1, c2) => c1 + c2);
    maxCaloriesByAElf = Math.max(maxCaloriesByAElf, sumOfCalories);
  }
  return maxCaloriesByAElf;
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
