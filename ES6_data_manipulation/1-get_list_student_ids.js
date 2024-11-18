export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) return [];
  return arrayObj.map((x) => x.id);
}
