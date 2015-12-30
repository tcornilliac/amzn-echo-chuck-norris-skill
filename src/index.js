var config = require('./config');
var FACTS = require('./facts');
var AlexaSkill = require('./AlexaSkill');
var APP_ID = config.appId;

var ChuckFacts = function () {
  AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
ChuckFacts.prototype = Object.create(AlexaSkill.prototype);
ChuckFacts.prototype.constructor = ChuckFacts;

ChuckFacts.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
  console.log("ChuckFacts onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
  // any initialization logic goes here
};

ChuckFacts.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  console.log("ChuckFacts onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
  handleFirstFactRequest(response);
};

ChuckFacts.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
  console.log("ChuckFacts onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
  // any cleanup logic goes here
};

ChuckFacts.prototype.intentHandlers = {
  "GetFirstFactIntent": function (intent, session, response) {
    handleFirstFactRequest(response);
  },

  "GetNextFactIntent": function (intent, session, response) {
    handleNextFactRequest(response);
  },

  "AMAZON.HelpIntent": function (intent, session, response) {
    response.ask("What fun fact about Chuck Norris can I share with you?");
  },

  "AMAZON.StopIntent": function (intent, session, response) {
    var speechOutput = "Goodbye";
    response.tell(speechOutput);
  },

  "AMAZON.CancelIntent": function (intent, session, response) {
    var speechOutput = "Goodbye";
    response.tell(speechOutput);
  }
};

function handleFirstFactRequest(response) {
  var fact = FACTS.getRandomFact();
  console.log(fact);
  var speech = "<speak><p>" + fact + "</p><p>Would you like to hear another?</p></speak>"
  var repromptText = "Would you like to hear another hysterical Chuck Norris fact?";
  var speechOutput = {
    speech: speech,
    type: AlexaSkill.speechOutputType.SSML
  };
  var repromptOutput = {
    speech: repromptText,
    type: AlexaSkill.speechOutputType.PLAIN_TEXT
  };
  response.askWithCard(speechOutput, repromptOutput, "Humorous Chuck Facts", speech);
}

function handleNextFactRequest(response) {
  var fact = FACTS.getRandomFact();
  var speech = "<speak><p>" + fact + "</p><p>One more?</p></speak>"
  var repromptText = "Would you like to hear another hysterical Chuck Norris fact?";
  var speechOutput = {
    speech: speech,
    type: AlexaSkill.speechOutputType.SSML
  };
  var repromptOutput = {
    speech: repromptText,
    type: AlexaSkill.speechOutputType.PLAIN_TEXT
  };
  response.askWithCard(speechOutput, repromptOutput, "Humorous Chuck Facts", speech);

}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
  // Create an instance of the ChuckFacts skill.
  var chuckFacts = new ChuckFacts();
  chuckFacts.execute(event, context);
};

