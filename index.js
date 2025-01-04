const { Telegraf } = require("telegraf");
require("dotenv").config();

try {
  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.start((ctx) =>
    ctx.reply(
      "Welcome to <strong>notbasickk</strong> bot. We provide you handpicked courses for different skills so that you don't have to waste your time over the internet in searching them. Keep working hard.",
      { parse_mode: "HTML" }
    )
  );

  bot.command(
    "react",
    Telegraf.reply("These are the courses you can find on youtube for react:")
  );

  bot.launch();

  process.once("SIGINT", () => bot.stop("SIGINT"));
} catch (e) {
  console.log(e.message);
}
