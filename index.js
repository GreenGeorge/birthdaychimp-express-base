const express = require('express');
const morgan = require('morgan');

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
const environment = process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const isTest = process.env.NODE_ENV === 'test';

const app = express();

const server = app.listen(port, () => console.log(`name ${name}  v${version}. environment ${environment}. port ${port}`));

app.use(express.json());
if (!isTest) app.use(morgan('tiny'));

module.exports = { app, server };
