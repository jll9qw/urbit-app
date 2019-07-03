const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const herbSchema = new Schema({
  name: String,
  botanicalNames: String,
  otherNames: String,
  generalDescription: String,
  medicallyValidUses: String,
  unsubstantiatedClaims: String,
  dosingFormat: String
});

const Herb = mongoose.model("Herb", herbSchema);

module.exports = Herb;
