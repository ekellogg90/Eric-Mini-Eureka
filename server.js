const express = require('express');
const path = require('path');
const api = require('./Develop/public/assets/routes/indexRoute');

const PORT = process.env.port || 3001;
const app = express();
