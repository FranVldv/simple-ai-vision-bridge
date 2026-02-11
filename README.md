# Simple AI Vision Bridge

A lightweight, production-ready solution for analyzing images and documents using AI. This module abstracts the complexity of the OpenAI Vision API, allowing you to perform visual analysis with any custom rule set in seconds.

## 💡 Why use this?
Instead of configuring the entire OpenAI request every time, this helper allows you to send an image and a set of custom instructions, receiving a clean, processed response.

## 🛠️ Installation & Setup
1. Clone the repository.
2. Install dependencies: `npm install openai dotenv`
3. Configure your `OPENAI_API_KEY` in the `.env` file.

## 📂 Implementation Example
```javascript
import { analyzeImageWithAI } from './vision-helper.js';

const prompt = "Validate if this receipt is from today and if the total exceeds $50.00.";
const response = await analyzeImageWithAI(imageUrl, prompt);

console.log(response);
