# Real-Time Chat Application

A full-stack real-time chat application built using React, Node.js, Express, MongoDB, and Socket.io.

## Features

- User username login
- Real-time messaging using Socket.io
- Send and receive messages instantly
- Message history stored in MongoDB
- Messages remain available after page refresh
- Message timestamps
- Online/Offline connection status
- REST API for sending and fetching messages
- Responsive chat interface
- Graceful Socket.io connection and disconnection handling
- Error handling on client and server

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose
- REST API

## Project Structure

```text
Chat/
│
├── Client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   └── UserLogin.jsx
│   │   │
│   │   ├── services/
│   │   │   └── socket.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── messageController.js
│   │
│   ├── models/
│   │   └── Message.js
│   │
│   ├── routes/
│   │   └── messageRoutes.js
│   │
│   ├── sockets/
│   │   └── chatSocket.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── README.md
