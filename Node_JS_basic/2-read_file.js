const { readFileSync, existsSync } = require('fs');

module.exports = function countStudents(filePath) {
  if (!existsSync(filePath)) throw new Error('Cannot load the database');

  let data = readFileSync(filePath, { encoding: 'utf-8' });
  data = data.split('\n').map((line) => line.split(','));

  const rowsName = data[0];

  let size = 0;
  const SWE = [];
  const CS = [];

  for (const elements of data.slice(1)) {
    const formatElements = {};

    elements.forEach((element, index) => {
      formatElements[rowsName[index]] = element;
    });

    if (formatElements.field === 'SWE') SWE.push(formatElements);
    else if (formatElements.field === 'CS') CS.push(formatElements);

    if (elements[0] !== '') size += 1;
  }

  const CSStr = CS.map((el) => el.firstname);
  const SWEStr = SWE.map((el) => el.firstname);

  console.log(`Number of students: ${size}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CSStr.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWEStr.join(', ')}`);
};
