const router = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../../models/users.js");

//Test route to get all the events
router.get("/", (req, res) => {

    Users.find({}, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })
    

});

router.get("/:userid", (req, res) => {

    Users.find({"_id": req.params.userid}, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })
    

})

module.exports = router;