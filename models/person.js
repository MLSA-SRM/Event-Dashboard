var mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reg: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    // events: {
    //   eventId: { type: mongoose.Schema.Types.ObjectId, ref: "event" },
    // },
  },
  { strict: false }
);

module.exports = mongoose.model("person", personSchema);
