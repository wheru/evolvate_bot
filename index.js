import { Telegraf, Markup } from 'telegraf'
import 'dotenv/config'

const webAppUrl = 'https://evolvate-tma.vercel.app'
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
  ctx.reply( `Добро пожаловать, ${ctx.message.from.first_name}! Нажмите на кнопку ниже, чтобы запустить приложение`)}
)

bot.launch()