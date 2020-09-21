var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: "String",
  attendence: {
    type: Number,
    default: null,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  public: [
    {
      name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "person",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("event", eventSchema);
