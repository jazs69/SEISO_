const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    wasteId: { type: String, required: true, unique: true },
    weight: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Waste", userSchema);
