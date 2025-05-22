import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

export default function ChannelList({ onSelectChannel }) {
  const [channels, setChannels] = useState([]);
  const [newChannel, setNewChannel] = useState("");

  const fetchChannels = async () => {
    const querySnapshot = await getDocs(collection(db, "channels"));
    setChannels(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  const handleAddChannel = async () => {
    if (!newChannel.trim()) return;
    await addDoc(collection(db, "channels"), { name: newChannel.trim() });
    setNewChannel("");
    fetchChannels();
  };

  return (
    <div style={{ borderRight: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <h3>Channels</h3>
      <input
        type="text"
        placeholder="New channel"
        value={newChannel}
        onChange={(e) => setNewChannel(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={handleAddChannel}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {channels.map((channel) => (
          <li key={channel.id}>
            <button
              onClick={() => onSelectChannel(channel.id)}
              style={{
                background: "none",
                border: "none",
                padding: "5px 0",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              #{channel.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
