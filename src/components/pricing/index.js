import React, { Component } from "react";
import PricingBox from "./box";

export default class Pricing extends Component {
  render() {
    return (
      <div className="bck_black">
        <div className="centre_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            <PricingBox
              title="150"
              description="Saturday pass.Provides entry to ONE Individual on 7th Dec 2019
- Includes assured goodies"
            />
            <PricingBox
              title="150"
              description="Sunday Pass.Provides entry to ONE Individual on 7th Dec 2019
- Includes assured goodies"
            />
            <PricingBox
              title="1999"
              description="2-Days Pass(Saturday & Sunday).Provides entry to ONE Individual on 7th Dec 2019
- Includes assured goodies"
            />
          </div>
        </div>
      </div>
    );
  }
}
