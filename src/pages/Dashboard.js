import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}
