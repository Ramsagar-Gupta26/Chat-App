import { useState } from "react";
import UserLogin from "./components/UserLogin";
import Chat from "./components/Chat";

const App = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (name) => {
    setUsername(name);
  };

  return (
    <div className="app">
      {!username ? (
        <UserLogin onLogin={handleLogin} />
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
};

export default App;