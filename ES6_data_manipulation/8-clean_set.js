export default function cleanSet(setObj, startString) {
  const substrings = [];

  setObj.forEach((value) => {
    if (typeof value === 'string' && startString !== '' && value.startsWith(startString)) substrings.push(value.slice(startString.length));
  });
  return substrings.join('-');
}
