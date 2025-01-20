const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const TELEGRAM_TOKEN = '7500398740:AAFVDdQOjOl7rrVlFykzGYfooY7CZAmVHTg';  // توکن ربات خود را اینجا وارد کنید
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

app.use(bodyParser.json());

// ارسال پیام خوش آمد گویی
const sendWelcomeMessage = async (chatId) => {
  const message = 'خوش آمدید به ربات تلگرام!';
  await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
    chat_id: chatId,
    text: message,
  });
};

// مدیریت درخواست‌های Webhook تلگرام
const handleUpdate = (update) => {
  const chatId = update.message.chat.id;
  sendWelcomeMessage(chatId);
};

// Webhook برای دریافت پیام‌ها از تلگرام
app.post('/webhook', (req, res) => {
  const update = req.body;
  handleUpdate(update);
  res.send('OK');
});

// راه‌اندازی سرور
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
