import { existsSync, readFileSync } from "fs";

export default async function readDatabase() {
    return new Promise((resolve, reject) => {
        const filePath = (process.argv.length > 2) ? process.argv[2] : "";

        if (!existsSync(filePath)) reject(new Error('Cannot load the database'));
        
        let data = readFileSync(filePath, { encoding: 'utf-8' });
        data = data.split('\n').map((line) => line.split(','));
    
        const rowsName = data[0];
    
        let table = { "size": 0, "SWE": [], "CS": [] }
    
        for (const elements of data.slice(1)) {
            const formatElements = {};
    
            elements.forEach((element, index) => {
                formatElements[rowsName[index]] = element;
            });

            if (typeof(formatElements.field) != "undefined")
                table[formatElements.field].push(formatElements);

            if (elements[0] !== '') table.size += 1;
        }
    
        resolve(table);
    });
}