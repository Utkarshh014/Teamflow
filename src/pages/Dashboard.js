import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import ChannelList from "../components/ChannelList";

export default function Dashboard() {
  const { user } = useAuth();
  const [activeChannel, setActiveChannel] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      <ChannelList onSelectChannel={setActiveChannel} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Welcome, {user?.displayName}</h1>
        <p>Email: {user?.email}</p>
        <button onClick={() => signOut(auth)}>Sign Out</button>

        {activeChannel ? (
          <h2>Selected Channel: {activeChannel}</h2>
        ) : (
          <p>Select a channel from the left</p>
        )}
      </div>
    </div>
  );
}
