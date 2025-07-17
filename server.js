const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simulated AI response (replace with real AI API call if needed)
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    // For demo, just echo or simulate a response
    const botResponse = `You said: ${userMessage}. (This is a simulated AI response.)`;
    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`AI Chatbot backend running on http://localhost:${PORT}`);
});
