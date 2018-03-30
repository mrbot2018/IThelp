function ideateCallback (session) {
	var builder = require('botbuilder');
    var card = new builder.HeroCard(session)
		.title('Ideate')
        .subtitle('Ideate is a suite of Revit Add-ins, providing additional functionality. \n\nYou can learn more here: [Ideate Software]')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/IdeateSoftware.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	session.endDialog();
    }
module.exports.ideateCallback = ideateCallback;