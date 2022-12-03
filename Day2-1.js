function rockPaperScissorsGame(inputStr) {
  const charToMoveMap = { A: "R", B: "P", C: "S", X: "R", Y: "P", Z: "S" };
  const movePtsMap = { R: 1, P: 2, S: 3 };
  const roundOutcomePtsMap = { W: 6, L: 0, D: 3 };
  const moveWinnerLossMap = { R: "S", S: "P", P: "R" };
  const LINE_SPLITTER = "\n";

  const eachRoundMoves = inputStr.split(LINE_SPLITTER).filter(s => s.length > 0);
  let totalScore = 0;
  function doYouWon(opMove, yourMove) {
    return moveWinnerLossMap[yourMove] === opMove;
  }
  function getEachRoundScore(roundMoves) {
    const [opChar, yourChar] = roundMoves.split(" ");
    const [opMove, yourMove] = [charToMoveMap[opChar], charToMoveMap[yourChar]];
    let score = 0;
    if (opMove === yourMove) score = roundOutcomePtsMap["D"];
    else {
      if (doYouWon(opMove, yourMove)) score = roundOutcomePtsMap["W"];
      else score = roundOutcomePtsMap["L"];
    }
    score += movePtsMap[yourMove]; // adding your move pts
    return score;
  }
  for (let roundMoves of eachRoundMoves) {
    totalScore += getEachRoundScore(roundMoves);
  }
  return totalScore;
}

const inputStr = `
A Y
B X
C Z
`;
console.log("Output:", rockPaperScissorsGame(inputStr));
