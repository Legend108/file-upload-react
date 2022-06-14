import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./index.scss";
import Typewriter from "typewriter-effect";

function About() {
  const [progress, setProgress] = useState(100);

  console.log("Hello, World!");
  return (
    <div>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="center">
        <h1 className="heading" style={{ marginBottom: "4vh" }}>
          What we make
        </h1>

        <ul>
          <li className="space-right space-below center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Coding tutorials, free forever`)
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
            <br />
          </li>
          <li className="space-right" style={{ marginTop: "15px" }}>
            <img
              src={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
              draggable={false}
              width={180}
              height={120}
            />
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
              }
              draggable={false}
              width={130}
              height={120}
            />
            <img
              src={
                "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
              }
              draggable={false}
              width={115}
              height={120}
              style={{ marginLeft: "40px" }}
            />
            <img
              src={
                "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              }
              draggable={false}
              width={120}
              height={120}
              style={{ marginLeft: "40px" }}
            />
            <img
              src={
                "https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png"
              }
              draggable={false}
              width={130}
              height={125}
              style={{ marginLeft: "30px" }}
            />

            <h5 className="center">in various languages and frameworks</h5>
          </li>
        </ul>

        <h1 className="center heading">By two developers</h1>

        <div className="card-group">
          <div className="card">
            <div className="card-heading">
              <img
                className="card-image"
                src={
                  "https://cdn.discordapp.com/avatars/777236834064531467/83b4937abbc4e6cca1e509aa9af432ce.webp?size=128"
                }
                draggable={false}
              />
              <h1 className="card-title">
                Legend108
                <br />
                <span className="card-subheading">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Every site, and a few videos")
                        .callFunction(() => {})
                        .pauseFor(100 * 60 * 60 * 24)
                        .deleteAll()
                        .callFunction(() => {})
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              deserunt rerum, reiciendis blanditiis tempore dignissimos ipsum
              sequi modi neque nam qui inventore, deleniti est doloremque
              dolorum pariatur odio, quidem consequatur aspernatur id.
            </p>
            <div className="card-footer">
              <Link className="btn" to="/developers/Legend108">
                Profile
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <img
                src={
                  "	https://cdn.discordapp.com/avatars/895373667503063053/2fc8f2fc43a8d360f5d5371212e8c56c.webp?size=80"
                }
                className="card-image"
                draggable={false}
              />
              <h1 className="card-title">
                ZeroDeaths{" "}
                <span className="card-subheading ">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Most videos")
                        .callFunction(() => {})
                        .pauseFor(100 * 60 * 60 * 24)
                        .deleteAll()
                        .callFunction(() => {})
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              deserunt rerum, reiciendis blanditiis tempore dignissimos ipsum
              sequi modi neque nam qui inventore, deleniti est doloremque
              dolorum pariatur odio, quidem consequatur aspernatur id.
            </p>
            <div className="card-footer">
              <Link className="btn" to="/developers/ZeroDeaths">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
