const dbHelper = require('../public/database/dbHelper');
const pythonShell = require('python-shell').PythonShell;

function tagging(link) {
  return new Promise(async (resolve, reject) => {
    const options = {
      mode: 'text',
      pythonOptions: ['-u'],
      scriptPath: './imageProcessing',
      args: [link],
    };
    pythonShell.run('compute.py', options, (err, results) => {
      resolve(results);
    });
  });
}
module.exports = tagging;
