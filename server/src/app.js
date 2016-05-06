const {
  MONGO_DB_CONN_STR,
  ELASTICSEARCH_CONN_STR,
  AZURE_STORAGE_CONN_STR
} = require('./constants');

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('hi');
});