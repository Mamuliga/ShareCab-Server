const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ridesSchema = new Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  riders: { type: [mongoose.Schema.Types.ObjectId], ref: "user" },
  origins: {
    type: [
      {
        lat: Number,
        lng: Number,
        uid: { type: mongoose.Schema.Types.ObjectId }
      }
    ],
    ref: "user"
  },
  destinations: {
    type: [
      {
        lat: Number,
        lng: Number,
        uid: { type: mongoose.Schema.Types.ObjectId }
      }
    ],
    ref: "user"
  },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("rides", ridesSchema, "ridesData");
