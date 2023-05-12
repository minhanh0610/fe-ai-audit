import React from "react";
import openAi from "../assets/The abstract combination of Blockchain and AI 1 (1).png";
import imgData from "../assets/pngtree.png";
import rocket2 from "../assets/pngwing 1.png";
import rocket3 from "../assets/pngwing 2.png";
import rocket from "../assets/rocket.png";

import rocket4 from "../assets/pngwing 3.png";

import "./Home.css";
import Navbar from "./Navbar";
import "./grid.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3 className="title">Audit your AI API with ease</h3>
            <p className="desc">
              Streamline your AI API auditing process and earn trust with our
              web platform. Our cutting-edge technology leverages the power of
              blockchain to issue tamper-proof digital certificates that provide
              irrefutable proof of compliance. With our user-friendly interface
              and comprehensive analysis, you'll have peace of mind knowing that
              your AI system is transparent, reliable, and ethical. Join us
              today and take the first step towards building a better future
              powered by AI.
            </p>
            <button>
              <img src={rocket} />
              <h6>get started now!</h6>
              <img src={rocket} />
            </button>
          </div>
          <div className="col-md-5">
            <img src={imgData} alt="" />
          </div>
        </div>

        <div className="list-latest">
          <h5>Latest certifications</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-ai">
                <div className="top-item">
                  <img src={openAi} alt="" />
                  <span>Open AI</span>
                </div>
                <div className="bottom-desc">
                  <div className="model-item">
                    <div className="model-title">Model name</div>
                    <div className="model-value">DALL-E</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Issued time</div>
                    <div className="model-value">2022-05-03</div>
                  </div>
                  <div className="model-item">
                    <div className="model-title">Result</div>
                    <div className="model-value success">DALL-E</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-leader">
          <h5>Leaderboard</h5>

          <div className="row">
            <div className="col-md-4">
              <div className="item-leader">
                <div className="wrap">
                  <h6 className="count">#1</h6>
                  <img src={openAi} alt="" />
                  <h3>Open AI</h3>
                  <span>223 certifications</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-leader">
                <div className="wrap">
                  <h6 className="count">#1</h6>
                  <img src={openAi} alt="" />
                  <h3>Open AI</h3>
                  <span>223 certifications</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-leader">
                <div className="wrap">
                  <h6 className="count">#1</h6>
                  <img src={openAi} alt="" />
                  <h3>Open AI</h3>
                  <span>223 certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-work">
          <h5>How it works?</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="item-work">
                <div className="wrap">
                  <div className="top-title">Register as an executor</div>
                  <div className="work-desc">
                    Here is a guide on how to join the system as an executor.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-work">
                <div className="wrap">
                  <div className="top-title">Register as an executor</div>
                  <div className="work-desc">
                    Here is a guide on how to join the system as an executor.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-work">
                <div className="wrap">
                  <div className="top-title">Register as an executor</div>
                  <div className="work-desc">
                    Here is a guide on how to join the system as an executor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-partner">
          <h5>Our partners & sponsors</h5>
          <div className="wrap-part">
            <div className="row">
              <div className="col-md-4">
                <img className="gg1" src={rocket2} alt="" />
              </div>
              <div className="col-md-4">
                <img className="gg2" src={rocket3} alt="" />
              </div>
              <div className="col-md-4">
                <img className="gg3" src={rocket4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
