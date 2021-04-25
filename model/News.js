const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  typeNews: {
    type: Number,
    required: true,

  },
  title: {
    type: String,
    default: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
  },
  comment: []
});

const News = mongoose.model("News", NewSchema);

module.exports = News;
