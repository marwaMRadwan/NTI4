const express = require('express')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const router = new express.Router()

module.exports=router