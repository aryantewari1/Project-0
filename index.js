const { Telegraf } = require("telegraf");
require("dotenv").config();
console.log(process.env);

const bot = new Telegraf(process.env.BOT_TOKEN);
