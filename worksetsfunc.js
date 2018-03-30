function worksetCallback (session,args) {
	var builder = require('botbuilder');
    //session.send('Inside worksets');
	var worksets = builder.EntityRecognizer.findEntity(args.intent.entities, 'unifi');
	var name = builder.EntityRecognizer.findEntity(args.intent.entities, 'name');
	var standard = builder.EntityRecognizer.findEntity(args.intent.entities, 'standard');
	if(name)
	{
	var card = new builder.HeroCard(session)
		.title('Model Organization')
        .subtitle('There are a few standard Worksets for all models. And some custom Worksets based on the project needs. \n\nYou can read more here:')
		.buttons([
           builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Worksets.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else if(standard)
	{
		var card = new builder.HeroCard(session)
		.title('Model Organization')
        .subtitle('There are a few standard Worksets for all models. And some custom Worksets based on the project needs. \n\nYou can read more here:')
		.buttons([
           builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Worksets.aspx', 'Open Browser'),
        ]);
		// attach the card to the reply message
		var msg = new builder.Message(session).addAttachment(card);
		session.send(msg);
	}
	else
	session.send('Sorry, I couldn\'t Understand. \n\n \t\t Available options are : \n\n \t\t How do I name my worksets? \n\n \t\t What are the standard worksets?' );
	session.endDialog();
    }
module.exports.worksetCallback = worksetCallback;