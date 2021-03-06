const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Herbs collection and inserts the Herbs below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/urbit");

const usersSeed = [
  {
    firstName: "Doctor",
    lastName: "Sebi",
    email: "dr_sebi@gmail.com",
    password: "drSebi"
  },
  {
    firstName: "Maurice",
    lastName: "Webb",
    email: "maurice.webb91@gmail.com",
    password: "mjwTest",
    image: 'https://s.cdpn.io/profiles/user/1215873/512.jpg?100000'
  },
  {
    firstName: "Jason",
    lastName: "Lloyd",
    email: "lloyd804@gmail.com",
    password: "jllTest"
  }
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
