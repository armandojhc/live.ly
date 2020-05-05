const mongoose = require("mongoose");
const UserModel = require("../models/users.js");
const EventModel = require("../models/events.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/lively",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//Remove all users

// UserModel.deleteMany({}, (err) => {
//     console.log(err);
//     console.log("Done");
//     mongoose.connection.close();

// })

//Add user entry for Armando

// let post = new UserModel();

// post.name = "Armando Herrera Canelon";
// post.avatarURL = "https://avatars2.githubusercontent.com/u/56770124?s=400&u=690deb125107433852b9d01995fa0a800b767a45&v=4";
// armando.email = "armando.herrera91@gmail.com";
// armando.role = 2;
// armando.password = "1234";

// armando.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

// let post = new UserModel();

// post.name = "Post Malone";
// post.avatarURL = "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png";
// post.email = "postMalone@gmail.com";
// post.role = 1;
// post.password = "postMalone";

// post.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

let postMaloneEvent = new EventModel();

postMaloneEvent.eventPhotoURL = "https://www.instagram.com/postmalone/?hl=en";
postMaloneEvent.gifURL = "https://media.giphy.com/media/3ohuPcW67ShInnbBYI/giphy.gif";
postMaloneEvent.name = "Post Molone QA Live in IG";
postMaloneEvent.eventDate = 2020-08-03;
postMaloneEvent.eventLink = "https://www.instagram.com/postmalone/?hl=en";
postMaloneEvent.eventOwner = "Post Malone";

postMaloneEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
        mongoose.connection.close();
    }
});

