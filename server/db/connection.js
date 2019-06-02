const monk = require('monk');
const connectionString = 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;

// password = givs_3LTCQ5eAsa