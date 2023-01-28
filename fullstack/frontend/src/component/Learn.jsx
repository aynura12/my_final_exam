import React from "react";
import "../component/learn.scss";
const Learn = () => {
  return (
    <div className="learn">
      <div className="container">
        <div className="row">
          <div className="learn_left col-6">
            <div className="learn_text">
              <h3>
                Insights to help you do what you do better, faster and more
                profitably.
              </h3>
              <p>
                We understand the complexities of modern markets and translate
                them into real business solutions for automotive, financial,
                insuranc.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="learn_right col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
