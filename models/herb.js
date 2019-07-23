const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const herbSchema = new Schema({
  name: String,
  family: String,
  otherNames: String,
  unsubstantiatedClaims: String,
  recommendedIntake: String,
  sideEffects: String,
  botanicalNames: String,
  generalDescription: String,
  medicallyValidUses: String,
  dosingFormat: String,
  demonstratedUses: String,
  suggestedDosage: String,
  interactions: String,
	image: String
});

const Herb = mongoose.model("Herb", herbSchema);

module.exports = Herb;
