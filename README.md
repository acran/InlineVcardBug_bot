This is just a simple Telegram bot to demonstrate [DrKLO/Telegram#1482](https://github.com/DrKLO/Telegram/pull/1482).
All it does is to sent a single contact as result for an inline query. You can find it as [@InlineVcardBug_bot](https://t.me/InlineVcardBug_bot) or run it yourself.

To run it yourself:
1. [Create a new Telegram bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot) (or use an existing one)
2. Clone this repo `git clone https://github.com/acran/InlineVcardBug_bot.git` and `cd InlineVcardBug_bot/` into it
3. Export the token of your bot as environment variable: `export TG_BOT_TOKEN="<your_token_here>"`
4. Run the bot
  * using node directly: `npm install && node bot.js`
  * using docker-compose: `docker-compose up`
  * using docker: `docker build -t InlineVcardBug_bot . && docker run -e TG_BOT_TOKEN InlineVcardBug_bot`
