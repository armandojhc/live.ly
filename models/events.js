const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var eventSchema = new Schema({
  eventPhotoURL: { type: String, required: true },
  gifURL: { type: String, default: "" },
  name: { type: String, required: true },
  eventDate: { type: Date },
  eventLink: { type: String },
  eventOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Event = mongoose.model("Events", eventSchema);


module.exports = Event;