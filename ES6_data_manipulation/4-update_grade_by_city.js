export default function updateStudentGradeByCity(arrayObj, city, newArrayObj) {
  return arrayObj
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const newObj = newArrayObj.find((newObj) => newObj.studentId === obj.id);

      return {
        ...obj,
        grade: newObj ? newObj.grade : 'N/A',
      };
    });
}
