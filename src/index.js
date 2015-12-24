var config = require('./config');
var FACTS = require('./facts');
var AlexaSkill = require('./AlexaSkill');
var APP_ID = config.appID;

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
    handleNewFactRequest(response);
};

ChuckFacts.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("ChuckFacts onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

ChuckFacts.prototype.intentHandlers = {
    "GetNewChuckFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Space Geek tell me a space fact, or, you can say exit... What can I help you with?", "What can I help you with?");
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

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    var factIndex = Math.floor(Math.random() * FACTS.length);
    var fact = FACTS[factIndex];
    var speechOutput = fact;
    response.tellWithCard(speechOutput, "Humorous Chuck Facts", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the ChuckFacts skill.
    var chuckFacts = new ChuckFacts();
    chuckFacts.execute(event, context);
};

