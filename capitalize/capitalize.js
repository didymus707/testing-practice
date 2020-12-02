const capitalize = str => {
  const firstLetter = str[0];
  const remainder = str.substring(1);
  return firstLetter.toUpperCase() + remainder;
};

module.exports = capitalize;