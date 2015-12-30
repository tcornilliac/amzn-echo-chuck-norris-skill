var facts = [
  "When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris",
  "There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.",
  "Chuck Norris has already been to Mars; that's why there are no signs of life.",
  "Chuck Norris died 20 years ago, Death just hasn't built up the courage to tell him yet.",
  "Fear of spiders is arachnophobia, fear of tight spaces is claustrophobia, fear of Chuck Norris is called Logic",
  "Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.",
  "Some magicians can walk on water, Chuck Norris can swim through land.",
  "Chuck Norris counted to infinity - twice.",
  "Chuck Norris once urinated in a semi truck's gas tank as a joke ...... that truck is now known as Optimus Prime.",
  "Chuck Norris is the reason why Waldo is hiding.",
  "When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.",
  "Death once had a near-Chuck-Norris experience.",
  "Chuck Norris can slam a revolving door.",
  "Chuck Norris once kicked a horse in the chin. Its descendants are known today as Giraffes.",
  "Chuck Norris can win a game of Connect Four in only three moves.",
  "Chuck Norris once got bit by a rattlesnake ........ After three days of pain and agony .................. the rattle snake died",
  "There is no theory of evolution. Just a list of animals Chuck Norris allows to live.",
  "Chuck Norris doesn’t wear a watch. HE decides what time it is.",
  "Chuck Norris can light a fire by rubbing two ice-cubes together.",
  "Chuck Norris made a Happy Meal cry.",
  "Chuck Norris once gotten bitten by a zombie and the zombie turned human.",
  "When Chuck Norris crosses the street, cars look both ways for Chuck Norris.",
  "If you spell Chuck Norris in Scrabble, you win. Forever.",
  "When Chuck Norris was asked if he believed that the world was going to end in 2012 he responded ......... Depends on how I'm feeling that day.",
  "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.",
  "Chuck Norris was in all 7 Star Wars movies ............... As The Force.",
  "Chuck Norris can dry his hands in water.",
  "Chuck Norris’ calendar goes straight from March 31st to April 2nd ......... No one fools with Chuck Norris.",
  "Chuck Norris can set ants on fire with a magnifying glass. At night.",
  "Chuck Norris can do a wheelie on a unicycle",
  "Chuck Norris put out a forest fire ......... using only gasoline",
  "Chuck Norris' hand is the only hand that can beat a Royal Flush.",
  "Chuck Norris never needs a flashlight, he just stares into the darkness and it moves out of the way.",
  "When Chuck Norris looks at himself at a mirror, there is no reflection. There can only be one Chuck Norris.",
  "Outer space exists because it's afraid to be on the same planet with Chuck Norris.",
  "The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably.",
  "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
  "Chuck Norris once broke a mirror over the head of a black cat while standing under a ladder on Friday the thirteenth. The next day he won the lottery.",
  "When Bruce Banner gets mad he turns into the Hulk. When the Hulk gets mad he turns into Chuck Norris. When Chuck Norris gets mad, run.",
  "Chuck Norris can kill two stones with one bird.",
  "When Chuck Norris was born he drove his mom home from the hospital.",
  "Bigfoot claims he saw Chuck Norris.",
  "Chuck Norris makes onions cry.",
  "Chuck Norris is the only person that can punch a cyclops between the eye.",
  "Brett Farve can throw a football over 50 yards. Chuck Norris can throw Brett Favre even further.",
  "Chuck Norris's Blood Type is AK-47.",
  "Chuck Norris sleeps with a pillow under his gun.",
  "Chuck Norris won the World Horseshoe Pitching Contest while they were still attached to a Clydesdale.",
  "When Chuck Norris swims in the ocean, the sharks are in a steel cage."
];

function ChuckFacts() {
  this.workingFacts = facts;
};

ChuckFacts.prototype.getRandomFact = function() {
  var factIndex = Math.floor(Math.random() * this.workingFacts.length);
  var randomFact = this.workingFacts[factIndex];
  this.workingFacts.splice(factIndex, 1);
  console.log(this.workingFacts.length + "items remaining in the session queue");
  return randomFact;
}

module.exports = new ChuckFacts();