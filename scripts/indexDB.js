const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrbs");

db.Herb.collection
  .createIndex({
    name: "text",
    otherNames: "text",
    medicallyValidUses: "text",
    generalDescription: "text",
    unsubstantiatedClaims: "text"
  })
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
