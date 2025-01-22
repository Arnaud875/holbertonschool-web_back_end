import utils from "../utils";

export default class StudentsController {
    static async getAllStudents(request, response) {
        utils()
            .then(data => {
                data.CS = data.CS.map(el => el.firstname);
                data.SWE = data.SWE.map(el => el.firstname);

                let formatStr = 'This is the list of our students\n';
                formatStr += `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`;
                formatStr += `Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`;

                response.status(200).send(formatStr);
            })
            .catch(() => {
                response.status(500).send("Cannot load database");
            });
    }

    static async getAllStudentsByMajor(request, response) {
        const major = request.params.major;

        if (!["CS", "SWE"].includes(major))
            return response.status(500).send("Major parameter must be CS or SWE");

        utils()
            .then(data => {
                let str;

                if (major == "CS")
                    str = data.CS.map(el => el.firstname).join(", ");
                else
                    str = data.SWE.map(el => el.firstname).join(", ");

                response.status(200).send(`List: ${str}`);
            })
            .catch(() => {
                response.status(500).send("Cannot load database");
            });
    }
}