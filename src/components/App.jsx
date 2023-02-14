import React from "react";

function App() {
  var [time, setTime] = React.useState(new Date().toLocaleTimeString());

  function changeTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(changeTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
