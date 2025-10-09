const express = require('express')
const  Mongoose = require('mongoose')
const cors = require('cors')
const Movie = require('./models/schema')

require('dotenv').config()

const app = express()
const port = process.env.PORT
