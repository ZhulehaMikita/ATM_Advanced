const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({ filename: './reports/logs/combined.log'})
    ],
    format: winston.format.simple()
});

module.exports = logger;
