import React, { useState } from 'react';
import './ChatInput.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import { collection, addDoc, doc, serverTimestamp } from 'firebase/firestore';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId || !input.trim()) return;

    try {
      const messagesRef = collection(doc(db, 'rooms', channelId), 'messages');
      await addDoc(messagesRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: user?.displayName || 'Unknown User',
        userImage: user?.photoURL || '',
      });

      setInput('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase() || 'channel'}`}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInput;
