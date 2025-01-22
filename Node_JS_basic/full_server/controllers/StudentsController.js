import utils from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    utils()
      .then((data) => {
        const _data = data;
        _data.CS = _data.CS.map((el) => el.firstname);
        _data.SWE = _data.SWE.map((el) => el.firstname);

        let formatStr = 'This is the list of our students\n';
        formatStr += `Number of students in CS: ${_data.CS.length}. List: ${_data.CS.join(', ')}\n`;
        formatStr += `Number of students in SWE: ${_data.SWE.length}. List: ${_data.SWE.join(', ')}`;

        response.status(200).send(formatStr);
      })
      .catch(() => {
        response.status(500).send('Cannot load database');
      });
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      utils()
        .then((data) => {
          let str;

          if (major === 'CS') str = data.CS.map((el) => el.firstname).join(', ');
          else str = data.SWE.map((el) => el.firstname).join(', ');

          response.status(200).send(`List: ${str}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load database');
        });
    }
  }
}
