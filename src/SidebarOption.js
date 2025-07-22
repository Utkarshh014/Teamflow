import React from 'react';
import './SidebarOption.css';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore'

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate('/');
    }
  };

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      try {
        await addDoc(collection(db, 'rooms'), {
          name: channelName
        });
      } catch (error) {
        console.error("Error adding channel: ", error);
      }
    }
  };

  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption__channel'>
          <span className='sidebarOption__hash'>#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
