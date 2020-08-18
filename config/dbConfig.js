const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
