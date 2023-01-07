import React from "react";
import Login from "./Login";

const userIsRegistered = true;


function App() {

return (
    <div className="container">
      <Login isRegistered={userIsRegistered}/>
    </div>
)

}

export default App;