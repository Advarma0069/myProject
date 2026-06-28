import React, { useState, useRef, useEffect } from "react";
import {
  FaWhatsapp,
  FaTimes,
  FaPhoneAlt,
  FaArrowUp,
  FaPaperPlane
} from "react-icons/fa";
import "../css/Icons.css";

const botQuestions = [
  "👋 Hi there! What's your name?",
  "Nice to meet you! What's your email?",
  "Which product are you interested in?",
  "Do you have any specific requirements?",
  "Thanks! Our team will contact you shortly."
];

const Icons = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    requirement: ""
  });

  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleScroll = () =>
      setShowScrollBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      addBotMessage(botQuestions[0]);
    }
  }, []);

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { from: "bot", text, time: new Date() }
    ]);
  };

  const handleUserReply = (text) => {
    if (!text.trim()) return;

    const updatedFormData = { ...formData };

    if (currentQuestion === 0) updatedFormData.name = text;
    if (currentQuestion === 1) updatedFormData.email = text;
    if (currentQuestion === 2) updatedFormData.product = text;
    if (currentQuestion === 3)
      updatedFormData.requirement = text;

    setFormData(updatedFormData);

    setMessages((prev) => [
      ...prev,
      { from: "user", text, time: new Date() }
    ]);

    setInput("");

    if (currentQuestion + 1 < botQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        addBotMessage(botQuestions[currentQuestion + 1]);
      }, 800);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const phone = "919161126257";
  return (
    <>
      <div className="left-icons">
        <a href={`tel:${phone}`} className="phone-icon">
          <FaPhoneAlt />
        </a>

        <button
          className="floating-whatsapp"
          onClick={() => setOpen(!open)}
        >
          <FaWhatsapp />
        </button>

        {open && (
          <div className="chat-popup">

            {/* HEADER */}
            <div className="chat-header">
              <div className="header-left">
                <div className="profile-circle">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="support"
                  />
                  <span className="online-dot"></span>
                </div>
                <div className="header-info">
                  <h4>GENERAL CHAT</h4>
                  <p>Online</p>
                </div>
              </div>

              <button
                className="openclose"
                onClick={() => setOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* BODY */}
            <div
              className="chat-body"
              ref={chatBodyRef}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chat-message ${msg.from}`}
                >
                  <div className="message-text">
                    {msg.text}
                  </div>
                  <div className="message-time">
                    {msg.time.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="chat-footer">
              <div className="input-section">
                <input
                  type="text"
                  placeholder="Type message..."
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    handleUserReply(input)
                  }
                />
                <button
                  className="send-btn"
                  onClick={() =>
                    handleUserReply(input)
                  }
                  disabled={!input.trim()}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>

      {showScrollBtn && (
        <button
          className="scroll-page-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Icons;