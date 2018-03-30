function doorCallback (session) {
	var builder = require('botbuilder');
    var card = new builder.HeroCard(session)
		.title('Door Panel Types')
        .subtitle('You can find the standard door types here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/DoorStandards.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	session.endDialog();
    }
module.exports.doorCallback = doorCallback;