'use strict';
import Hello from './Hello'
module.exports.hello = (event, context, callback) => {
  const helloObject = new Hello()
  const response = {
    statusCode: 200,
    body: JSON.stringify(helloObject.hello(event)),
  };
  callback(null, response);
};
