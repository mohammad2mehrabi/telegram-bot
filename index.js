const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');

// توکن ربات خود را اینجا قرار بده
const bot = new Telegraf('7500398740:AAFVDdQOjOl7rrVlFykzGYfooY7CZAmVHTg');

// URL وب‌سایت خود را که در Vercel است وارد کنید
const WEBHOOK_URL = 'https://your-vercel-app.vercel.app';

// تنظیم Webhook
const setWebhook = async () => {
  const url = `https://api.telegram.org/bot7500398740:AAFVDdQOjOl7rrVlFykzGYfooY7CZAmVHTg/setWebhook?url=${WEBHOOK_URL}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log('Webhook set:', json);
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
};

// وقتی ربات استارت میشه، پیامی ارسال کن
bot.start((ctx) => {
  ctx.reply('سلام! خوش اومدی به ربات ما!');
});

// استارت ربات
bot.launch();

// تنظیم Webhook هنگام راه‌اندازی
setWebhook();

// چک کردن هر 30 ثانیه
setInterval(() => {
  console.log('Checking webhook...');
  // می‌توانید هر عملیات دیگری که نیاز دارید اینجا انجام دهید
}, 30000); // هر 30 ثانیه یک‌بار

// برای مدیریت وقفه ها
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
