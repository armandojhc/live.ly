const mongoose = require("mongoose");
const EventModel = require("../models/events.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/lively",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Remove all events

// EventModel.deleteMany({}, (err) => {
//     console.log(err);
//     console.log("Done");

// })

let postMaloneEvent = new EventModel();

postMaloneEvent.eventPhotoURL = "https://cdn1.thr.com/sites/default/files/2019/11/post_malone_amas.jpg";
postMaloneEvent.gifURL = "https://media.giphy.com/media/3ohuPcW67ShInnbBYI/giphy.gif";
postMaloneEvent.name = "Post Malone QA Live in IG";
postMaloneEvent.eventDate = '2020-08-03';
postMaloneEvent.eventLink = "https://www.instagram.com/postmalone/?hl=en";
postMaloneEvent.eventOwner = "5eb0e280cd6dfe3a2daeb3f5";

postMaloneEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let drakeEvent = new EventModel();

drakeEvent.eventPhotoURL = "https://nightout.s3.amazonaws.com/media/posters/56951/large-15195a2b05a7c713.jpg?1555449205";
drakeEvent.gifURL = "https://media.giphy.com/media/l41Yh4vr9mSNE13FK/giphy.gif";
drakeEvent.name = "Drake WILDIN OUT Youtube";
drakeEvent.eventDate = '2020-07-19';
drakeEvent.eventLink = "https://www.youtube.com/user/DrakeOfficial";
drakeEvent.eventOwner = "5eb621825d3b958191ca0432";

drakeEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});


let jbalvinEvent = new EventModel();

jbalvinEvent.eventPhotoURL = "http://www.sapcenter.com/assets/img/JBALVIN_750x462New-788d6bf49e.jpg";
jbalvinEvent.gifURL = "https://media.giphy.com/media/l41Yh4vr9mSNE13FK/giphy.gif";
jbalvinEvent.name = "JBalvin Daleeee Live Party";
jbalvinEvent.eventDate = '2020-10-17';
jbalvinEvent.eventLink = "https://www.instagram.com/jbalvin/?hl=en";
jbalvinEvent.eventOwner = "5eb62635a9633a8429c5307d";

jbalvinEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});


let kanyeWestEvent = new EventModel();

kanyeWestEvent.eventPhotoURL = "https://i.pinimg.com/236x/cf/93/3a/cf933ad3b59a30c573180b26e962922a--saint-pablo-music-pictures.jpg";
kanyeWestEvent.gifURL = "https://media.giphy.com/media/PcFPiuGZVqK2I/giphy.gif";
kanyeWestEvent.name = "West Sunday Service ";
kanyeWestEvent.eventDate = '2020-06-03';
kanyeWestEvent.eventLink = "https://www.youtube.com/channel/UCs6eXM7s8Vl5WcECcRHc2qQ";
kanyeWestEvent.eventOwner = "5eb6317d323daf8778a8ea47";

kanyeWestEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let travisScottEvent = new EventModel();

travisScottEvent.eventPhotoURL = "https://i.ytimg.com/vi/eRvBoYb8vDQ/maxresdefault.jpg";
travisScottEvent.gifURL = "https://media.giphy.com/media/CpCabm3Fek6VW/giphy.gif";
travisScottEvent.name = "Travis Scott Live on YouTube";
travisScottEvent.eventDate = '2020-09-03';
travisScottEvent.eventLink = "https://www.youtube.com/user/TravisScottXX";
travisScottEvent.eventOwner = "5eb6353671b8ba89688a0c60";

travisScottEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});


let gambinoEvent = new EventModel();

gambinoEvent.eventPhotoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkhxn9Jcb70ordx9NeWHMeL1IyhXK_RstmJH41VqIPnE6nnHB4&usqp=CAU";
gambinoEvent.gifURL = "https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif";
gambinoEvent.name = "Childish Gambino Live from Phoenix";
gambinoEvent.eventDate = '2020-05-12';
gambinoEvent.eventLink = "https://www.youtube.com/user/childishgambinoch";
gambinoEvent.eventOwner = "5eb636ff673ba18b69fed296";

gambinoEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let karolGEvent = new EventModel();

karolGEvent.eventPhotoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCo1d42zQuU8y_vXiKUKKpVvtJLkCSJy6JNKH_M8EciesMRmyC&usqp=CAU";
karolGEvent.gifURL = "https://media.giphy.com/media/jowVzXRjphDbjoYmdm/giphy.gif";
karolGEvent.name = "Karol G IG LIVE";
karolGEvent.eventDate = '2020-08-03';
karolGEvent.eventLink = "https://www.instagram.com/karolg/?hl=en";
karolGEvent.eventOwner = "5eb638b1415fd38d4c2cd30b";

karolGEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});


let wizEvent = new EventModel();

wizEvent.eventPhotoURL = "https://pbs.twimg.com/media/EB8eNtUUcAEId_R.jpg";
wizEvent.gifURL = "https://media.giphy.com/media/3ohzgTwXAGO02W9nva/giphy.gif";
wizEvent.name = "Wiz Khalifa 420 Live on YouTube";
wizEvent.eventDate = '2020-07-03';
wizEvent.eventLink = "https://www.youtube.com/user/taylorgangent";
wizEvent.eventOwner = "5eb63afb1de0be8f480296aa";

wizEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});


let theWeekndEvent = new EventModel();

theWeekndEvent.eventPhotoURL = "https://www.residentadvisor.net/images/events/flyer/2016/12/us-1231-898758-front.jpg";
theWeekndEvent.gifURL = "https://media.giphy.com/media/UOQN52PwpYae4/giphy.gif";
theWeekndEvent.name = "It's The Weeknd on FB Live";
theWeekndEvent.eventDate = '2020-07-03';
theWeekndEvent.eventLink = "https://www.facebook.com/theweeknd/";
theWeekndEvent.eventOwner = "5eb63d1074b20991769c2dc8";

theWeekndEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let shakiraEvent = new EventModel();

shakiraEvent.eventPhotoURL = "https://www.shakira.com/uploaded/home_banner/2fd65d7761e58d29b1b8ad0107308bd3.jpg";
shakiraEvent.gifURL = "https://media.giphy.com/media/ifdPlsV4hk7AGGonhM/giphy.gif";
shakiraEvent.name = "Shakira Hips Dont Lie IG Live";
shakiraEvent.eventDate = '2020-10-24';
shakiraEvent.eventLink = "https://www.instagram.com/shakira/?hl=en";
shakiraEvent.eventOwner = "5eb63ede5fb91693283f06f7";

shakiraEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let malumaEvent = new EventModel();

malumaEvent.eventPhotoURL = "https://www.toyotacenter.com/assets/img/Maluma_1200X630-75190513f5.jpg";
malumaEvent.gifURL = "https://media.giphy.com/media/fQD7FQiE9pmBVtD2aI/giphy.gif";
malumaEvent.name = "Maluma in Your House! Live IG Show!";
malumaEvent.eventDate = '2020-06-03';
malumaEvent.eventLink = "https://www.instagram.com/maluma/?hl=en";
malumaEvent.eventOwner = "5eb64133bdaeb99506ca1140";

malumaEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});

let kygoEvent = new EventModel();

kygoEvent.eventPhotoURL = "https://venueeventartist.com/imateq/event/446/1103/365219/600SC0/428114.jpeg?x=2";
kygoEvent.gifURL = "https://media.giphy.com/media/3ohc0USuOMGY99HdMk/giphy.gif";
kygoEvent.name = "Tropical House King, Kygo YouTube Live";
kygoEvent.eventDate = '2020-08-03';
kygoEvent.eventLink = "https://www.youtube.com/user/KygoMusic";
kygoEvent.eventOwner = "5eb6434a418ea996ca41d614";

kygoEvent.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
    }
});
