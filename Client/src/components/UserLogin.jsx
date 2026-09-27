import { useState } from "react";

const UserLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onLogin(username.trim());
  };

  return (
    <div className="login-container">
      <h2>Welcome to Chat</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">
          Join Chat
        </button>
      </form>
    </div>
  );
};

export default UserLogin;