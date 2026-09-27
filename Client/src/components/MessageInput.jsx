
import { useState } from "react";

const MessageInput = ({ onSend, disabled = false }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim() || disabled) return;

    onSend(message.trim());
    setMessage("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
      />

      <button type="submit" disabled={disabled || !message.trim()}>
        Send
      </button>
    </form>
  );
};

export default MessageInput;

