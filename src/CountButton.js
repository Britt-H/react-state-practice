import React, { useState } from "react";

function CountButton () {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
      function incrementNumberOfClicks() {
        setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
      }
      return (
        <section>
          <button onClick={incrementNumberOfClicks}>Click Count: {numberOfClicks}</button>
        </section>
      )
  }
  
  export default CountButton;