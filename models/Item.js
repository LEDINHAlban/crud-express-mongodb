const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
