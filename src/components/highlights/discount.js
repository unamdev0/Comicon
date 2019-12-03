import React from "react";
import Fade from "react-reveal/Fade";
import CustomButton from "../utils/button";

const Discount = () => {
  return (
    <div className="centre_wrapper">
      <div className="discount_wrapper">
        <Fade>
          <div className="discount_percentage">
            <span>10%</span>
            <span>OFF</span>
          </div>
          <div className="discount_description">
            <h3>SUPERFAN TWO-DAY PASS</h3>
            <p>
              Designed for the Greatest Geeks in the Galaxy! Show your love for
              pop-culture with the all-access SuperFan pass which comes
              power-packed with exclusive goodies, super powers & perks, at just
              INR 1999 <del>2499</del> (Online Only). Limited quantities
              available, grab ‘em before they sell out!
            </p>
            <CustomButton
              text="Purchase tickets"
              background="red"
              color="white"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Discount;
