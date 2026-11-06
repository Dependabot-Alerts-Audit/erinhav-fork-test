const _ = require("lodash");

const userInput = "Hello";
const result = _.template("<%= value %>")({ value: userInput });

console.log(result);
