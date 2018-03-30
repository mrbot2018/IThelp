 function revitCallback (session,args) {
	var builder = require('botbuilder');
    //session.send('Inside Revit');
	var revit = builder.EntityRecognizer.findEntity(args.intent.entities, 'revit');
	var families = builder.EntityRecognizer.findEntity(args.intent.entities, 'families');
	var content = builder.EntityRecognizer.findEntity(args.intent.entities, 'content');
	var name = builder.EntityRecognizer.findEntity(args.intent.entities, 'name');
	var find = builder.EntityRecognizer.findEntity(args.intent.entities, 'find');
	if(families)
	{
		if(find)
		{
		var card = new builder.HeroCard(session)
			.title('Revit Content')
			.subtitle('You can find the HLW Content Library on Unifi. \n\nLearn me more here:')
			.buttons([
				builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Content%20Library.aspx', 'Open Browser'),
			]);
		// attach the card to the reply message
		var msg = new builder.Message(session).addAttachment(card);
		session.send(msg);
		}
		else if(name)
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
		else
			{		
				var card = new builder.HeroCard(session)
					.title('Autodesk: About Families')
					.subtitle('A family is a group of elements with a common set of properties, called parameters, and a related graphical representation.\n  \n\n\nDifferent elements belonging to a family may have different values for some or all of their parameters, but the set of parameters (their names and meanings) is the same. These variations within the family are called family types or types.\n  \n\n\nLearn more here:')
					.buttons([
						builder.CardAction.openUrl(session, 'https://knowledge.autodesk.com/support/revit-products/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/Revit-Model/files/GUID-6DDC1D52-E847-4835-8F9A-466531E5FD29-htm.html', 'Open Browser'),
					]);
				// attach the card to the reply message
				var msg = new builder.Message(session).addAttachment(card);
				session.send(msg);
			}
	}
	else if(content)
	{
		var card = new builder.HeroCard(session)
			.title('Revit Content')
			.subtitle('You can find the HLW Content Library on Unifi. \n\nLearn me more here:')
			.buttons([
				builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Content%20Library.aspx', 'Open Browser'),
			]);
		// attach the card to the reply message
		var msg = new builder.Message(session).addAttachment(card);
		session.send(msg);
	}
	else
	session.send('Sorry, I couldn\'t find machinename \n\n \t\t Available options are : \n\n \t\t Revit Content \n\n \t\t HLW Content Naming Standards ' );
	session.endDialog();
    }
module.exports.revitCallback = revitCallback;