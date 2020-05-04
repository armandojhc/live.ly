import axios from "axios";

export default {
  // Gets all live.ly events
  getEvents: function() {
    return axios.get("api/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("api/event" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("api/event/" + id);
  },
  // Saves a live.ly event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/event", eventData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};