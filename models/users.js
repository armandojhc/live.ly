const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


var userSchema = new Schema({

  email: { type: String, required: true },
  name: { type: String, default: "" },
  password: { type: String, required: true },
  role: { type: Number, default: 1 } ,//0 - Artist, 1 - Fan, 2 - Administrator
  avatarURL: { type: String }

});


userSchema.pre("save", function(next) {
    
    if (!this.isModified("password")) {
        return next();
    }

    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    
    next();

});

const User = mongoose.model("User", userSchema);


module.exports = User;