import React from "react";
import "../component/servic.scss";
const Servic = () => {
  return (
    <div className="servic">
      <div className="container">
        <div className="servic_text">
          <p>INDUSTRY WE OFFER</p>
          <h1>Managed IT services customized for your industry</h1>
          <p>
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </p>
        </div>
        <div className="row">
            
          <div className="icons col-3"><img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg" alt="" /><h4>Industries & Manufacturing</h4></div>
          <div className="icons col-3"><img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services2.svg" alt="" /><h4>Industries & Manufacturing</h4></div>
          <div className="icons col-3"><img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services3.svg" alt="" /><h4>Industries & Manufacturing</h4></div>
          <div className="icons col-3"><img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services5.svg" alt="" /><h4>Industries & Manufacturing</h4></div>
        </div>
      </div>
    </div>
  );
};

export default Servic;
