function ruckSucksRearrangement(inputStr) {
  const LINE_SPLITTER = "\n";
  const ruskSacksStrings = inputStr
    .split(LINE_SPLITTER)
    .filter((s) => s.length > 0);
  let totalPriority = 0;
  for (let ruskSackStr of ruskSacksStrings) {
    totalPriority += getInvalidItemsTotalPriority(ruskSackStr);
  }
  return totalPriority;

  function getInvalidItemsTotalPriority(ruskSackStr) {
    let priorities = 0;
    const l = ruskSackStr.length;
    const firstCompartmentChSet = new Set(ruskSackStr.slice(0, l / 2));
    const secondCompartmentUniqChs = [...new Set(ruskSackStr.slice(l / 2))];

    for (let itemCh of secondCompartmentUniqChs) {
      if (firstCompartmentChSet.has(itemCh)) {
        priorities += getItemPriority(itemCh);
      }
    }
    return priorities;
  }

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
CrZsJsPPZsGzwwsLwLmpwMDw
`;
console.log("Output:", ruckSucksRearrangement(inputStr));
