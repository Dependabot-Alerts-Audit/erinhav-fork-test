const _ = require('lodash');

const greet = _.template('Hello <%= name %>');
console.log(greet({ name: 'Audit' }));
