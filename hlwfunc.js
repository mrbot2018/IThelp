 function hlwCallback (session,args) {
	var builder = require('botbuilder');
    //session.send('Inside hlw');
	var hlw = builder.EntityRecognizer.findEntity(args.intent.entities, 'hlw');
	var families = builder.EntityRecognizer.findEntity(args.intent.entities, 'families');
	var text = builder.EntityRecognizer.findEntity(args.intent.entities, 'text');
	var name = builder.EntityRecognizer.findEntity(args.intent.entities, 'name');
	var dimensions = builder.EntityRecognizer.findEntity(args.intent.entities, 'dimensions');
	var practice = builder.EntityRecognizer.findEntity(args.intent.entities, 'practice');
	if(text || dimensions)
	{
		var card = new builder.HeroCard(session)
		.title('Text and Dimensions Styles')
        .subtitle('The standard text style is Arial Narrow at 3/32". \n\nYou can find the HLW Text and Dimension Styles here:')	
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/TextDimStandards.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else if(families || name)
	{
		var card = new builder.HeroCard(session)
			.title('HLW Content Naming Standards')
			.subtitle('You can find the HLW Standard Family naming convention here:')
			.buttons([
				builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Family%20Naming%20Standards.aspx	', 'Open Browser'),
			]);
		// attach the card to the reply message
		var msg = new builder.Message(session).addAttachment(card);
		session.send(msg);
	}
	else if(practice)
	{	
	var card = new builder.HeroCard(session)
		.title('Standard Procedures & Best Practices')
        .subtitle('There are several standard procedures and best practices to ensure an efficient model.\n\nSee the entire list here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/BestPracticesRevit.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else
	session.send('Sorry, I couldn\'t find machinename \n\n \t\t Available options are : \n\n \t\t Standard Procedures & Best Practices \n\n \t\t HLW Content Naming Standards \n\n \t\t Text and Dimensions Styles' );
	session.endDialog();
    }
module.exports.hlwCallback = hlwCallback;