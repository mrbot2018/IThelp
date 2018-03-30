 function unifiCallback (session,args) {
	var builder = require('botbuilder');
    //session.send('Inside unifi');
	var unifi = builder.EntityRecognizer.findEntity(args.intent.entities, 'unifi');
	var open2 = builder.EntityRecognizer.findEntity(args.intent.entities, 'open');
	var access = builder.EntityRecognizer.findEntity(args.intent.entities, 'access');
	if(open2)
	{
	var card = new builder.HeroCard(session)
		.title('Open Unifi')
        .subtitle('Unifi can be accessed in Revit in the Add in tab or a shortcut on your Desktop. If you don\'t have access, please contact [Jason Chen](mailto:jchen@hlw.com?subject=Unifi%20Access)\n\nLearn more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Content%20Library.aspx', 'Open Browser'),
        ]);
        // attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
    }
	else if(access)
	{
	var card = new builder.HeroCard(session)
		.title('Access Unifi')
        .subtitle('Unifi can be accessed in Revit in the Add in tab or a shortcut on your Desktop. If you don\'t have access, please contact [Jason Chen](mailto:jchen@hlw.com?subject=Unifi%20Access)\n\nLearn more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Content%20Library.aspx', 'Open Browser'),
        ]);
        // attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
    }
	else
	{
	var card = new builder.HeroCard(session)
		.title('Unifi')
        .subtitle('Unifi is a cloud service that host our Revit Content Library.All HLW approved content can be found in Unifi.\n\nLearn me more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Content%20Library.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	session.endDialog();
 }
module.exports.unifiCallback = unifiCallback;