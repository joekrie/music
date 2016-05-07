const express = require('express');
const moment = require('moment');

const {
  HTTP_PORT,
  MONGO_DB_URL,
  ELASTICSEARCH_URL
} = require('./constants');

const {
  generateReadOnlyUrl
} = require('./azure-storage-utils');

const app = express();

app.get('/sas', (req, resp) => {
  const url = generateReadOnlyUrl('test.txt');  
  resp.send(url);
});

app.get('/', (req, resp) => {
    resp.send('hi');
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));