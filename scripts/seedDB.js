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


// let jbalvinEvent = new EventModel();

// jbalvinEvent.eventPhotoURL = "http://www.sapcenter.com/assets/img/JBALVIN_750x462New-788d6bf49e.jpg";
// jbalvinEvent.gifURL = "https://media.giphy.com/media/l41Yh4vr9mSNE13FK/giphy.gif";
// jbalvinEvent.name = "JBalvin Daleeee Live Party";
// jbalvinEvent.eventDate = 2020-08-03;
// jbalvinEvent.eventLink = "https://www.instagram.com/jbalvin/?hl=en";
// jbalvinEvent.eventOwner = "JBalvin";

// jbalvinEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });


// let kanyeWestEvent = new EventModel();

// kanyeWestEvent.eventPhotoURL = "https://i.pinimg.com/236x/cf/93/3a/cf933ad3b59a30c573180b26e962922a--saint-pablo-music-pictures.jpg";
// kanyeWestEvent.gifURL = "https://media.giphy.com/media/PcFPiuGZVqK2I/giphy.gif";
// kanyeWestEvent.name = "West Sunday Service ";
// kanyeWestEvent.eventDate = 2020-08-03;
// kanyeWestEvent.eventLink = "https://www.youtube.com/channel/UCs6eXM7s8Vl5WcECcRHc2qQ";
// kanyeWestEvent.eventOwner = "Kanye West";

// kanyeWestEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

// let travisScottEvent = new EventModel();

// travisScottEvent.eventPhotoURL = "https://i.ytimg.com/vi/eRvBoYb8vDQ/maxresdefault.jpg";
// travisScottEvent.gifURL = "https://media.giphy.com/media/CpCabm3Fek6VW/giphy.gif";
// travisScottEvent.name = "Travis Scott Live on YouTube";
// travisScottEvent.eventDate = 2020-08-03;
// travisScottEvent.eventLink = "https://www.youtube.com/user/TravisScottXX";
// travisScottEvent.eventOwner = "Travis Scott";

// travisScottEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

// let gambinoEvent = new EventModel();

// gambinoEvent.eventPhotoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkhxn9Jcb70ordx9NeWHMeL1IyhXK_RstmJH41VqIPnE6nnHB4&usqp=CAU";
// gambinoEvent.gifURL = "https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif";
// gambinoEvent.name = "Childish Gambino Live from Phoenix";
// gambinoEvent.eventDate = 2020-08-03;
// gambinoEvent.eventLink = "https://www.youtube.com/user/childishgambinoch";
// gambinoEvent.eventOwner = "Childish Gambino";

// gambinoEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

// let karolGEvent = new EventModel();

// karolGEvent.eventPhotoURL = "https://nihtout.s3.amazonaws.com/media/posters/41642/large-5dae4310e7089b45.jpg?1515121334";
// karolGEvent.gifURL = "https://media.giphy.com/media/jowVzXRjphDbjoYmdm/giphy.gif";
// karolGEvent.name = "Karol G IG LIVE";
// karolGEvent.eventDate = 2020-08-03;
// karolGEvent.eventLink = "https://www.instagram.com/karolg/?hl=en";
// karolGEvent.eventOwner = "Karol G";

// karolGEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });


// let wizEvent = new EventModel();

// wizEvent.eventPhotoURL = "https://pbs.twimg.com/media/EB8eNtUUcAEId_R.jpg";
// wizEvent.gifURL = "https://media.giphy.com/media/3ohzgTwXAGO02W9nva/giphy.gif";
// wizEvent.name = "Wiz Khalifa 420 Live on YouTube";
// wizEvent.eventDate = 2020-08-03;
// wizEvent.eventLink = "https://www.youtube.com/user/taylorgangent";
// wizEvent.eventOwner = "Wiz Khalifa";

// wizEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });


// let theWeekndEvent = new EventModel();

// theWeekndEvent.eventPhotoURL = "https://www.residentadvisor.net/images/events/flyer/2016/12/us-1231-898758-front.jpg";
// theWeekndEvent.gifURL = "https://media.giphy.com/media/UOQN52PwpYae4/giphy.gif";
// theWeekndEvent.name = "It's The Weeknd on FB Live";
// theWeekndEvent.eventDate = 2020-08-03;
// theWeekndEvent.eventLink = "https://www.facebook.com/theweeknd/";
// theWeekndEvent.eventOwner = "The Weeknd";

// theWeekndEvent.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All good!");
//         mongoose.connection.close();
//     }
// });

let shakiraEvent = new EventModel();

shakiraEvent.eventPhotoURL = "";
shakiraEvent.gifURL = "https://media.giphy.com/media/UOQN52PwpYae4/giphy.gif";
shakiraEvent.name = "Shakira Hips Dont Lie IG Live";
shakiraEvent.eventDate = 2020-08-03;
shakiraEvent.eventLink = "";
shakiraEvent.eventOwner = "The Weeknd";

shakiraEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
        mongoose.connection.close();
    }
});

