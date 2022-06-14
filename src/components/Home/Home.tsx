import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Typewriter from "typewriter-effect";
import "./index.scss";

function App() {
  const [progress, setProgress] = useState(100);
  return (
    <div>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="center">
        <h1 className="text-lg">Welcome to CodeLead</h1>
        <h1 className="text-typed-out">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Coding simplified")
                .callFunction(() => {})
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {})
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Link className="btn space-above" to="/about">
          What we do
        </Link>
      </div>
    </div>
  );
}

export default App;
