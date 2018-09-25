let telegram_bot_api = require('telegram-bot-api');

const token = process.env.TG_BOT_TOKEN;

const bot = new telegram_bot_api({
	token: token,
	updates: {
		enabled: true,
		pooling_timeout: 100,
	}
});

bot.on('inline.query', query => {
	bot.answerInlineQuery({
		inline_query_id: query.id,
		results: [{
			type: 'contact',
			id: 'john.doe',
			phone_number: '+1 555 1234567890',
			first_name: 'John',
			last_name: 'Doe',
			vcard: `BEGIN:VCARD
				VERSION:2.1
				N:Doe;John;;;
				FN:John Doe
				TEL;CELL:+1 555 1234567890
				EMAIL;WORK:john.doe@example.org
				END:VCARD`.replace(/\n\t+/g, "\n")
		}],
	});
});
