const express = require('express');
const { existsSync, readFileSync } = require('fs');

const app = express();

function readCSV(filePath) {
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

  return [size, CSStr, SWEStr];
}

const cacheData = readCSV(process.argv[2]);

app.get('/students', (req, res) => {
  let formatStr = 'This is the list of our students\n';
  formatStr += `Number of students: ${cacheData[0]}\n`;
  formatStr += `Number of students in CS: ${cacheData[1].length}. List: ${cacheData[1].join(', ')}\n`;
  formatStr += `Number of students in SWE: ${cacheData[2].length}. List: ${cacheData[2].join(', ')}`;

  res.send(formatStr);
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
