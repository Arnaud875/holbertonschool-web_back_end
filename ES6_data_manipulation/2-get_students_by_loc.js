export default function getStudentsByLocation(arrayObj, city) {
  if (!Array.isArray(arrayObj)) return [];
  return arrayObj.filter((obj) => obj.location === city);
}
