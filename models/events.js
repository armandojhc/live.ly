const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: { type: String, required: true },
  eventLink: { type: String },
  eventDate: { type: Date },
  gifURL: { type: String, default: "" },
  eventPhotoURL: { type: String, required: false },
  eventOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Event = mongoose.model("Events", eventSchema);


module.exports = Event;