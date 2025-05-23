const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v) => validator.isAlpha(v, "en-US", { ignore: " " }),
        message: "Firstname must contain only letters",
      },
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v) => validator.isAlpha(v, "en-US", { ignore: " " }),
        message: "Lastname must contain only letters",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (v) => validator.isAlphanumeric(v),
        message: "Username must be alphanumeric",
      },
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      trim: true,
    },
    seisoAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    seisoCoins: {
      type: Number,
      default: 0,
      min: 0,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
