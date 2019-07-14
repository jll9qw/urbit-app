const mongoose = require("mongoose");
const db = require("../models");

// keys...
// {
//   name,
//   family,
//   otherNames,
//   unsubstantiatedClaims,
//   reccomendedIntake,
//   sideEffects,
//   botanicalNames,
//   generalDescription,
//   medicallyValidUses,
//   dosingFormat,
//   demonstratedUses,
//   suggestedDosage,
//   interactions;
// }

// This file empties the Herbs collection and inserts the Herbs below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrbs");

const herbSeed = [
  {
    name: "Glycine",
    otherNames: "aminoacetic acid",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Glycine may help with ischemia-reperfusion injury. Glycine may help treat schizophrenia. But different studies don't agree. Taking glycineby mouth may reduce symptoms of the condition in people who are resistant to othermedicines.",
    reccomendedIntake:
      "Amino acids (AAs) can be taken as single AAs or in AA combinations. They also comeas part of multi-vitamins, proteins  and food supplements. The forms include tablets, fluids, and powders. If you eat enough protein in your diet, you get all of the amino acids you need. There are no conditions that increase how much glycine you need.",
    sideEffects:
      "Using a single amino acid supplement may lead to negative nitrogen balance. This canlessen how well your metabolism works. It can also make your kidneys work harder.In children, taking single amino acid supplements may also cause growth problems.It may also cause seizures and developmental delays. Don't take high doses of single amino acids for long periods of time. Don't take high doses of single amino acids without talking with your healthcare provider. Women who are pregnant or breastfeeding shouldn’t take glycine supplements."
  },
  {
    name: "Chaste Tree",
    botanicalNames: "Vitex agnus-castus L.",
    family: "Verbenaceae",
    otherNames: "chasteberry, cloister pepper, hemp tree, monk's pepper, vitex",
    generalDescription:
      "Chaste tree is a shrub that bears violet flowers and berries. It is also called vitexagnus-castus. The medicinal parts are the dried fruit and leaves. The plant comesfrom the Mediterranean and western Asia. It can now be found in southeastern partsof North America. Chaste tree contains iridoids, flavonoids, progestins, and essential oils. This combinationmay help control menstrual cycles and ease menstrual pain. It may treat some endocrineproblems.",
    medicallyValidUses:
      "There are no proven medical uses for chaste tree. A few studies suggest that chaste tree helps premenstrual syndrome. But the studiesweren’t designed well, so the results aren’t reliable. There is some evidence that chasteberry may help with some types of infertility. Itmay help with breast pain. But more studies are needed to confirm this.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Chaste tree has been used to treat menstrual cycle problems and pain, premenstrualsyndrome, and menopause. Chaste tree berries may help stimulate progesterone. Thisis a female hormone that rises 2 weeks before menstruation. It may help normalizeestrogen and progesterone. Chaste tree is claimed to help treat painful breasts (mastodynia). In European herbalismand medicine, vitex extracts are used for uterine fibroid cysts. They help boost breastmilk supply in new mothers. The herb has a long history in balancing hormones. Itmay help lower the sex drive in people who wish to stay chaste.",
    dosingFormat:
      "Chaste tree comes in the form of tinctures, capsules, and liquid extracts. Followthe instructions on the package for the correct dose.",
    sideEffects:
      "Chaste tree has no serious side effects. Mild side effects can include nausea, stomachissues, diarrhea, and itchy rash. Women who are pregnant or breastfeeding should not use chaste tree. It isn’t knownif chaste tree is safe for children. This supplement should not be taken by people with hormone-sensitive cancer. Don't use chaste tree if you take any medicines, herbs, or other supplements. Checkwith your healthcare provider or pharmacist first."
  },
  {
    name: "Cat's Claw",
    botanicalNames: "Uncaria tomentosa, Uncaria guianensis",
    family: "Rubiaceae",
    otherNames: "una de gato",
    generalDescription:
      "Cat's claw is a climbing vine. It grows in many countries in Central and South America, especially in the Amazon. There are 2 species, Uncaria tomentosa and Uncaria guianensis, that have been used to treat some health issues. These include arthritis  digestiveproblems, and viral infections. The active ingredients are extracted from the bark and root of the vine. Both typesof Uncaria are currently being studied. There have been claims that it may help withosteoarthritis, rheumatoid arthritis and Alzheimer disease. But further research isneeded before experts can draw any conclusions. Cat’s claw is taken as a bark decoction. You take it by boiling a specific amountof the herb in water. It has different alkaloids that cause its effects. These includerhynchophylline and isorhynchophyllin.",
    medicallyValidUses: "There are no proven uses for cat's claw.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Cat's claw has been used for treating digestive issues. Pentacyclic oxindole alkaloidsfound in cat's claw are claimed to modulate the immune system. They do this by increasingthe activity of white blood cells. They also increase the levels of Interleukin-1. Some claims suggest that cat's claw treats some viral infections. Cat's claw is alsosaid to have antioxidant  anti-mutagenic (preventing mutation), and anti-inflammatoryeffects. Other claims suggest that cat's claw may help treat AIDS and cancer. It mayalso help treat ulcers.",
    dosingFormat:
      "Cat's claw comes in oral tablets, tea and capsules. Follow instructions on the packagefor the correct dose.",
    sideEffects:
      "When taken by mouth, cat's claw may cause headaches, dizziness  and vomiting. Studies show that cat's claw isn’t toxic at standard dosing levels. At higher doses, it may be toxic. Women who are pregnant or breastfeeding should not use cat's claw. There are no known significant food or medicine interactions. Because cat's claw maystimulate the immune system, people with certain conditions shouldn’t use it. Theseinclude people with an overactive immune system. Cat's claw may also affect bloodpressure during or after surgery."
  },
  {
    name: "Cascara Sagrada",
    botanicalNames: "Rhamnus purshiana.",
    family: "Rhamnaceae",
    otherNames: "bitter bark, sacred bark",
    generalDescription:
      "Cascara sagrada was first used by Native Americans. It means “sacred bark”. It’s madefrom the bark of a tree found in the northwestern U.S. The bark contains anthraquinone glycosides. This acts as a cathartic or laxative.Cascara may help relieve constipation. But in 2002, the FDA marked laxatives thatcontain cascara sagrada as category II agents. This means they are not generally recognizedas safe and effective for over-the-counter use. Manufacturers had not done the studiesto show the safety of cascara sagrada.",
    medicallyValidUses:
      "Cascara is used to treat constipation. The usual dose is 300 mg 1 time a day. Takingcascara at a higher dose or for longer than 6 days is not advised. When taken by mouth, it has these effects:",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Cascara may help treat parasitic infestations.",
    dosingFormat:
      "Cascara sagrada comes as oral tablets, capsules, and syrup. Follow the instructionson the package for the correct dose. Cascara is also prepared as a tea or aromaticfluid extract. The aromatic fluid extract dosage is 1 ml.",
    sideEffects:
      "Side effects include stomach cramping and diarrhea. As with any laxative, you should not it use when you have stomach pain  nausea, orvomiting. Do not use cascara if you have chronic intestinal problems. These includeCrohn's disease, ulcerative colitis, sprue, or irritable bowel syndrome. Women who are pregnant or breastfeeding should not use cascara sagrada. Don't take a higher than recommended dose. There are reports of liver toxicity whentaken long term in higher than recommended doses or for more than 6 days in a row. The bark is considered safe only after it’s been aged for 1 year."
  },
  {
    name: "Ginger",
    botanicalNames: "Zingiber officiale Roscoe.",
    family: "Zingiberaceae",
    otherNames: "ginger root, zingiberis rhizoma",
    generalDescription:
      "Ginger is a perennial plant. It has grass-like leaves. The spice ginger is made fromthe root of the ginger plant. It’s been used for more than 2, 500 years. The root containsessential oils and resins. These give ginger its odor and spicy flavor. They’re alsoresponsible for its medicinal uses. Ginger has active ingredients called gingerols. This is the medicinal part of theplant. Gingerols are cardiotonic in animals. In humans, ginger helps treat nauseaduring pregnancy.",
    medicallyValidUses:
      "Ginger is used mainly to treat nausea, upset stomach, and other stomach issues. Gingerreduces nausea through a direct effect on the stomach rather than on the central nervoussystem. There are conflicting reports about whether ginger increases the speed of stomachemptying. A large study showed it had no effect. But it increases movement of therest of the gastrointestinal system. Ginger has been used to treat nausea due to mild gastrointestinal infections and pregnancy.It also treats nausea due to vertigo  nausea after surgery, and vomiting from chemotherapy.Studies show mixed results for these effects. But research shows that ginger is safeand effective for pregnancy-related nausea, such as morning sickness. These effectsare due to the gingerols. Ginger also contains gomgerol and shogaol. They both aid in pain relief and decreaseinflammation.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Ginger may work as an anti-inflammatory substance. It may help treat arthritis andarthralgia. It may also decrease pain in arthritis. Ginger is thought to get in the way of how prostaglandins and leukotrienes are made.These are natural chemicals that cause inflammation. Gingerols are being studied as an anti-cancer substance. Gingerols may interfere withtumorigenesis. This is the generation of tumors.",
    dosingFormat:
      "Ginger is available in the form of oral tablets, crystals, and powder. It’s also madeinto dried or fresh root tea.",
    sideEffects:
      "In normal doses, ginger may cause heartburn and bloating. Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any herbal medicines. There are no major food or medicine interactions linked with ginger. But some expertsthink it may change the effects of blood thinners (anticoagulants). Talk with yourhealthcare provider before taking ginger if you take blood thinner medicine."
  },
  {
    name: "Hawthorn",
    botanicalNames: "Crataegus oxyacantha",
    otherNames:
      "English hawthorn, haw, May, Mayblossom, Maybush, Mayflower  whitethorn",
    generalDescription:
      "The hawthorn is a woody shrub or small tree in the rose family. It has thorns andbrightly colored fruit. Hawthorn contains flavonoids. These may interact with key enzymes to enhance the heartmuscles ability to contract. They may also increase blood and oxygen supply to theheart muscles. Hawthorn may help treat angina pectoris and ischemia. It may also treathardening of the arteries (atherosclerosis).",
    medicallyValidUses:
      "Hawthorn became a popular herbal remedy in Europe and North America toward the endof the 19th century. Findings from test-tube  animal, and a few human studies show thathawthorn may be safe and effective for mild heart failure. But there is contradictoryinformation about the effects of hawthorn extract in people heart failure. More studiesare needed. People with heart failure shouldn’t take hawthorn.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Hawthorn may act as a calmative. This affects the nervous system and nerve function.It may cause a mild sedative effect. It may also act as a circulatory stimulant. Thismeans it improves circulation. It’s also claimed to reduce the risk for atherosclerosis. It may also slow down thecentral nervous system. Hawthorn may also relieve chronic insomnia. It may also helpcirculation in swollen legs and feet.",
    dosingFormat:
      "Hawthorn comes as oral capsules, dried leaves or flowers  infusion , liquid extract, or tincture.",
    sideEffects:
      "Hawthorn is tolerated well by most people at normal doses. But it’s a powerful herb. It can cause sedation and very low blood pressure at high doses. For this reason, you should only take hawthorn under the care of a healthcare provider. Children and women who are pregnant or breastfeeding shouldn’t use hawthorn. Note that hawthorn won’t stop an angina attack. You shouldn’t take hawthorn with other heart medicines. These include digitalis. Don’ttake sedatives or sleeping medicines while taking hawthorn. You also shouldn’t takehawthorn if you’re taking phosphodiesterase-5 inhibitors. These include sildenafil, tadalafil  and vardenafil."
  },
  {
    name: "Elderberry",
    botanicalNames: "Sambucus canadensis, S. nigra, S. racemosa, S. ebulus",
    family: "Caprifoliaceae",
    otherNames:
      "black elder, European elder, elder flower, sambucas (this information is for the EuropeanElder, not the American Elder  Elderflower, or Dwarf Elder)",
    generalDescription:
      "The juice from the berries of the European elder tree is used to treat many issues. Elderberry has natural antioxidants and vitamin C. It also has phenolic compounds, such as flavonoids. These are believed to be antiviral. They may also help treat thecommon cold.",
    medicallyValidUses:
      "At this time, there are no proven medical uses for elderberry.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. A few small studies show that elderberry may slightly improve flu symptoms. But theevidence wasn’t strong. More studies are needed to know if there’s a benefit. Elder flower water is also used in lotions. It’s a mild astringent. Elderberry is said to help treat: When you apply it to your skin, it may reduce inflammation  bruising, and sprains.",
    dosingFormat:
      "Elderberry can be made into a broth or soup. You can do this by mixing 2 ounces ofelderberry syrup into hot water. It can also be given as a tea, extracts, juice, wineor capsules.",
    sideEffects:
      "Leaves, stems, raw and unripe berries, and other plant parts of the elder tree containa toxic substance. If elderberry is not properly prepared, it may cause nausea, vomiting, and severe diarrhea. You shouldn’t take more than the advised dosage. Women who are pregnant or breastfeeding should not use elderberry. Elderberry may act as a diuretic. If you take medicines that increase urination, talkto your healthcare provider before using elderberry. There are no known food or medicine interactions linked with elderberry."
  },
  {
    name: "Cayenne",
    botanicalNames: "Capsicum annuum, C. frutescens.",
    family: "Solanacea ",
    otherNames:
      "Capsaicin, capsacum, African chili, chili, hot pepper  Louisiana long pepper or sportpepper, paprika, red chili, spur pepper, tabasco pepper",
    generalDescription:
      'Cayenne is a hot chili pepper extract. It’s commonly used in cooking. Bell pepperand paprika are the mild forms of this pepper. When you apply it to your skin (topically), cayenne works to relieve pain. It containscapsaicin. This is used in ointment form for pain relief. Ointments made from cayennestop muscle and joint pain by"confusing" pain transmitters. They also block painmessages from the skin. When taken by mouth, cayenne may also aid in digestion and improve circulation. Itmay also reduce cholesterol and blood fat levels and decrease obesity. ',
    medicallyValidUses: "Cayenne is commonly used in these ways:",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Cayenne pepper may help the circulatory system. It may help control blood flow, andease symptoms of Raynaud's disease helping blood flow. It may also strengthen theheart, arteries  capillaries, and nerves. It may act as a tonic. This may help your digestive system work better. It may alsostop bleeding from ulcers and help flatulent dyspepsia. It is also claimed to decreaseobesity. In the respiratory system, cayenne may help break up congestion due to bronchitis.Cayenne may also help to prevent infections. These include colds and chills, sinusinfections, and sore throats. As a gargle, cayenne can be used for laryngitis. Itworks well with myrrh. When you apply it externally, it may help with toothache, lumbago, arthritis, andrheumatism.",
    dosingFormat:
      "Cayenne is available in many forms. It comes as an ointment, oil or entire plant, in dried fruits, and crushed or powdered. It’s best to keep it in a sealed, light-resistantcontainer. The fruit is the part of the plant that’s used. It should be harvested when fullyripe, removed from the calyx, and then dried in the shade. For external use, follow the instructions on the package as dosage and frequency mayvary based on age and reason for use.",
    sideEffects:
      "Excessive consumption of pepper that has capsaicin in it can cause problems. Theseinclude acute gastritis and hemorrhagic gastritis. You should not let cayenne touchyour mucous membranes, especially your eyes. In rare cases, this can cause urticariaor skin irritation. Do not use cayenne if you have an active gastric or duodenal ulcer, diverticulitis, or irritable bowel syndrome. Do not apply cayenne to injured skin. People who are allergic to cayenne should notuse it. Women who are pregnant or breastfeeding should talk to their healthcare provider beforeusing any herbal medicines."
  },
  {
    name: "Alfalfa",
    botanicalNames: "Medicago sativa.",
    family: "Fabaceae",
    otherNames: "hay, lucerne, purple medic",
    generalDescription:
      "Alfalfa is a perennial plant grown worldwide. It’s used as a feedstock for cattle.It looks like a clover. But it can grow to a height of 2 to 3 feet. It blooms in thesummer with purple or blue flowers. At harvest time, alfalfa is mowed, field dried, and baled. The baled hay can be fed directly to cattle. Or it can be ground to a coarsepowder first. It can also be enriched with grain or other supplements. Alfalfa seeds are sprouted and used as garnish for salads and other foods. Alfalfaleaves contain triterpenoid saponins (soyasapogenols). These can reduce cholesterolabsorption and vascular plaque formation in animals. But they can also cause hemolyticanemia. The leaves are safer to use than the seeds. This is because alfalfa seedscontain the toxic amino acid L-canavanine (arginine analog).",
    medicallyValidUses:
      "Alfalfa has a long history as a medicinal herb. But there is no scientific evidencesupporting its use. But studies show that L-canavanine, a non-protein amino acid in alfalfa (in the seedsand sprouts), may cause lupus or make existing lupus worse. Lupus is an autoimmunedisease that affects connective tissue. This type of tissue is in every organ of yourbody.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. There are claims that alfalfa may help allergies  thyroid problems, blood and livertoxicity, asthma, and how the pituitary works. It’s also said to reduce the risk ofheart attacks. It may also help with an inflamed prostate, rheumatoid arthritis  stomachproblems, and diabetes. There are reports that alfalfa works as a diuretic.",
    dosingFormat: "Follow packaging instructions for the correct dose",
    sideEffects:
      "Alfalfa is considered safe when taken by healthy people. Alfalfa seems to increasecertain immune system functions. In some cases  alfalfa sprouts have been contaminated with Salmonella and E. coli.This has caused outbreaks of diarrhea and hemolytic uremic syndrome (HUS). This isa disease associated with E. coli. There have been improvements in how alfalfa isprocessed, which has lowered these risks. To reduce your risk, you should eat alfalfasprouts right after you buy them. Don’t store them for a long time. Women who are pregnant or breastfeeding should talk to their healthcare provider beforetaking any herbal medicines. Alfalfa may reduce how well birth control pills work. If you take alfalfa and usebirth control pills that contain estrogen, use an additional form of birth control. Alfalfa contains high amounts of vitamin K. This can reduce the blood thinning (anticoagulant) actionof the medicine warfarin. If you’re taking this medicine  ask your healthcare providerhow much alfalfa you can eat."
  },
  {
    name: "Garlic",
    botanicalNames: "Allium sativum.",
    family: "Liliaceae",
    generalDescription:
      "Garlic consists of fresh or dried bulbs of the botanical plant Allium sativum. It’scultivated worldwide. The bulb or clove is the part of the plant that’s used mostoften. But sometimes garlic oil is used. Garlic is best stored hung in a dry place. Garlic contains alliin. When this is ground, it makes the strong-smelling  potentantibacterial agent allicin. Garlic may have antibacterial effects. It’s also saidto protect against atherosclerosis and stroke. This is because it keeps plateletsfrom sticking together. It may also lower high blood pressure and cholesterol.",
    medicallyValidUses:
      "Garlic decreases the ability of blood platelets to form clots. Some animal studies suggest that garlic may improve insulin release in people withdiabetes. But there is no evidence to support this effect in humans. Other studies show that garlic may improve the elasticity of the aorta. It may alsokeep atherosclerotic plaque from forming. There is some evidence that says garlic can slightly lower cholesterol levels. Butrecent research done by the National Center for Complementary and Integrative Health foundthat garlic had no effect on cholesterol. Some research shows that taking garlic by mouth can modestly reduce blood pressure.This effect was seen in people with high blood pressure. It was also seen in peoplewith normal blood pressure. The evidence that it reduces high blood pressure is notstrong.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Some reports suggest that garlic may help prevent or treat cancer Garlic contains allicin. This is a strong antibiotic. It’s released when cloves arecrushed or chewed. Garlic has been used as an antiseptic, antibacterial, and antifungalagent. It may help the body resist or destroy viruses and other microorganisms. Itdoes this by boosting the immune system. Garlic is also claimed to fight infections. It may also build up strength. Garlicmay also have laxative effects. Garlic may also help treat these issues:",
    dosingFormat:
      "Garlic is available fresh or dried in oral capsule form. The enteric-coated capsulesare easiest for the body to absorb. It also comes as an extract and as odorless supplements.The quality of commercial forms of garlic varies a lot. Use garlic exactly as directed on the label.",
    sideEffects:
      "Garlic has a strong taste and odor. Raw garlic can cause stomach upset in some people.Odorless garlic supplements get rid of the strong taste and odor. They may also reducestomach upset. Some people are allergic to garlic. When taken in large amounts, garlic may causeside effects. These include causing stomach ulcers and anemia. Garlic can interact with certain medicines. Using supplements of garlic that containallicin for a long time may decrease how well saquinavir (a medicine used to treatHIV) works. If you’re taking this medicine, talk with your healthcare provider beforeusing garlic. Be careful when taking blood thinner medicines  because garlic may increasethe risk of bleeding."
  },
  {
    name: "Green Tea Extract",
    botanicalNames: "Camellia sinensis.",
    family: "Theaceae",
    otherNames:
      "green tea, Chinese tea, green sencha tea, Japanese tea, Yame te ",
    generalDescription:
      "Green tea comes from the plant Camellia sinensis. Black tea  green tea, and oolongtea are all made from the same plant but are prepared using different processing methods. Green tea extract contains polyphenols. These include the most active type  epigallocatechingallate. Green tea and oolong tea have the highest levels of polyphenols. This meansthey have the most health benefits. The fermentation and processing to make blacktea decreases the polyphenols. It does this by converting them to theaflavins andthearubigins. All of the teas have catechins and tannins in different amounts. Other significant parts of tea include caffeine, theobromine, and theophylline. Thepolyphenols of green tea are strong antioxidants. Tea is the second most popular drink in the world. People drink it for its flavorand stimulant effect.",
    demonstratedUses:
      "Studies suggest that the polyphenols in tea, especially green tea  may help reducethe risk of some cancers. Or it may slow the growth of certain types of cancers. Studiesdone in humans have shown mixed results. Tea is used as a stimulant drink. The methylxanthines, specifically caffeine, increasealertness. It’s also a mild stimulant. Green tea extract ointment has been shown to cure external genital and perianal warts.This product is approved by the U.S. Food and Drug Administration (FDA). It’s availableby prescription.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Green tea may be a mild diuretic. It may help lower cholesterol.",
    suggestedDosage:
      "Green tea extract comes in oral capsules. It’s available in different strengths. Followthe instructions on the package for the correct dose. Green tea as loose, dried leaves or in tea bags should be steeped in hot water fora short time. Make sure the water isn’t scalding. This is done to preserve importantchemicals in the leaf.",
    sideEffects:
      "Green tea can cause side effects due to caffeine. These can include anxiety, tremors, irritability, and sleeping problems. This is more likely if you’re sensitive to caffeineor take large doses. Side effects are less common with green tea than with other drinksthat have caffeine. This is because the leaves are steeped for a shorter time. The fluoride content of green tea may help prevent tooth decay. But the tea also containstannic acid. This can stain teeth. Green tea extracts may cause liver problems. Symptoms can include yellowing of yourskin or the whites of your eyes  nausea, and stomach pain. If you have these symptoms, stop using green tea and see your healthcare provider right away.",
    interactions:
      "Green tea may change the effects of medicines such as nadolol, a beta-blocker usedfor high blood pressure and heart problems. It may keep nadolol from lowering yourblood pressure as much as it should. Green tea contains small amounts of vitamin K.This means it may decrease how well blood thinner medicines work. Since green teaacts as a mild stimulant, you shouldn’t use it with other stimulants. It may changethe effects of other medicines. Talk with your healthcare provider about the use of green tea. Women who are pregnantor breastfeeding should talk to their healthcare providers before taking any herbalmedicines."
  },
  {
    name: "Echinacea",
    botanicalNames: "Echinacea purpurea, E. angustifolia, E. pallida",
    family: "Asteraceae",
    otherNames: "black sampson, purple coneflower, rudbeckia, sampson root",
    generalDescription:
      "Echinacea is a flowering plant. It comes from North America. It’s also known as purpleconeflower. The plant is harvested at flowering time. The roots and above ground partsof the plant are used. Echinacea refers to a mix of 2 plants that have pharmacological effects. They includeE. angustifolia and E. purpurea. A broad spectrum of chemical compounds in the plantsstimulates the immune system. These compounds include caffeic acid glycoside and chicoricacid. It also has anti-inflammatory effects.",
    medicallyValidUses:
      "There are no quality studies that support the use of echinacea for upper respiratoryinfections. Many studies have shown that it doesn’t help prevent or treat a cold.Other studies have only shown a small benefit. For instance, it may decrease how longcold symptoms last by a half day. Some studies have shown that taking it by mouth with a topical antifungal cream helpsprevent recurrent vaginal yeast infections. This combination may lower the recurrencerate to 16.7%. This is compared with 60.5% with an antifungal cream alone.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Native Americans used the leaves and roots of the plant to treat many issues. Theseinclude toothaches, snakebites, insect bites, and other skin wounds. Many people say it prevents and treats upper-respiratory infections. It’s also saidto aid in wound healing. Echinacea has also been used as an anti-inflammatory and anti-microbial agent. Thismeans it helps the body destroy or resist germs that cause illness. It’s also to beuseful for treating fever  colic, coughs, and bronchitis. It may also treat urinarytract infections, sore throats, and the flu.",
    dosingFormat:
      "Echinacea comes in many forms. These include fresh, freeze-dried  dried, alcohol-basedextract, liquid, tincture, tea, capsules  and salve.",
    sideEffects:
      "Echinacea can cause side effects. These include fever, nausea  and vomiting. Echinacea isn’t safe for everyone. Some people shouldn’t use it. This includes peoplewho: There are no known food or medicine interactions linked with echinacea."
  },
  {
    name: "Grape Seed Extract",
    botanicalNames: "Vitis vinifera",
    otherNames: "oligomeric proanthocyanidins, OPC, pycnogenol",
    generalDescription:
      "The grape has a long history of medicinal uses. Since ancient Greece, people haveused grapes for medicinal purposes. More recently, sap from grape branches has beenused to treat skin issues and scrapes. Modern medicine has found benefits in grape seeds and red wines. Research suggeststhat wine has protective ingredients. These include resveratrol and certain tannins.Proanthocyanidin, a compound found in the seed of grapes  may also be protective likered wine. Grape seed extract is made from the crushed seeds of grape plants. It contains proanthocyanidin.This is a phenolic chemical belonging in the larger group of plant phytochemicals.They are called flavonoids. It belongs to a subgroup of tannins. Proanthocyanidinmay protect the blood vessels and cardiovascular system. It does this by stoppingthe breakdown of collagen. This reduces the risk of a heart attack and stroke. Itmay also have an antioxidant effect. This may lower the risk of certain cancers. Grape seed extract is used to treat heart issues. These include atherosclerosis.",
    medicallyValidUses:
      "At this time, there aren’t any proven uses for grape seed extract.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. The tannins in grape seed extract are active antioxidants and antimutagenics. Becauseof this, grape seed extract may protect the lining of blood vessels and other tissuesfrom damage. Grape seed extract may protect from damage from free radicals  oxidizedLDLs, and other harmful parts of metabolism. Grape seed extract is said to reduce the production of histamine. This may reducethe severity of nasal allergies. It may also reduce the premature destruction of vitaminC. Grape seed extract may also act as a smooth muscle relaxant in blood vessels. Studies have found that grape seed extract may help symptoms of chronic venous insufficiency.This is when veins have problems sending blood from the legs back to the heart. Grapeseed extract may also reduce leg swelling (edema).",
    dosingFormat:
      "Grape seed extract comes in oral capsule form. Follow the instructions on the packagefor the right dose. Grape seed oil is also an aromatic oil. It’s used for salad dressings. It containslittle proanthocyanidin.",
    sideEffects:
      "Grape seed extract doesn’t cause any side effects. There are also no known food ormedicine interactions with it. Children and women who are pregnant are breastfeeding shouldn’t use grape seed extract.This is due to the lack of safety data on it."
  },
  {
    name: "Dong Quai",
    botanicalNames: "Angelica archangelica.",
    family: "Umbelliferae",
    otherNames: "angelica, Chinese angelica, Japanese angelica",
    generalDescription:
      "Dong quai is a fragrant perennial or biennial plant. It has greenish-white flowers.It is grown in Asia for medicinal purposes. In the U.S., it’s mostly used as a foodflavoring. The roots and leaves are the parts of the plant that are used for medicalreasons. Dong quai contains coumarins. These act as vasodilators and antispasmodic agents.One of these coumarins stimulates the central nervous system. It’s called osthol.Other parts of the root may have anti-inflammatory and analgesic actions. Dong quaican make some people more sensitive to the sun. This is called photosensitivity.",
    medicallyValidUses: "At this time, there are no proven uses for dong quai.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Dong quai is used to treat female reproductive problems. These include vaginal dryness, premenstrual syndrome, menopausal symptoms, and hot flashes. A double-blind  placebo-controlledstudy is shows that dong quai doesn’t have an estrogenic effect. This means that itlikely has little effect on post-menopausal symptoms. Aside from that, there aren’tmany scientific studies on dong quai.",
    dosingFormat:
      "Dong quai is available as oral tablets and capsules, tincture  extract, and essentialoil. Follow the instructions on the package for the correct dose.",
    sideEffects:
      "There is a slight chance of phototoxicity due to the furocoumarins in dong quai. Symptomscan include skin rash, irritation, and extreme sensitivity to the sun or sunburn.If you develop these symptoms, stop using dong quai. Dong quai has a stimulant effect on the gastrointestinal tract. Talk to your healthcareprovider before using it if you have a chronic intestinal disease. These can includediverticulitis or irritable bowel. Women who are pregnant or breastfeeding shouldn’t use dong quai. People who take the blood thinner warfarin shouldn’t use dong quai. Doing so may increasethe risk of bleeding. Don't use dong quai if you are being treated with radiationtherapy. Don't use dong quai if you have a hormone-sensitive cancer."
  },
  {
    name: "Saw Palmetto",
    botanicalNames: "Sabal, Sabal serrulata, Serenoa repens",
    commonNames: "Saw palmetto, shrub palmetto, dwarf palm",
    generalDescription:
      "The saw palmetto is a small palm tree native to the southeastern U.S.. It grows 4to 10 feet tall. This depends on the region. The medicinal part is the ripe, driedberry. It’s also called Sabal fructus. Both the berries and seeds of the saw palmettoplant are used. Saw palmetto may reduce the symptoms of an enlarged prostate. It’s often used to treatbenign prostatic hypertrophy (BPH).",
    medicallyValidUses:
      "There are many studies looking at the effects of saw palmetto on treating symptomsof BPH. But the results are inconsistent and contradictory. Current scientific studiesdon't support the use of saw palmetto for any health condition.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Saw palmetto is said to stimulate the appetite. It may also tone and strengthen themale reproductive system. It’s also claimed to reduce prostate inflammation. Thereare claims that saw palmetto extracts may enhance sexual desire and function  especiallyfor older adults.",
    dosingFormat:
      "Saw palmetto berry extracts come in tablet, extract, tea, and capsule forms.",
    sideEffects:
      "Talk to your healthcare provider before starting herbal therapy. The saw palmetto berries and extract are considered safe. There are few side effects.In rare cases, they may cause mild headaches and stomach problems. Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any herbs. There are no known food or medicine interactions with saw palmetto."
  },
  {
    name: "Kava Kava",
    botanicalNames: "Piper methysticum, Piperis methystici rhizoma",
    family: "Piperaceae",
    otherNames:
      "ava, awa, gea gi, kava, kava-kava, kawa kawa, methysticum  yaqona",
    generalDescription:
      "The kava plant is native to the islands of the South Pacific. It is a member of thepepper family. It’s a tall, upright bush with large leaves. The rhizome in the undergroundroot and stem is the part of the plant that has the active ingredient. Kava contains 6 major kava lactones. These act on the nervous system to make you drowsy.They have a mild anti-anxiety effect. Kava is used most often as a sedative and amuscle relaxant. It’s used to ease stress and anxiety.",
    medicallyValidUses:
      "Some studies say that kava is a mild sedative. It helps to treat stress and anxiety.The active ingredients may work as muscle relaxers. But there is conflicting evidencewhen it comes to its effect on anxiety. Animal studies suggest that kava may act as a mild anticonvulsant and anti-spasmodic. The U.S. Food and Drug Administration (FDA) has issued a warning about kava. Thoughrare  the supplements have been linked to possible severe liver damage. As a result, the National Center for Complementary and Integrative Health has suspended furthertesting of kava kava.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Kava may relieve the pain from gonorrhea and other urinary tract issues. These includecystitis and urethritis. Kava is used as a diuretic. It’s used as a topical rubefacientand antimicrobial. Kava is used in sacred, formal ceremonies. It’s used to welcome visitors, resolvedisputes, and reinforce the social norms. In informal ceremonies, it’s used to developand reinforce social ties among peers. Kava is used to access the spiritual and higherself, including lucid dreaming.",
    dosingFormat: "Kava comes as tinctures, extracts, tablets, and capsules.",
    sideEffects:
      "In August 2002, Canada banned the sale of kava products. This is due to its risk ofliver problems. The FDA says that people who have liver disease or liver problemsshould talk to their healthcare providers before taking kava. Talk to your healthcareprovider if you take other medicines that affect the liver. Women who are pregnant or breastfeeding shouldn’t use kava. People with depressionor bipolar disorder shouldn’t use kava. It may make your depression worse. If you use machinery or do other activities that need you to be alert, don’t use kava.It may make you drowsy. It may keep you from being able to drive a car safely. Kava may increase the effects of central nervous system medicines. These include depressantssuch as alcohol, barbiturates, and benzodiazepines. Taking alprazolam and kava together has caused comas."
  },
  {
    name: "Black Cohosh",
    botanicalNames: "Cimicifuga racemosa.",
    family: "Ranunculaceae",
    otherNames:
      "black snake root, bugbane, bugwort, rattleroot, rattleweed  squaw root",
    generalDescription:
      "Black cohosh is a tall perennial herb. It was first found in the northeastern U.S.Native Americans boiled the root in water. Then they drank the brewed beverage. Theyused it to treat women's hormonal problems. They also used it to treat fatigue, snakebite ,and arthritis. The medicinal part is made up of the dried rhizome and roots. Black cohosh is cultivatedin Europe. Black cohosh contains alkaloids, tannins, and terpenoids. The medicinal part has beenused to control symptoms of menopause, especially hot flashes. It hasn’t been shownto help any estrogen-dependent cancers.",
    medicallyValidUses: "There are no proven medical uses for black cohosh.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Black cohosh is most often used to treat symptoms of menopause. These include hotflashes, sweating, and depressed mood. It’s also used to treat discomfort before yourmenstrual period. These symptoms include cramping and muscle tension. The plant has estrogen-like effects. It binds to estrogen receptors. A study publishedin the December 2006 Annals of Internal Medicine found that the root was no better than a placebo. Most studies haven’t looked at usingblack cohosh for longer than 6 months. So  there is no safety information on long-termuse.",
    dosingFormat:
      "Black cohosh comes in dried root, tablet, capsule and extract form. Follow the instructionson the package for the correct dos ",
    sideEffects:
      "Some reports link black cohosh with hepatitis and liver failure. You should stop usingthe supplement and call your healthcare provider if you have signs of liver issues.Symptoms can include stomach pain, yellowing of your skin or the white part of youreyes (jaundice), or dark-colored urine. Large doses of this herb may cause side effects. These can include dizziness, nausea, headaches  and stiffness. They can also include vision problems, slow pulse rate, and heavy sweating. Women who are pregnant or breastfeeding should not use black cohosh. Women who havehad hormone-sensitive breast cancer also should not use this herb."
  },
  {
    name: "Bilberry",
    botanicalNames: "Vaccinium myrtillus, Vaccinium uliginosum.",
    family: "Ericaceae",
    otherNames: "blueberry, bog whortleberry, northern bilberry",
    generalDescription:
      "Bilberries are a type of blueberry found in Europe and the Northern U.S. They’re closelyrelated to the U.S. blueberry. The berries and their juice are the most commonly usedpart of this berry. In the past, bilberry was used to help eye problems. These include retinopathy, cataracts, and glaucoma. Bomber pilots in WWII would eat bilberries before a flight. They believedthat the berries helped vision, especially night vision.",
    medicallyValidUses:
      "There are no proven health uses for bilberry. There is not enough evidence to supportthe use of the berry for any issue.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Bilberry fruit contains 1 of the richest sources of anthocyanosides (anthocyanidins).These may strengthen the capillary walls. This effect may protect blood vessels andreduce extra fluid in your body. These are also natural antioxidants. Bilberry may prevent or slow the progress of macular degeneration. This conditioncauses your central vision to get worse. Bilberry has been used to help night blindness. Bilberry may have a diuretic effect. It increases how much urine you make and howmuch leaves the body. It may be a urinary tract antiseptic and help with inflammation.Bilberry is also claimed to help control low blood sugar (hypoglycemia). It does thisby improving your insulin level. It may ease stress and anxiety, and heal gastrointestinal ulcers. Bilberry may lowerblood lipids and strengthen connective tissue. Some claims suggest that bilberry mayslow the progression of cataracts.",
    dosingFormat:
      "Bilberry extracts come in oral tablets, capsules, drops, powder and teas. Follow theinstructions on the package for the correct dose. Fresh berries or juice are safe to consume in normal amounts.",
    sideEffects:
      "Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any herbal medicines. There are no major food or medicine interactions with bilberry."
  },
  {
    name: "Feverfew",
    botanicalNames: "Chrysanthemum parthenium, Tanacetum parthenium",
    family: "Asteraceae",
    otherNames: "altamisa, bachelor's buttons, featherfew, featherfoi ",
    generalDescription:
      "Feverfew is related to the daisy. It grows throughout the U.S. and Europe. It’s beenused as a pain reliever for centuries. Its feathery, aromatic leaves are used to prevent migraine headaches. Experts saythat parthenolide and other ingredients in feverfew get in the way of serotonin andprostaglandin. These are natural substances that dilate the blood vessels. They maybe responsible for triggering migraines. Feverfew is likely to work for migraines if taken daily for at least several months.It’s important to note that it prevents migraines. It doesn’t treat them. This meansthat it won’t help if you take it when you have a migraine. Feverfew's main active part is the sesquiterpene lactone, parthenolide. It works toreduce the chance of migraines through physiological pathways.",
    medicallyValidUses:
      "Studies suggest that feverfew decreases the severity and frequency of migraines. However, results are mixed. More research is needed to know if this is true.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Feverfew may ease nausea and vomiting due to migraines. It may take a month or longerfor it to work. Feverfew may reduce painful inflammation due to arthritis. Feverfew may help bring on uterine contractions to reduce the length of labor. Itmay aid in starting menstrual periods and treating menstrual pain. Feverfew may relieve colitis and soothe insect bites. It may boost appetite by actingas a digestive bitter. It tastes bitter and helps the digestive process to work better.",
    dosingFormat:
      "Feverfew is available in oral tablets, capsules, liquid extract and teas. Follow theinstructions on the package for correct dos ",
    sideEffects:
      "Fresh leaves may cause mouth ulcers (aphthous ulcers) in some people. People withallergies, especially to ragweed, may be sensitive to it. This is because it’s a memberof the same plant family. Women who are pregnant or breastfeeding should not use feverfew. People who stop taking feverfew after using it for a long time may have withdrawalside effects. These include headaches  trouble sleeping, anxiety, and stiff muscles. Do not take feverfew if:"
  },
  {
    name: "Ginkgo Biloba",
    botanicalNames: "Ginkgo biloba.",
    family: "Ginkgoaceae",
    otherNames: "maidenhair tree",
    generalDescription:
      "Ginkgo biloba is an herb. It’s extracted from the dried leaves and seeds of the tree.It’s been sold in the U.S. with claims of enhancing memory and mental sharpness.",
    medicallyValidUses:
      "At this time, there are no proven medical uses for ginkgo biloba.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Ginkgo biloba has been studied for a lot of uses. A large study, called the GinkgoEvaluation of Memory study, found that the ginkgo biloba product studied didn’t lowerthe risk of dementia. It didn’t reduce the risk of Alzheimer's disease or cognitivedecline. It did not lower the risk for high blood pressure. Another large study was done by the National Institute on Aging. It showed no improvementsin memory in 200 adults over the age of 60 who took ginkgo biloba for six weeks. Some small studies have shown that ginkgo biloba may be somewhat helpful in easingleg pain due to arterial disease in the legs. But other studies haven’t shown thisbenefit. Ginkgo biloba extract (GBE) has flavonoids. It also has the terpenes called ginkgolidesA, B, and C. GBE is used to treat cerebral insufficiency. This causes trouble withmemory  dizziness, tinnitus, anxiety, and headaches. GBE is used to treat dementia, blood flow problems, and bronchoconstriction. GBE may increase clotting time and lowerthe risk for stroke.",
    dosingFormat:
      "Ginkgo comes as tea, tablets, capsules, or extract. Follow the instructions on thelabel for dosing.",
    sideEffects:
      "In rare cases, ginkgo biloba may cause side effects. These include upset stomach, headaches, and allergic skin reactions. Ginkgo biloba seeds can cause neurologic issuesand allergic reactions. These can cause death. For this reason, the seeds aren’t usedfor medical reasons. Talk to your healthcare provider before taking ginkgo if you take any other medicines.It may change the effects of other medicines, especially blood thinners (anticoagulants). Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any herbal medicines."
  },
  {
    name: "Valerian",
    botanicalNames: "Valeriana officinalis, Centranthus ruber.",
    family: "Valerianacea ",
    otherNames:
      "all-heal, amantilla, carpon's tail, heliotrope, setewale  setwall, vandal root",
    generalDescription:
      "Valerian is a perennial plant. It has pink flowers. It grows in North America andEurope. The medicinal part is made from the fresh underground roots that have a strongsmell. Valerian root has 2 types of compounds. The both have sedative effects. These compoundsinclude sesquiterpenes (valerenic acid) and iridoids triesters (valepotriates). Valerianmay have a sedative effect. It may have a stimulant effect for extreme fatigue. Valerianroot may lower blood pressure and relax muscles. But this has not been proven.",
    medicallyValidUses:
      "Valerian root has no proven positive effect on any health condition. Some studies suggest that valerian may help treat insomnia. But other studies haven’tconfirmed this. There isn’t enough evidence to know if valerian is effective for anyother health issues.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Valerian may act as a sedative. This calms the nervous system and reduces stress andnervousness. It may be used as a hypnotic. This induces a deep state of sleep. Itmay act as an anti-spasmodic. This means it reduces muscle spasms or cramps in themuscles. It may be used as a hypotensive agent. This lowers blood pressure. It’s usedas a carminative. This is an herbal remedy. It has a lot of volatile oils. It stimulatesthe digestive system to work well. Valerian may be used to reduce tension  anxiety, stress, over-excitability, and hystericalfeelings. It’s used to treat insomnia, menstrual pain, intestinal colic  rheumaticpain, and migraine pain.",
    dosingFormat:
      "Valerian comes in the form of tea, tinctures, capsules, and liquid extracts. It issensitive to light. You should store it in a light-resistant container. Keep it ina dark area.",
    sideEffects:
      "Valerian has a very strong smell that many people don’t like. Cats are attracted tovalerian because it has a compound similar to catnip. Don’t use valerian to treat babies or children younger than 3. Women who are pregnantor breastfeeding should talk to their healthcare providers before taking any herbalmedicines. You shouldn’t use valerian with other sedatives."
  },
  {
    name: "Cranberry",
    botanicalNames: "Vaccinium macrocarpon.",
    family: "Ericaceae",
    otherNames: "bearberry, craneberry",
    generalDescription:
      "The cranberry is an evergreen plant. It’s native to the northeastern U.S. The redberries on the plant are used in foods  beverages, and herbal products. It’s beenused to prevent and treat urinary tract infections (UTIs). Cranberry has fallen inand out of favor in medicine. Today, it’s recognized as an effective way to help preventUTIs, especially in older women. Cranberries are considered a foodstuff. They’re used in commercial quantities forcooking. They are used as a garnish for salad. They’re also used in gelatin salad, cranberry sauce and jelly, and cranberry cocktail. Cranberry cocktail is the mostoften used cranberry source to prevent UTIs. Strong cranberry extracts are also available.They can be taken as pills by people who do not like cranberry juice. Cranberry contains many elements. These include anthocyanin  catechin, triterpenoids, and quinic acid. These have been shown to decrease how much bacteria stick to thebladder walls. This reduces the risk of UTIs.",
    medicallyValidUses:
      "There is some support that cranberry can help prevent UTIs. Note that this isn’t definitive.More research is needed. Cranberry juice keeps bacteria from clinging to the bladder walls. It also increasesthe acidity of the urine. Cranberry is most useful as a preventive measure ratherthan a cure for an existing UTI. However  taking cranberry with standard treatmentfor a UTI can help you get better more quickly. Elements in cranberries have these features:",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Cranberry juice may help cure yeast infections. When consumed regularly, it’s saidto prevent recurrent yeast infections. The high levels of vitamin C in cranberry juice may aid in upper respiratory infections.It may reduce the frequency and severity of these infections. Cranberry may also helprelieve postnasal drip. Cranberry juice may also help prevent kidney stones. It does this by reducing theamount of calcium in your urine and decreasing the pH of the urine. High levels ofurinary calcium have been linked to kidney stones. So has high pH (alkaline) urine.",
    dosingFormat:
      "Cranberry comes in the form of berries, oral capsules (concentrated cranberry extracts), juice, and tea. For over-the-counter cranberry products, follow the dosing instructionson the package. Cranberry juice may be suggested in amounts from 6 to 10 ounces total per day. It’soften taken in divided doses between meals.",
    sideEffects:
      "People who take blood thinners or aspirin should talk to their healthcare providersbefore using cranberry products."
  },
  {
    name: "St. John's Wort",
    botanicalNames: "Hypericum Perforatum.",
    family: "Hypericaceae",
    otherNames:
      "amber, goatweed, hardhay, hyperici herba, klamath weed  tipton weed",
    generalDescription:
      "St. John's wort is an herb. It has a yellow flower with 5 petals. It grows in muchof the world. It’s named after St. John the Baptist. This is because it blooms aroundhis celebration day (June 24). The medicinal part of the plant is made up of the driedabove-ground parts. These include the stem, petals, and flowers. There are 2 chemicals that play a major role in how it works. These are hypericinand hyperforin. These and other related compounds are the main active parts. Theymay affect serotonin  dopamine, and norepinephrine. These are neurotransmitters inyour body.",
    medicallyValidUses:
      "St. John's wort is used to treat mild to moderate depression. But St. John's wortdoesn’t work to treat major or severe depression. You can apply oily hypericum forms directly to your skin. It can help treat injuries, muscle pain, and first-degree burns.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. St. John's wort may have these benefits: St. John's wort may be used for nerve pain (neuralgia), anxiety, and tension. It mayalso aid in weakness, stress, irritability, and sleeping issues (insomnia). It’s alsoclaimed to ease the pain due to some conditions. These include sciatica, rheumatoidarthritis, and menstruation. It may also ease the itching and burning of hemorrhoidsand vaginitis. When you apply it topically, St. John's wort may speed healing in certain conditions.These include bruises  wounds, varicose veins, mild burns, and sunburns.",
    dosingFormat:
      "St. John's wort comes in many forms. These include oil, dried herb , tea, and salve. It may take 4 to 6 weeks for St. John’s wort to work. If it doesn’t work after thisamount of time, you should consider other treatments.",
    sideEffects:
      "St. John's wort can change the effects of other medicines and can cause serious sideeffects. These medicines include, but are not limited to: St. John’s wort can keep your body from absorbing iron and other minerals. In large amounts, St. John's wort can make you more sensitive to the sun. This ismore a risk for people with fair skin. Stay out of the sun as much as you can. Whenyou must be in the sun, wear sunscreen. Don’t take large amounts of St. John's wort. Follow the directions on the package. You shouldn’t take St. John's wort if you have major depression. You also shouldn’ttake it if you’re taking a medicine to treat depression. Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any supplements."
  },
  {
    name: "Aloe",
    botanicalNames:
      "Aloe africana, Aloe barbadensis, Aloe ferox, Aloe perryi, Aloe spicata, Aloe vera.",
    family: "Liliaceae. There are over 200 known species of aloe.",
    otherNames:
      "Aloe vera, burn plant, lily of the desert, elephant's gall  laxative, aloin, barbaloin",
    generalDescription:
      'Aloe is a plant that likely came from Africa. More than 420 known species of aloeexist. The term"aloe vera" translates from Arabic and Hebrew to mean a"true shining, bitter substance." The succulent leaves are the part of the plant that’s most oftenused. The flower may also be used. Aloe vera has long been used in folk medicine. It’s known mostly for being able toaid in the healing process of cuts and burns. It’s also known to moisturize and softenthe skin. Aloe vera is also 1 of many anthelmintics. These are substances that destroyor get rid of worms from the digestive system. When swallowed, aloe acts as a laxative. When you scratch aloe leaves, they make abitter yellow liquid. It contains anthraquinone barbaloin. This is a strong laxativeagent. ',
    medicallyValidUses:
      "The effects of aloe include: When it’s applied to your skin  aloe: Note that aloe vera promotes healing best in the open air. When you apply it to minorcuts and burns, leave the treated area uncovered. Do not cover it with a bandage. Dried aloe latex taken from the leaf (98% to 99% pure) has laxative effects. It canbe taken internally to help treat constipation, hemorrhoids, rectal itching, colitis, and other colon problems. But the FDA required laxative makers to remove aloe fromtheir products in 2002. This is because there have not been enough studies done onit to confirm that it’s safe. Aloe juice is dried and used to make tincture of benzoin. This is a sticky materialused to make bandage material sticks to the skin. Also, acemannan (a complex mannosecarbohydrate) found in aloe is used to make denture adhesive.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. People claim that aloe soothes stomach irritation. It may also help to heal stomachproblems and ulcers and ease menstrual problems. It may also prevent immune suppressionin the skin due to ultraviolet light. Aloe vera is sometimes helpful in treating calluses and corns, varicose veins, infections, and arthritis. Aloe may also help treat skin cancer. Essence of the aloe vera flowermay also aid in relieving mental and emotional burnout. This may be useful for womenwho have hot flashes. When you swallow aloe vera gel for ulcers or menstrual problems, make sure you usea brand of gel that won’t have a laxative side effect. Aloe vera is available as a tablet, gel, or liquid for internal use. It comes as agel, lotion, ointment, or spray for topical use. You can apply the gel from a freshly broken leaf from an aloe plant to minor burns ,scrapes, lacerations, or sunburn for relief. You can use over-the-counter (OTC) formsof aloe for the same conditions. OTC products may be more convenient than keepingan aloe plant in your home. Take OTC oral forms of aloe exactly as directed on the packaging.",
    sideEffects:
      "A study done by the National Toxicology Program found negative effects of non-decolorizedwhole leaf extracts of aloe vera when it was added to drinking water. It caused cancerin female rats, but not in mice. Allergic reactions to aloe are rare. You can find out if you’re allergic to topicalaloe by applying a dab of it under your arm or behind your ear. If you develop a rashor stinging feeling, do not use it. You can develop an intolerance to aloe vera juice. So, you should not take aloe bymouth too often. Talk to your healthcare provider before using herbal medicines. People with diabetes who take medicines to lower their blood sugar should not useoral aloe vera. Doing so can lower your blood sugar too much. You should not swallow aloe when you have stomach pain  nausea, or vomiting. Thisis because it’s a laxative. Using it could make your symptoms worse. You also shouldn’tuse it if you have chronic intestinal problems. These can include Crohn's disease, ulcerative colitis, sprue, or irritable bowel syndrome. If you’re pregnant or breastfeeding, talk to your healthcare provider before usingaloe or any other herbs. There are no known significant food or medicine interactions with aloe."
  },
  {
    name: "Nettle",
    botanicalNames: "Urtica dioica L.",
    family: "Urticaceae",
    otherNames: "common nettle, greater nettle, stinging nettle",
    generalDescription:
      "Stinging nettle is a medicinal herb plant known for its stinging leaves. It has tinystinging hairs covering its surface. Contact with the plant produces a stinging, itchy, or burning rash on your skin. It also causes swelling and redness at the site of contact.This reaction is due to histamine from the plant that’s released when the hairs pierceyour skin. There are several species of stinging nettle. These include Urtica dioica, Urticaurens, and Urtica pilulifera. Nettle grows wild in temperate regions. It can reach2 to 3 feet in height. Nettle has a long reputation in folk medicine. It’s used totreat asthma. It’s also used as an expectorant, astringent, tonic, anti-spasmodic, and diuretic.",
    medicallyValidUses:
      "Nettle is used to treat benign prostatic hypertrophy (BPH). It’s used with other treatments.Nettle extract may help BPH by binding to sites on sex hormone binding globulin (SHBG).This lessens testosterone's effect on the prostate. But studies conflict on how wellit works. More research is needed.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Nettle extract may get in the way of inflammation. Inflammation is a major cause ofpain and joint damage due to arthritis. But there’s little evidence to support howwell this herb works for this condition. More research is needed. Nettle may help manage:",
    dosingFormat:
      "Nettle comes in the form of tablets, liquid, tincture and tea. The dose may vary dependingon conditions being treated. Follow directions on the package or talk with your healthcareprovider for dosing information.",
    sideEffects:
      "This herb doesn’t cause side effects when you use it correctly. Allergic reactionsonly happen in rare cases. Nettle may cause stomach cramps or diarrhea. If this happens, stop using it or use less of it. Women who are pregnant or breastfeeding shouldn’t take this herb. This is becauseit can act like a diuretic. Nettle can change the effects of medicines that affect blood pressure. These includediuretics and anti-hypertensives. Don't take nettle if you take medicines, herbs, or other supplements. Check with yourhealthcare provider or pharmacist first."
  },
  {
    name: "Milk Thistle",
    botanicalNames: "Silybum marianum",
    otherNames:
      "milk thistle, marian thistle, Mary thistle, silibinin  silicristin , silidianin, silmar, silybin, silybum, silymarin, ",
    generalDescription:
      "Milk thistle is an annual or biennial plant. It has reddish-purple flowers. It growsto 3 feet tall. It’s often considered a weed. It comes from Europe. It grows in dry, rocky soils. Milk thistle seeds (Silybum marianum) have been used for hundreds ofyears to treat liver and gallbladder disease. Milk thistle contains a group of bioflavonoids. These are called silymarin. They’remade from the seeds of the thistle. The most active of the group is silybin. Thesemay protect the liver from damage. It works by stopping toxins from attaching to theliver cells. It also stops free radicals. It’s been used to treat toxic mushroom poisoning, cirrhosis, and hepatitis.",
    medicallyValidUses:
      "Within the last 30 years, silybin has been used to protect the liver. It treats liverissues. These include: Milk thistle has been studied to check if it protects liver cells from inflammation.The results are mixed. A large study looked at the use of milk thistle for hepatitis C. It found that peoplehad fewer symptoms and better quality of life. But there was no change in the levelof virus activity or liver inflammation. A few early studies suggest that taking 200 mg of silymarin 3 times per day for 4months with conventional treatment may have health benefits in people with type 2diabetes. These include decreasing ",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Milk thistle may protect the kidneys and pancreas against the effects of chemotherapy.It may also protect against breast cancer. Studies are ongoing.",
    dosingFormat:
      "Follow the instructions on the package for the correct dose.",
    sideEffects:
      "Milk thistle can cause allergic reactions. Your risk may be higher if you’re allergicto other plants in the same family such as: Milk thistle may lower blood sugar levels. If you have diabetes or low blood sugar(hypoglycemia), talk to your healthcare provider before using it. You should alsotalk to your healthcare provider if you take medicines or supplements that affectblood sugar levels. Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any supplements."
  },
  {
    name: "Goldenseal",
    botanicalNames: "Hydrastis canadensis L.",
    family: "Ranunculaceae",
    otherNames: "golden seal, yellow root",
    generalDescription:
      "Goldenseal is a perennial herb. It’s native to eastern North America. The roots andrhizome are the parts that are used. Goldenseal contains the alkaloids hydrastine and berberine. These have weak antisepticeffects. They may help fight bacteria-induced diarrhea. You shouldn’t take goldensealduring pregnancy. This is because it may cause uterine contractions. In the past, goldenseal was used by Native Americans to treat sore eyes, mouth ulcers ,tuberculosis, and edema. Now, there’s evidence that berberine works against resistantstrains of tuberculosis. But berberine isn’t used as a primary or add-on treatmentfor tuberculosis. Berberine may also work well to control blood sugar in people withdiabetes. Goldenseal has also been used as in eye drops. It’s used on tired  burning, red, andirritated eyes.",
    medicallyValidUses: "There are no proven uses for goldenseal.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Goldenseal tea has been used as eyewash. The eyewash may soothe itchiness caused byallergies. Berberine is used in an eye drop to reduce eye irritation. Goldenseal has also beenused as an astringent. This contracts the tissues of the body. It’s also been usedas an anti-catarrhal. This helps the body remove extra mucous and catarrhal buildup. Goldenseal may also be used as the following: Topical goldenseal may also be used as a mouthwash. It’s used to treat sore gums andmouth. It is also used topically for these conditions:",
    dosingFormat:
      "Goldenseal comes as capsules, alcohol-free extract, tincture  and bitter tea. Followthe instructions on the package for the correct dose.",
    sideEffects:
      "Women who are pregnant shouldn’t use goldenseal. It can bring on contractions. Also, goldenseal can cause harmful levels of jaundice in newborns. Goldenseal may also change the way your body processes medicines."
  },
  {
    name: "Ginseng",
    botanicalNames:
      "Panax ginseng, Panax quinquefolius (American ginseng, an endangered species), Panaxrepens.",
    family: "Araliaceae",
    otherNames:
      "American ginseng, Chinese ginseng, Korean ginseng, man-root  Schinsent",
    generalDescription:
      'Ginseng is a popular herb. A common name for ginseng i "man-root." This is becausethe root is shaped like a person. It has benefits for the whole body. The medicinalpart is made of the dried main and lateral root and root hairs. Ginseng commonly refers to Panax quinquefolius L. (American ginseng) or Panax ginsengC.A. Meyer (Korean ginseng). Siberian Ginseng comes from a slightly different familythan Panax. It’s called Eleutherocossus Senticosus Maxim. Both families of ginsengshare the same chemical constituents. Panax ginseng contains saponin glycosides. Theseare also known as ginsenosides. Siberian ginseng doesn’t contain ginsenosides. Butit has another class of compounds called eleutherosides. In all cases, they’re calledadaptogens. ',
    medicallyValidUses:
      "Animal studies show that ginseng improves stamina. It may also increase the activityof the immune system. There are no established uses for ginseng in humans.",
    unsubstantiatedClaims:
      "There may be benefits that have not yet been proven through research. Ginseng is claimed to do the following:",
    dosingFormat:
      "You can take ginseng in doses of 1 to 2 grams of root 3 or 4 times per day. You shouldonly use it for 3 to 4 weeks. How much to take and how long to take it can vary dependingupon what it is being used for. Always walk with your healthcare provider before usingit. Ginseng comes in the form of tea, dried herbs, powder, or capsules.",
    sideEffects:
      "Ginseng can cause side effects in some cases. These include headaches, digestive andsleep problems. Women who are pregnant or breastfeeding should talk to their healthcare providersbefore taking any herbal medicines. Children should only use ginseng if their healthcareprovider says to. Don’t use ginseng if you have certain health issues. These include low blood sugar, high blood pressure, or heart problems. If you’re taking medicines that lower blood sugar, talk to your healthcare providerbefore using ginseng. It may lower your blood sugar too much. There are no other known food or medicine interactions with ginseng."
  }
];

db.Herb.remove({})
  .then(() => db.Herb.collection.insertMany(herbSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
