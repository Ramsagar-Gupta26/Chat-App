import Message from "../models/Message.js";

// Get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);

    res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  try {
    const { username, text } = req.body;

    if (!username || !text?.trim()) {
      return res.status(400).json({
        message: "Username and message are required",
      });
    }

    const newMessage = await Message.create({
      username: username.trim(),
      text: text.trim(),
    });

    // Send message to all connected Socket.io clients
    req.app.locals.io.emit("newMessage", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);

    res.status(500).json({
      message: "Failed to send message",
    });
  }
};