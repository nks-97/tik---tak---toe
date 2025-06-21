import React from "react";

import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [feedbackVal, setFeedbackVal] = React.useState();
  const [feednameVal, setFeednameVal] = React.useState();
  const [click, setClick] = React.useState(false);

  function handlerFeedback(event) {
    setFeedbackVal(event.target.value);
  }

  function printValue() {
    setClick((c)=> !c);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedbackVal} onChange={handlerFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        
        {click ? (<Review feedback={feedbackVal} />): <Review />}
        

        <p>
          <button onClick={printValue}>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
