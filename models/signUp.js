const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signUpSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const SignUp = mongoose.model("signUp", signUpSchema);

module.exports = SignUp;
