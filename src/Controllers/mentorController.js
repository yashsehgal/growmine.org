
import MentorProfile from '../Views/Profile/MentorProfile/MentorProfile'

const express = require('express')

var router = express.Router()
const mongoose = require('mongoose')
const Mentor = mongoose.model('mentor')



router.get('/mentor/:id', (req, res) => {
  res.render(
    <MentorProfile profileDetails={
      
    }/>, 
    {
      viewTitle: "Profile"
    })
})

router.post('/', (req, res) => {
})