const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(word.split('').reverse().join(''))) return true;
  }
  for (let col = 0; col < letters.length; col++) {
    let verticalString = '';
    for (let row = 0; row <= letters[col].length; row++) {
      verticalString += letters[row][col];
    }
    if (verticalString === word || verticalString === word.split('').reverse().join('')) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;


