import React, { useState, useEffect } from "react";
import ChartComponent from "./components/ChartComponent";
import TradePanel from "./components/TradePanel";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Alerts from "./components/Alerts";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(10000); // Default balance

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Welcome to Mandaz Trade Platform</h1>
      </header>
      <main>
        {user ? (
          <>
            <Profile user={user} />
            <ChartComponent />
            <TradePanel balance={balance} />
            <Notifications />
            <Alerts />
          </>
        ) : (
          <button onClick={() => firebase.auth().signInAnonymously()}>Login</button>
        )}
      </main>
    </div>
  );
};

export default App;
