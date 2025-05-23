const mongoose = require("mongoose");

const isSafeString = (v) => /^[a-zA-Z0-9-_]+$/.test(v);

const userSchema = new mongoose.Schema(
  {
    wasteId: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: isSafeString,
        message: "Invalid wasteId format.",
      },
    },
    weight: {
      type: String,
      required: true,
      validate: {
        validator: isSafeString,
        message: "Invalid weight format.",
      },
    },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Waste", userSchema);
