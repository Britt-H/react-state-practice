import React, { useState } from "react";
import './App.css';
import './CountButton'

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [alerts, setAlerts] = useState(false)
  // console.log("Subscribed status:", subscribed);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
      <countButton />
    </section>
  );
}

export default App;