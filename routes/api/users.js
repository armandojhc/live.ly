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

router.get("/:userid", (req, user) => {

    Users.find({"_id": req.params.userid}, (user, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
})

router.post("/user", (req, user) => {

    Users.post({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
});

module.exports = router;