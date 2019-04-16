const fs = require('fs');

module.exports = (program) => {
    program.command('create-file <filename>')
        .action((filename) => {
            fs.writeFile(filename, '', (err) => {
                if(err) throw err;
            });
        });
}