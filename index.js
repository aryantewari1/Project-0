const { Telegraf } = require("telegraf");
require("dotenv").config();

try {
  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.start(())
} catch (e) {
  console.log(e.message);
}
