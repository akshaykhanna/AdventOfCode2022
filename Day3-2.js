function ruckSucksRearrangement(inputStr) {
  const LINE_SPLITTER = "\n";
  const ruskSacksStrings = inputStr
    .trim()
    .split(LINE_SPLITTER)
    .filter((s) => s.length > 0);
  console.log(ruskSacksStrings);
  const noOfRuckSacks = ruskSacksStrings.length;

  let totalPriority = 0;
  for (let i = 0; i < noOfRuckSacks; i += 3) {
    const firstRucksack = ruskSacksStrings[i];
    const secRucksack = ruskSacksStrings[i + 1];
    const thirdRucksack = ruskSacksStrings[i + 2];
    const [firstSet, secSet, thirdSet] = [
      new Set(firstRucksack),
      new Set(secRucksack),
      new Set(thirdRucksack),
    ];
    thirdSet.forEach((ch) => {
      if (firstSet.has(ch) && secSet.has(ch)) {
        totalPriority += getItemPriority(ch);
      }
    });
  }
  return totalPriority;

  function getItemPriority(ch) {
    let priority = 0;
    const [INITIAL_PRIORITY_OFFSET, CAPITAL_A_PRIORITY, SMALL_A_PRIORITY] = [
      26,
      "A".charCodeAt(0),
      "a".charCodeAt(0),
    ];
    if (ch >= "A" && ch <= "Z")
      priority =
        INITIAL_PRIORITY_OFFSET + 1 + (ch.charCodeAt(0) - CAPITAL_A_PRIORITY);
    else priority = 1 + (ch.charCodeAt(0) - SMALL_A_PRIORITY);
    console.log(`ItemCh:${ch} priority:${priority}`);
    return priority;
  }
}

const inputStr = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
console.log("Output:", ruckSucksRearrangement(inputStr));
