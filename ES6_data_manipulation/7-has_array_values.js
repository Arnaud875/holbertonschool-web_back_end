export default function hasValuesFromArray(setObj, arrayObj) {
  return arrayObj.every((value) => setObj.has(value));
}
