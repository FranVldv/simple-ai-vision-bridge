# Simple AI Vision Bridge

Una solución ligera y preparada para producción para analizar imágenes y documentos utilizando IA. Este módulo abstrae la complejidad de la API de OpenAI, permitiendo realizar análisis visuales con cualquier conjunto de reglas en segundos.

## 💡 ¿Por qué usar esto?
En lugar de configurar toda la petición de OpenAI cada vez, este helper permite enviar una imagen y un set de instrucciones personalizadas, obteniendo una respuesta procesada.

## 🛠️ Instalación y Uso
1. Clonar el repositorio.
2. Instalar dependencias: `npm install openai dotenv`
3. Configurar tu `OPENAI_API_KEY` en el `.env`.

## 📂 Ejemplo de implementación
```javascript
import { analyzeImageWithAI } from './vision-helper.js';

const prompt = "Valida si esta boleta es de hoy y si supera los $5000.";
const respuesta = await analyzeImageWithAI(urlDeImagen, prompt);
console.log(respuesta);