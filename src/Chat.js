import React, { useState } from 'react';
import './chat.css'

const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        content: message,
        likes: 0,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="container mt-5 bg">
      <div className="message-thread">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span className='text'>{msg.user}: </span>
            <span className='text1'>{msg.content}</span>
            <button className="btn btn-primary ml-2" onClick={() => handleLike(index)}>
              Like <span className="badge badge-light">{msg.likes}</span>
            </button>
          </div>
        ))}
      </div>
      <div className="input-container mt-3">
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary ml-2 button1" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;