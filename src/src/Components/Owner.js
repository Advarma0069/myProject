import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const OwnerDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("ownerMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Owner Dashboard</h2>
      {messages.map((msg, idx) => (
        <div key={idx} style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
          <strong>{msg.from}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default OwnerDashboard;