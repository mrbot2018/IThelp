 function modelCallback (session,args) {
	var builder = require('botbuilder');
    //session.send('Inside model');
	var model = builder.EntityRecognizer.findEntity(args.intent.entities, 'model');
	var consultant = builder.EntityRecognizer.findEntity(args.intent.entities, 'consultant');
	var archive = builder.EntityRecognizer.findEntity(args.intent.entities, 'archive');
	var backup = builder.EntityRecognizer.findEntity(args.intent.entities, 'backup');
	var transmit = builder.EntityRecognizer.findEntity(args.intent.entities, 'transmit');
	var open2 = builder.EntityRecognizer.findEntity(args.intent.entities, 'open');
	var start = builder.EntityRecognizer.findEntity(args.intent.entities, 'start');
	var new2 = builder.EntityRecognizer.findEntity(args.intent.entities, 'new');
	var load = builder.EntityRecognizer.findEntity(args.intent.entities, 'load');
	var put = builder.EntityRecognizer.findEntity(args.intent.entities, 'put');
	if(consultant)
	{
	// put and load		
  if(load){
	var card = new builder.HeroCard(session)
		.title('Receiving Models')
        .subtitle('Consultant models should be linked into our Revit model with their own Workset. They should be linked from the LINK folder in the project folder.   \n\nYou can read more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/ReceiveModels.aspx', 'Open Browser'),
        ]);
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
  }
  else if(put){
	var card = new builder.HeroCard(session)
		.title('Project Folders')
        .subtitle('You should download all received models into a Received folder. Then resave a copy of the models into the LINK folder. You can read more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/ReceiveModels.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	}
	else if(archive || backup)
	{	
	var card = new builder.HeroCard(session)
		.title('Archiving Your Model')
        .subtitle('You can archive your model by packaging it with a Revit Add-in, eTransmit. You can find more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/Project%20Archive.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else if(transmit)
	{	
	var card = new builder.HeroCard(session)
		.title('Transmitting Your Model')
        .subtitle('You can package your model with a Revit Add-in, eTransmit. You can find more here:')
		.buttons([
            builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/TransmittingModel.aspx', 'Open Browser'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else if(open2)
	{	
//\n\n1. For projects on the local P drive, go here: [Local Access]()\n\n2. For projects we are working across offices on Revit Server, go here: [Revit Server](http://hub.hlw.com/technology/DesignTechnology/OpeningRevitServerModels.aspx)\n\n3. For projects in the cloud on Collaboration for Revit, go here" [Collaboration for Revit](http://hub.hlw.com/technology/DesignTechnology/OpeningCollaboration4Revit.aspx)	Editorial

	var card = new builder.HeroCard(session)
		.title('Open Model')
        .subtitle('Revit models can be hosted on 3 different platforms:\n\n  1. For projects on the local P drive, go here: [Local Access]\n\n  2. For projects we are working across offices on Revit Server, go here: [Revit Server] \n\n  3. For projects in the cloud on Collaboration for Revit, go here[Collaboration for Revit]')
		.buttons([
builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/OpeningFileBasedCentral.aspx', 'Local Access'),
builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/OpeningRevitServerModels.aspx', 'Revit Server'),
builder.CardAction.openUrl(session, 'http://hub.hlw.com/technology/DesignTechnology/OpeningCollaboration4Revit.aspx', 'Collaboration for Revit'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else if(start || new2)
	{
	var card = new builder.HeroCard(session)
		.title('Start Model')
        .subtitle('If you are not comfortable starting a model from scratch, please contact \'Jason Chen\' or \'Jeff Bailey\' to start your project model. Please provide the project number as well as any existing information to be referenced in the new model.')
		.buttons([
            builder.CardAction.openUrl(session, 'mailto:jbailey@hlw.com?subject=New%20Project', 'Jason Chen'),
			builder.CardAction.openUrl(session, 'mailto:jbailey@hlw.com?subject=New%20Project', 'Jeff Bailey'),
        ]);
	// attach the card to the reply message
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
	}
	else
	session.send('Sorry, I couldn\'t understand \n\n \t\t Available options are : \n\n \t\t Start Model \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' \'ENTER_TIME_HERE\' ' );
	session.endDialog();
    }
module.exports.modelCallback = modelCallback;