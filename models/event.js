var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: "String",
  attendence: {
    type: Number,
    default: null,
  },
  public: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "people",
    },
  ],
});

module.exports = mongoose.model("event", eventSchema);
