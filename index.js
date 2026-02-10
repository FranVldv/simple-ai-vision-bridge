import OpenAI from "openai";
import { startTransition } from "react";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


@param {string} imageUrl
@param {string} customPrompt
@returns {Promise<string>}

export const ganalyzeWithAI = async (imageUrl, customPrompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that analyzes images and provides insights based on the content of the image."},
                {
                    role: "user" ,
                    content: [
                        {type: "text" , text: customPrompt},
                        {type: "image_url" , url: imageUrl}
                    ],
                },
            ],
            temperature: 0.2,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error en AI Vision Engine:", error);
        throw new error("Error al procesar la imagen. Por favor, inténtalo de nuevo.");
    }
};
                    