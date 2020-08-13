var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: "String",
  password: "String",
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
