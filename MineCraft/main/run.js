const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'stats1') {
		message.channel.send('Your_current_deafult_Stats_are_10_hitpoints_1_agilty_1_charisma');
	} else if (command === 'stats2') {
		message.channel.send('s_1_luck_1_afkwork_1_melee_melee_holding_1_range_holding_1_two_handed_melee_1_crossbow_holding');
	} else if (command === 'help2') {
		message.channel.send('help2.');
	} else if (command === 'fighting_rat_level_1') {
		message.channel.send('fighting_rat_level_1');
	} else if (command === '8ball') {
		message.channel.send('8ball');
	} else if (command === 'help3') {
		message.channel.send('help3');
	} else if (command === 'help4') {
		message.channel.send('help4');
	} else if (command === 'help5') {
		message.channel.send('help5');
	} else if (command === 'help6') {
		message.channel.send('help6');
	} else if (command === 'help7') {
		message.channel.send('help7');
	} else if (command === 'help8') {
		message.channel.send('help8');
	} else if (command === 'help9') {
		message.channel.send('help9');
	} else if (command === 'help10') {
		message.channel.send('help10');
	} else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (command === 'info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	} else if (command === 'prune') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});

client.login(token);
