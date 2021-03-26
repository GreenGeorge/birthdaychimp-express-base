const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 8080;
const isTest = process.env.NODE_ENV === 'test';

const app = express();

const server = app.listen(port, () => console.log(`Listening at port ${port}, environment: ${process.env.NODE_ENV}`));

app.use(express.json());
if (!isTest) app.use(morgan('tiny'));

module.exports = { app, server };
