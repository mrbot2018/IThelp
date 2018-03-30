var restify = require('restify');
var builder = require('botbuilder');
var dateFormat = require('dateformat');
var selectedbutton='';
var rev = require('./revitfunc');
var ws  = require('./worksetsfunc');
var idt = require('./ideatefunc');
var hl = require('./hlwfunc');
var mdl = require('./modelfunc');
var unf = require('./unififunc');
var dor = require('./doorfunc');
//import revitCallback from "./revitfunc";
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 81 || 80, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '',   // ADD APP_ID here
    appPassword: '' // ADD Password here
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
		selectedbutton = session.message.text;
    	//// Echo back users text
		//session.send('accounts_receivable is '+session.privateConversationData['accounts_receivable']);

});
//bot.dialog('login', require('./login'));
//bot.dialog('getMachineId', require('./getMachineId'));
//Create LUIS recognizer that points at our model and add it as the root '/' dialog.
var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/0cade46e-3882-499e-93f6-dd63554e8184?subscription-key=638ee9aeb729407aa09215840a0cae05&verbose=true&timezoneOffset=0&q=');/*here we use the URL that we copied earlier*/
bot.recognizer(recognizer);



//////////////////////////////////////
bot.dialog('Project Status', function (session) {
	if(session.privateConversationData['service'] == true)
	{
    session.send('Here is your project status');
	var card = new builder.HeroCard(session)
        .title('Project Status')
		.buttons([
            builder.CardAction.openUrl(session, 'https://catalysttg.brightgauge.co/dashboards/28fe1d64-8170-11e7-a4b8-0eedd3689790/', 'Open Browser'),
        ]);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
	}
	else{
			 session.send('You are not Authorized to access \'Slow PC Script\' ');
		}
    session.endDialog();
    }).triggerAction({
    matches: 'Project Status'
});
//////////////////////////////////////
bot.dialog('model', function (session,args) {
	mdl.modelCallback(session,args);
    }).triggerAction({
    matches: 'model'
});
//////////////////////////////////////
bot.dialog('revit', function (session,args) {
	rev.revitCallback(session,args);
}).triggerAction({
    matches: 'revit'
});
//////////////////////////////////
bot.dialog('hlw', function (session,args) {
	hl.hlwCallback(session,args);
}).triggerAction({
    matches: 'hlw'
});

//////////////////////////////////
bot.dialog('door', function (session,args)
{ dor.doorCallback(session,args);
}).triggerAction({
    matches: 'door'
});
///////////////////////////////////

bot.dialog('unifi', function (session,args)
{ unf.unifiCallback(session,args);
}).triggerAction({
    matches: 'unifi'
});
//////////////////////////////////
bot.dialog('worksets',function (session,args)
{
	ws.worksetCallback(session,args);
}).triggerAction({
    matches: 'worksets'
});


///////////////////////////////////
bot.dialog('ideate', function (session,args)
{ idt.ideateCallback(session,args)
}).triggerAction({
    matches: 'ideate'
});

//////////////////////////////////////

bot.dialog('Help', function (session) {
    	// Echo back users text
		session.send("Inside Help");
		//session.send("Select your choice:");
		var card = createMainMenuHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    session.endDialog();
    }).triggerAction({
    matches: 'Help'
});

/////////////////////////////////////


function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Select your choice')
		.buttons([
            builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot1', 'Service Tickets'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot2', 'Project Management'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot3', 'IT Task Automation'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot4', 'System Management'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot5', 'Trouble Shooting'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot6', 'System Status')	
        ]);
}
function createMainMenuHeroCard(session) {
	var but=[];
		if(session.privateConversationData['accounts_receivable'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot1', 'Accounts Receivable'));
		if(session.privateConversationData['customer_service'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot2', 'Customer Service'));
		if(session.privateConversationData['hr'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot3', 'HR'));
		if(session.privateConversationData['marketing'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot4', 'Marketing'));
		if(session.privateConversationData['operations'] == true)
		but.push(builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot5', 'Operations'));
		if(session.privateConversationData['sales'] == true)
		but.push(builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot6', 'Sales'));
		if(session.privateConversationData['service'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot7', 'Service'));		
	var card;
    card= new builder.HeroCard(session)
        .title('Select your choice')
		.buttons(but);
		return card;
}
function createServiceMenuHeroCard(session) {
		session.send('Hi, I am PivBot for Service. Please tell me what you would like me to do.or type "help" at any time to be guided through my options.');		
		var card = createHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}
function getMainMenuHeroCard(session) {
		var card = createMainMenuHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}

