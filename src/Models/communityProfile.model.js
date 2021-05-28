const mongoose = require('mongoose')

var CommunityProfileSchema = new mongoose.Schema({
  communityName: {
    type: String,
    required: "This field is required"
  },
  communityEmailAddress: {
    type: String,
    required: "This field is required"
  },
  communityContact: {
    type: Number,
    required: "This field is required"
  },
  communityLocation: {
    type: String,
    required: "This field is required"
  },
  communitySize: {
    type: Number,
    required: "This field is required"
  },
  communityType: {
    type: String,
    required: "This field is required"
  },
  communityTopics: {
    type: Array,
    required: "This field is required"
  }
})

mongoose.model('community', CommunityProfileSchema);