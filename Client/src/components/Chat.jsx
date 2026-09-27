
import { useEffect, useState } from "react";

import socket from "../services/socket";
import Message from "./Message";
import MessageInput from "./MessageInput";


const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  // Fetch previous messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/messages"
        );

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // Socket.io connection
  useEffect(() => {
  // Check current connection status
  setConnected(socket.connected);

  const handleConnect = () => {
    console.log("Connected to server");
    setConnected(true);
  };

  const handleDisconnect = () => {
    console.log("Disconnected from server");
    setConnected(false);
  };

  const handleNewMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);
  };

  socket.on("connect", handleConnect);
  socket.on("disconnect", handleDisconnect);
  socket.on("newMessage", handleNewMessage);

  return () => {
    socket.off("connect", handleConnect);
    socket.off("disconnect", handleDisconnect);
    socket.off("newMessage", handleNewMessage);
  };
}, []);

  // Send message
  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    try {
      const response = await fetch(
        "http://localhost:5000/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            text: messageText,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">

      {/* Header */}
      <div className="chat-header">
        <div>
          <h2>Real-Time Chat</h2>
          <p>Welcome, {username}</p>
        </div>

        <span>
          {connected ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>

      {/* Messages */}
      <div className="messages-container">
        {messages.length === 0 ? (
          <p className="no-messages">
            No messages yet. Start the conversation!
          </p>
        ) : (
          messages.map((msg) => (
            <Message
              key={msg._id || msg.id}
              message={msg}
              username={username}
            />
          ))
        )}
      </div>

      {/* Message Input */}
      <MessageInput
        onSend={sendMessage}
        disabled={!connected}
      />

    </div>
  );
};

export default Chat;
