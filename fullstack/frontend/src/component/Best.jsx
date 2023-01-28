import React from "react";
import "../component/best.scss";
const Best = () => {
  return (
    <div className="best">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="best_text">
              <h1>Best IT Solution in your city</h1>
              <p>
                Prevent data loss with encrypted storage and virtualized
                recovery, then enjoy increased productivity.
              </p>
              <button>Find out more </button>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Best;
