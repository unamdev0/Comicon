import List from "@material-ui/core/List";
import { scroller } from "react-scroll";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import React from "react";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      delay: 100,
      duration: 1500,
      smooth: true
    });
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.close(false);
      }}
    >
      <List component="nav">
        <ListItem
          button
          onClick={() => {
            scrollToElement("carousel");
          }}
        >
          Event starts in
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("info");
          }}
        >
          Info
        </ListItem>

        <ListItem
          button
          onClick={() => {
            scrollToElement("highlight");
          }}
        >
          highlight{" "}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("pricing");
          }}
        >
          Price
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollToElement("location");
          }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
