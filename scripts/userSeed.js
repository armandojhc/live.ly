const mongoose = require("mongoose");
const UserModel = require("../models/events.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/lively",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//Remove all users

// UserModel.deleteMany({}, (err) => {
//     console.log(err);
//     console.log("Done");
//     
// })

let armando = new UserModel();

armando.name = "Armando Herrera Canelon";
armando.avatarURL = "https://avatars2.githubusercontent.com/u/56770124?s=400&u=690deb125107433852b9d01995fa0a800b767a45&v=4";
armando.email = "armando.herrera91@gmail.com";
armando.role = 2;
armando.password = "1234";

armando.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let post = new UserModel();

post.name = "Post Malone";
post.avatarURL = "https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png";
post.email = "postMalone@gmail.com";
post.role = 1;
post.password = "postMalone";

post.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let drake = new UserModel();

drake.name = "Drake";
drake.avatarURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHQ2cmOoLkZ2rPwEDs3F0sq-n-4ey_WljVZMuWwEBWpAWDr-78&usqp=CAU";
drake.email = "drake@gmail.com";
drake.role = 1;
drake.password = "drake123";

drake.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});


let jbalvin = new UserModel();

jbalvin.name = "JBalvin";
jbalvin.avatarURL = "https://fordhamram.com/wp-content/uploads/2020/03/Balvin-737x900.jpg";
jbalvin.email = "jbalvin@gmail.com";
jbalvin.role = 1;
jbalvin.password = "jbalvin123";

jbalvin.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let kanyeWest = new UserModel();

kanyeWest.name = "Kanye West";
kanyeWest.avatarURL = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d23885c34a5c400084abcf6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D2199%26cropX2%3D3017%26cropY1%3D1025%26cropY2%3D1842";
kanyeWest.email = "kwest@gmail.com";
kanyeWest.role = 1;
kanyeWest.password = "kanye123";

kanyeWest.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let travisScott = new UserModel();

travisScott.name = "Travis Scott";
travisScott.avatarURL = "https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg";
travisScott.email = "tscott@gmail.com";
travisScott.role = 1;
travisScott.password = "travis123";

travisScott.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let gambino = new UserModel();

gambino.name = "Childish Gambino";
gambino.avatarURL = "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Childish%2BGambino/Childish%2520Gambino_16_9_1588264647.jpg?itok=rLscgtlq";
gambino.email = "gambino@gmail.com";
gambino.role = 1;
gambino.password = "gambino123";

gambino.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let karolg = new UserModel();

karolg.name = "Karol G";
karolg.avatarURL = "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2019-05/sto_1045_-_bugged.jpg?h=4609cc70&itok=qJWK6kt7";
karolg.email = "karolg@gmail.com";
karolg.role = 1;
karolg.password = "karolg123";

karolg.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let wizKhalifa = new UserModel();

wizKhalifa.name = "Wiz Khalifa";
wizKhalifa.avatarURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbqVU0ZNChv8FSZaNLNccIYp9c_dMeGBVfMDN0yvXu5CvFz364&usqp=CAU";
wizKhalifa.email = "wizg@gmail.com";
wizKhalifa.role = 1;
wizKhalifa.password = "wizg123";

wizKhalifa.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let theWeeknd = new UserModel();

theWeeknd.name = "The Weeknd";
theWeeknd.avatarURL = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/20/11/the-weeknd.jpg?w968h681";
theWeeknd.email = "theweeknd@gmail.com";
theWeeknd.role = 1;
theWeeknd.password = "theweeknd1234";

theWeeknd.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let shakira = new UserModel();

shakira.name = "Shakira";
shakira.avatarURL = "https://i1.sndcdn.com/avatars-000754019632-3ewkg8-t500x500.jpg";
shakira.email = "shakira@gmail.com";
shakira.role = 1;
shakira.password = "shakira1234";

shakira.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let maluma = new UserModel();

maluma.name = "Maluma";
maluma.avatarURL = "https://ichef.bbci.co.uk/images/ic/960x540/p05gl3qz.jpg";
maluma.email = "maluma@gmail.com";
maluma.role = 1;
maluma.password = "maluma1234";

maluma.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});

let kygo= new UserModel();

kygo.name = "Kygo";
kygo.avatarURL = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5873fe5131358e698add1f92%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D744%26cropY1%3D85%26cropY2%3D829";
kygo.email = "kygo@gmail.com";
kygo.role = 1;
kygo.password = "kygo1234";

kygo.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("All good!");
            }
});