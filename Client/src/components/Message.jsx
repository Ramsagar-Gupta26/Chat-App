const Message = ({ message, username }) => {
  const isOwnMessage = message.username === username;

  return (
    <div className={`message ${isOwnMessage ? "own-message" : ""}`}>
      
      <div className="message-user">
        {message.username}
      </div>

      <div className="message-text">
        {message.text}
      </div>

      <div className="message-time">
        {new Date(message.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

    </div>
  );
};

export default Message;