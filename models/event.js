var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: "String",
  attendence: {
    type: Number,
    default: null,
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
