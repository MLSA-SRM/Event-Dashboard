var mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    reg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    events: {
      eventId: { type: mongoose.Schema.Types.ObjectId, ref: "event" },
    },
  },
  { strict: false }
);

module.exports = mongoose.model("person", personSchema);
