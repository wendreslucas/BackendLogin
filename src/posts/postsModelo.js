const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: false
  },
  created_datetime: {
    type: Date
  }
})

module.exports = mongoose.model('Post', postSchema)
