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

// let postMaloneEvent = new EventModel();

// postMaloneEvent.eventPhotoURL = "https://www.instagram.com/postmalone/?hl=en";
// postMaloneEvent.gifURL = "https://media.giphy.com/media/3ohuPcW67ShInnbBYI/giphy.gif";
// postMaloneEvent.name = "Post Molone QA Live in IG";
// postMaloneEvent.eventDate = 2020-08-03;
// postMaloneEvent.eventLink = "https://www.instagram.com/postmalone/?hl=en";
// postMaloneEvent.eventOwner = "Post Malone";

// postMaloneEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

// let drakeEvent = new EventModel();

// drakeEvent.eventPhotoURL = "https://nightout.s3.amazonaws.com/media/posters/56951/large-15195a2b05a7c713.jpg?1555449205";
// drakeEvent.gifURL = "https://media.giphy.com/media/l41Yh4vr9mSNE13FK/giphy.gif";
// drakeEvent.name = "Drake WILDIN OUT Youtube";
// drakeEvent.eventDate = 2020-08-03;
// drakeEvent.eventLink = "https://www.youtube.com/user/DrakeOfficial";
// drakeEvent.eventOwner = "Post Malone";

// drakeEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

let jbalvinEvent = new EventModel();

jbalvinEvent.eventPhotoURL = "https://nightout.s3.amazonaws.com/media/posters/56951/large-15195a2b05a7c713.jpg?1555449205";
jbalvinEvent.gifURL = "https://media.giphy.com/media/l41Yh4vr9mSNE13FK/giphy.gif";
jbalvinEvent.name = "Drake WILDIN OUT Youtube";
jbalvinEvent.eventDate = 2020-08-03;
jbalvinEvent.eventLink = "https://www.youtube.com/user/DrakeOfficial";
jbalvinEvent.eventOwner = "Post Malone";

jbalvinEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
        mongoose.connection.close();
    }
});

