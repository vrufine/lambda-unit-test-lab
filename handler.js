'use strict';
import Hello from './Hello'
module.exports.hello = (event, context, callback) => {
  const helloObject = new Hello()

  const response = {
    statusCode: 200,
    body: JSON.stringify(helloObject.hello(event)),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
