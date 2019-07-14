// {
// name: 'text',
// family: 'text',
// otherNames: 'text',
// unsubstantiatedClaims: 'text',
// recommendedIntake: 'text',
// sideEffects: 'text',
// botanicalNames: 'text',
// generalDescription: 'text',
// medicallyValidUses: 'text',
// dosingFormat: 'text',
// demonstratedUses: 'text',
// suggestedDosage: 'text',
// interactions: 'text'
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrbs");

// this is too large to index...
// db.Herb.createIndex({
//   name: "text",
//   family: "text",
//   otherNames: "text",
//   unsubstantiatedClaims: "text",
//   recommendedIntake: "text",
//   sideEffects: "text",
//   botanicalNames: "text",
//   generalDescription: "text",
//   medicallyValidUses: "text",
//   dosingFormat: "text",
//   demonstratedUses: "text"
//   suggestedDosage: "text",
//   interactions: "text"
// });

// this works...
// db.getCollection("herbs").createIndex({
//   name: "text",
//   otherNames: "text",
//   botanicalNames: "text",
//   medicallyValidUses: "text"
// });

// this works...
// db.getCollection("herbs").createIndex({
//   name: "text",
//   otherNames: "text",
//   botanicalNames: "text",
//   medicallyValidUses: "text",
//   generalDescription: "text"
// });

// this is too large...
// db.getCollection("herbs").createIndex({
//   name: "text",
//   otherNames: "text",
//   botanicalNames: "text",
//   medicallyValidUses: "text",
//   generalDescription: "text",
//   unsubstantiatedClaims: "text"
// });

// this works!...
db.getCollection("herbs").createIndex({
  name: "text",
  otherNames: "text",
  medicallyValidUses: "text",
  generalDescription: "text",
  unsubstantiatedClaims: "text"
});
