import React from "react";
import PlayersList from "./components/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
