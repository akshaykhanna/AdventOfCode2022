function rockPaperScissorsGame(inputStr) {
  const charToOutcomeMap = { X: "L", Y: "D", Z: "W" };
  const charToMoveMap = { A: "R", B: "P", C: "S" };
  const movePtsMap = { R: 1, P: 2, S: 3 };
  const roundOutcomePtsMap = { W: 6, L: 0, D: 3 };
  const moveWinnerLooserMap = { R: "S", S: "P", P: "R" };
  const moveLooserWinnerMap = { S: "R", P: "S", R: "P" };
  const LINE_SPLITTER = "\n";
  const [WIN, LOOSE] = ["W", "L"];

  const eachRoundInputs = inputStr
    .split(LINE_SPLITTER)
    .filter((s) => s.length > 0);

  function getEachRoundScore(roundInput) {
    const [opChar, outcomeChar] = roundInput.split(" ");
    const [opMove, outcome] = [
      charToMoveMap[opChar],
      charToOutcomeMap[outcomeChar],
    ];
    const outcomePts = roundOutcomePtsMap[outcome];
    let yourMove = 0;
    if (outcome === WIN) yourMove = moveLooserWinnerMap[opMove];
    else if (outcome === LOOSE) yourMove = moveWinnerLooserMap[opMove];
    else yourMove = opMove;
    const movePts = movePtsMap[yourMove];
    const score = outcomePts + movePts;
    console.log(
      `RoundInput:${roundInput}, opMove:${opMove}, yourMove:${yourMove}, Outcome:${outcome}, score:${score}`
    );
    return score;
  }

  let totalScore = 0;
  for (let roundInput of eachRoundInputs) {
    totalScore += getEachRoundScore(roundInput);
  }

  return totalScore;
}

const inputStr = `
A Y
B X
C Z
`;

console.log("Output:", rockPaperScissorsGame(inputStr));
