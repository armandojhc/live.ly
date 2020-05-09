const router = require("express").Router();
const mongoose = require("mongoose");
const Events = require("../../models/events.js");

//Test route to get all the events
router.get("/", (req, res) => {

    Events.find({})
    .populate('eventOwner')
    .exec((err, docs) => {
        if(err) {
            res.send(err);
        } else {
            res.json(docs)
        }
    });

    // Events.find({}, (err, docs) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(docs);
    //     }
    // })
    

});

module.exports = router;