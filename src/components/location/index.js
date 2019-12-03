import React from "react";

const Location = () => {
  return (
      <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.022289444566!2d72.85139011490232!3d19.150501587045117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ca86e01c89%3A0xa987fb34838933c4!2sBombay%20Exhibition%20Centre%2C%20NESCO%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1575383142443!5m2!1sen!2sin"
      width="100%"
      height="450px"
      frameborder="0"
      allowFullScreen
    ></iframe>
    <div className="location_tag">
        <div>Location</div>
    </div>
    </div> 
  );
};

export default Location;
