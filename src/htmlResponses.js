const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const clientTwo = fs.readFileSync(`${__dirname}/../client/client2.html`);
const clientThree = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getClientTwo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(clientTwo);
  response.end();
};

const getClientThree = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(clientThree);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getClientTwo = getClientTwo;
module.exports.getClientThree = getClientThree;
