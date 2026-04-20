const checkStringLength = (string, maxLength) => string.length <= maxLength;

const checkForPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let index = normalizeString.length - 1;

  for(const char of normalizeString) {
    if(char !== normalizeString[index]) {
      return false;
    }
    index--;
  }

  return true;
};

const parseNumbers = (argument) => {
  const string = Number.isFinite(argument) ? argument.toString() : argument;
  let numbers = '';

  for(const char of string) {
    const number = parseInt(char);

    if (!Number.isNaN(number)) {
      numbers += char;
    }
  }

  return parseInt(numbers);
};
