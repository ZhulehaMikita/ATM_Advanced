const options = {
    env: {
        type: 'string',
        demandOption: true,
        choices: ['local', 'demo'],
        default: 'local'
    },
    instances: {
        type: 'number',
        demandOption: true,
        default: 1
    },
    tags: {
        type: 'string',
        demandOption: true,
        default: '@smoke'
    },
};

module.exports = require('yargs').options(options).argv;
