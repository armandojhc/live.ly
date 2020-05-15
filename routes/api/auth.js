const router = require("express").Router();
const User = require("../../models/users.js");
const jwt = require('jsonwebtoken');

const secret = "NOT_SECRET_SECRET";
//www.url.com/api/auth/signup
router.post("/signup", (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        if (user) {
            res.status(403);
            return next(new Error("That username already exists"));
        }

        let newUser = new User();
        newUser.regType = req.body.regType;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.avatar = req.body.avatar;
        newUser.name = req.body.name;
        newUser.facebook = req.body.facebook;
        newUser.instagram = req.body.instagram;
        newUser.twitter = req.body.twitter;

        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            const token = jwt.sign(savedUser.withoutPassword(), secret);
            return res.status(201).send({ token, user: savedUser.withoutPassword() });
        })

    })
});

router.post("/login", (req, res, next) => {

    User.findOne({ email: req.body.email }, (err, user) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        if (!user) {
            res.status(403);
            return next(new Error("Username or password are incorrect"));
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            if (!isMatch) {
                res.status(403);
                return next(new Error("Username or password are incorrect"));
            }

            const token = jwt.sign(user.withoutPassword(), secret);
            res.status(200).json({ token: token, user: user.withoutPassword() });
        })

    })
});

module.exports = router;