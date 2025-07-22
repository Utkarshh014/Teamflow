import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from 'react-router-dom';
import { StarBorderOutlined } from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { doc, onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import Message from './Message';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]); // ✅ Changed from null

  useEffect(() => {
    if (roomId) {
      const roomRef = doc(db, 'rooms', roomId);
      const messagesRef = collection(db, 'rooms', roomId, 'messages');
      const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));

      const unsubscribeRoom = onSnapshot(roomRef, (snapshot) => {
        setRoomDetails(snapshot.data());
      });

      const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
        setRoomMessages(snapshot.docs.map(doc => doc.data()));
      });

      return () => {
        unsubscribeRoom();
        unsubscribeMessages();
      };
    }
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong>#{roomDetails?.name || 'Loading...'}</strong>
            <StarBorderOutlined />
          </h4>
        </div>

        <div className='chat__headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }, index) => (
          <Message
            key={index}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>   
    </div>
  );
}

export default Chat;
