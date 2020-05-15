const router = require("express").Router();
const Users = require("../../models/users.js");

//Test route to get all the events
router.get("/", (req, res) => {

    Users.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
});

router.get("/:userid", (req, res) => {

    Users.find({"_id": req.params.userid}, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
})

router.delete("/:userid", (req, res) => {

    Users.deleteOne({"_id": req.params.userid}, (err, deletedUser) => {
        if (err) {
            res.send(err);
        } else {
            res.json(deletedUser);
        }
    })
})

// router.post("/user", (req, user) => {

//     Users.post({}, (err, user) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(user);
//         }
//     })
// });

module.exports = router;