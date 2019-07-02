import React from "react";
import Figure from "./Figure";

function App() {
  return (
    <div className="App">
      <Figure
        src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
        arWidth={3}
        arHeight={5}
      />
      <Figure
        src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
        arWidth={3}
        arHeight={5}
      >
        Автор: <a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>
      </Figure>
    </div>
  );
}

export default App;