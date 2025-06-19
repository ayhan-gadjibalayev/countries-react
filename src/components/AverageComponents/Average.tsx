import React, { useState } from "react";
import "../AverageComponents/average.css";
import Gihana from "./AfricanСountries/Gihana";
function Average() {
  const [title, currency] = useState();

  return (
    <div className="container-average">
        <div className="nrt" style={{marginLeft:"30px"}}>
          <Gihana title={"Ghana"} currency={"(GHS)"} />
          <Gihana title={"Nigeria"} currency={"(KES)"} />
          <Gihana title={"Segenal"} currency={"(ZAR)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Kenya"} currency={"(TZS)"} />
          <Gihana title={"Ethopia"} currency={"(UGX)"} />
          <Gihana title={"Togo"} currency={"(MAD)"} />
        </div>
        <div className="nrt">
          <Gihana title={"South Africa"} currency={"(TZS)"} />
          <Gihana title={"Burkina Faso"} currency={"(UGX)"} />
          <Gihana title={"Cameroon"} currency={"(MAD)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Tanzania"} currency={"(TND)"} />
          <Gihana title={"Benin"} currency={"(EGP)"} />
          <Gihana title={"Chad"} currency={"(CFA)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Uganda"} currency={"(ETB)"} />
          <Gihana title={"G. Bissau"} currency={"(CFA)"} />
          <Gihana title={"Cen. Afr. Rep."} currency={"(CFA)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Morocco"} currency={"(CFA)"} />
          <Gihana title={"Ivory Coast"} currency={"(CFA)"} />
          <Gihana title={"Congo"} currency={"(CFA)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Tunisia"} currency={"(CFA)"} />
          <Gihana title={"Mali"} currency={"(CFA)"} />
          <Gihana title={"E. Guinea"} currency={"(FCFA)"} />
        </div>
        <div className="nrt">
          <Gihana title={"Egypt"} currency={"(FCFA)"} />
          <Gihana title={"Niger"} currency={"(FCFA)"} />
        </div>
      </div>
  );
}

export default Average;
