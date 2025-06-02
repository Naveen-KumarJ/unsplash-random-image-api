# Unsplash Random Image API 🌄

A lightweight Node.js REST API built with Express.js to fetch and serve random images from [Unsplash](https://unsplash.com/) using their public API. Ideal for use in frontend applications, widgets, or just exploring Unsplash's stunning photos.

---

## 🚀 Features

- Fetch a random image from Unsplash via `/api/image/random`
- Express server with proper error handling
- CORS enabled for cross-origin support
- `.env` support for API keys

---

## 📦 Installation

```bash
git clone https://github.com/your-username/unsplash-random-image-api.git
cd unsplash-random-image-api
npm install
```
## 🔐 Environment Variables

Create a .env file in the root of the project with the following:
```env
CLIENT_ID=your_unsplash_api_key
```
🔑 You can obtain an API key from https://unsplash.com/developers

## ▶️ Running the Server

```bash
node index.js
```
The server will start on http://localhost:8080

## 🔗 API Endpoint

GET /api/image/random
Description: Fetches a random image from Unsplash.

Response:
```
json
{
  "data": {
    "raw": "https://...",
    "full": "https://...",
    "regular": "https://...",
    "small": "https://...",
    "thumb": "https://..."
  }
}
```

Error Response Example:
```json
{
  "error": "Failed to fetch image.",
  "details": "Request failed with status code 401"
}
```

## 🔧 Project Structure
```pgsql
.
├── .env
├── index.js
├── routes
│   └── imageRoute.js
├── services
│   └── imageFetch.js
├── package.json
```

## 🛠 Technologies Used
- Node.js
- Express.js
- Axios
- dotenv
- CORS
- Unsplash API

## ❤️ Contributing
Pull requests are welcome.