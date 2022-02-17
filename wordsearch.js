const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  let verticalJoin = [];

  for (let i = 0; i < letters[0].length; i++) {
    let tempArray = [];
    for (let j = 0; j < letters.length; j++) {
      tempArray.push(letters[j][i]);
    }
    verticalJoin.push(tempArray);
  }

  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
