import React from "react";
import CustomButton from "../utils/button";
const PricingBox = props => {
  return (
    <div className="pricing_item">
      <div className="pricing_inner_wrapper">
        <h2 className="pricing_title">{props.title}</h2>
        <div className="pricing_description">
          {props.description}<br/><br/>
          <CustomButton
            background="yellow"
            color="black"
            text="Purchase Tickets"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
