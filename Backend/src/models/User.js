import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },    // use username instead of name
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true } // use passwordHash instead of password
});

export default mongoose.model("User", userSchema);
