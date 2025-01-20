const axios = require('axios');

const TELEGRAM_TOKEN = '7500398740:AAFVDdQOjOl7rrVlFykzGYfooY7CZAmVHTg';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const update = req.body;
    const chatId = update.message.chat.id;
    const message = 'خوش آمدید به ربات تلگرام!';
    
    await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
