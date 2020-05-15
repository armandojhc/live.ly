const router = require("express").Router();
const mongoose = require("mongoose");
const Events = require("../../models/events.js");
const jwt = require('jsonwebtoken');

const secret = "NOT_SECRET_SECRET";

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

});

router.post("/", (req, res, next) => {

    // console.log(req.body);
    // let token = req.headers.authorization.split(" ")[1];

    // jwt.verify(token, secret, (err, decoded) => {
        
    //     if (err) {
    //         return next(err);
    //     }
        let eventData = {
            ...req.body,
            eventOwner: "5ebddf0dac72bc467d6718f9" // decoded._id
        }
        
        let newEvent = new Events(eventData);

        newEvent.save((err, savedEvent) => {

            if(err) {
                res.status(500);
                return next(err);
            }

            res.json(savedEvent);
        });
    // })

})

router.get("/:eventId", (req, res, next) => {

    Events.findOne({"_id": req.params.eventId}, (err, event) => {

        if (err) {
            console.log("Error");
            res.send(err);
            return 
        }

        if (!event) {
            res.status(500);
            return next(new Error("Could not find an event with that id"));
        }

        res.json(event);
    });
    
})

router.delete("/:eventId", (req, res, next) => {

    Events.deleteOne({"_id": req.params.eventId}, (err, deletedEvent) => {

        if (err) {
            return next(err);
        }

        res.json(deletedEvent);
    });
    
})
/*
eventPhotoURL: { type: String, required: true },
  gifURL: { type: String, default: "" },
  name: { type: String, required: true },
  eventDate: { type: Date },
  eventLink: { type: String },
  eventOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
*/

module.exports = router;