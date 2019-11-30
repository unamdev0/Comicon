import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import React from "react";

const SideDrawer = props => {
  return (
   <Drawer
   anchor="right"
   open={props.open}
   onClose={()=>{props.close(false)}}>
       <List component="nav">
           <ListItem button onClick={()=>{}}>
               Events start in 
           </ListItem>
           <ListItem button onClick={()=>{}}>
               Price            
           </ListItem>
           <ListItem button onClick={()=>{}}>
               Featuring
           </ListItem>
           <ListItem button onClick={()=>{}}>
             More Info
           </ListItem>
       </List>
   </Drawer>
  );
};

export default SideDrawer;
