const express = require('express')
const Ctrl = require('../Controllers/Ctrl')
const router = express.Router()

router.get("/getall",Ctrl.getAll) // To get all the data
router.get("/search",Ctrl.search)  // To search a particular station
router.get("/distance",Ctrl.distance) // To find distance b/w two stations

module.exports = router


