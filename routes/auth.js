const express = require('express');
const Router = express.Router();
const {home} = require('../contro/con');

Router.route('/').get(home);

module.exports = Router;