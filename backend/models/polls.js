const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    description:{
        type:Array,
    }
  }, {
    timestamps: true,
  });

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll