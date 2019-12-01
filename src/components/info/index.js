import React from "react";
import calendar from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";

const Info = () => {
  return (
    <div className="bck_black">
      <div className="centre_wrapper">
        <Zoom bottom duration={500} delay={1000}>
          <div className="vn_wrapper">
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendar})` }}
                  ></div>
                  <div className="vn_title">Event Date & time</div>
                  <div className="vn_desc">7 Dec 2019@ 11:00 AM</div>
                </div>
              </div>
            </div>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${location})` }}
                  ></div>
                  <div className="vn_title">Event Date & time</div>
                  <div className="vn_desc">Bombay Exhibition Center,Mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Info;
