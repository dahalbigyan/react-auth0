const express = require('express'); 
const app = express(); 
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config(); 
