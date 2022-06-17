import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  avatar: String,
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
