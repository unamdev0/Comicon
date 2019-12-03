import React from "react";
import Button from "@material-ui/core/Button";
import TicketButton from "../../resources/images/icons/ticket.png";

const CustomButton = props => {
  return (
    <Button style={{backgroundColor:`${props.background}` ,color:`${props.color}`}} href="https://comicconindia.com/mumbai/" variant="contained">
      {props.text}
      <img src={TicketButton} className="iconImage" alt="ticketButton" />
    </Button>
  );
};

export default CustomButton;
