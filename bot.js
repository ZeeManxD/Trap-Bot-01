var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '/'
  var swearing = 'HEY NO SWEARING, BITCH!'
  let args = message.content.split(' ').slice(1);
  var fs = require('fs')
  var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

  if (msg === prefix + 'PING') {
    message.channel.send('PONG BITCH!')
}
if (msg === prefix + 'DIDNOT') {
  message.channel.send('Oh Hi Mark')
}
if (msg === prefix + 'KYS') {
  message.channel.send('No You')
}
if(sender.id === "437704639303909380") return;
if (!message.guild.id === "361216014882570241") return;

if (msg.includes('OOF') || msg.includes('YASS') || msg.includes('BOYO') || msg.includes('SHIT') || msg.includes('BITCH') || msg.includes('ASS') || msg.includes(':JOY:')
|| msg.includes('FUCK') || msg.includes('NIGGER') || msg.includes('GIFF') || msg.includes('GUCCI') || msg.includes('SUPREME') || msg.includes('CUNT') || msg.includes(':MIDDLE_FINGER:')
|| msg.includes('NONON') || msg.includes('O O F') || msg.includes('Y A S S') || msg.includes('B O Y O') || msg.includes('S H I T') || msg.includes('B I T C H') || msg.includes('A S S')
|| msg.includes('F U C K') || msg.includes('N I G G E R') || msg.includes('G I F F') || msg.includes('G U C C I') || msg.includes('S U P R E M E') || msg.includes('C U N T') || msg.includes('N O N O N')) {
message.delete();
message.author.send(swearing)
}

if (msg === prefix + 'DEL') {
let messagecount = args.join(' ')
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Sorry U dont have the perms go to #staff-applications to apply for perms')
message.channel.fetchMessages({
    limit: messagecount + 1
}).then(messages => message.channel.bulkDelete(messages));
}

if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
  message.channel.send(commandsList)
}



});

bot.login('NDM3NzA0NjM5MzAzOTA5Mzgw.Db6G5A.ued-_k8A2yKH3thCq2ukA4HrtKo')

bot.on('ready', () => {
  console.log('Bot Launched...')

bot.user.setStatus('Online')

bot.user.setActivity('Coding Myself')

});

bot.on('guildMemberAdd', member => {

  var role = member.guild.roles.find('name', 'Well, You Joined Now what?')

  member.addRole(role.id)
});
