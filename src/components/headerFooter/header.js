import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./sideDrawer";
export default class Header extends Component {
  state = {
    drawer: false,
    showHeader:false
  };

  HandleScroll=()=>{
    if(window.scrollY>0){
    this.setState({showHeader:true})
    }
    else{
      this.setState({showHeader:false})
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.HandleScroll)
  }

  toggleDrawer(value) {
    this.setState({ drawer: value });
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader?"inherit":"black",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar style={{
          color: this.state.showHeader?"black":"white",
        }}>
          <div className="headerLogo">
            <div className="righteous title">Comicon India</div>
            <div className="subTitle">Mumbai</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
         <SideDrawer open={this.state.drawer} close={(value)=>{this.toggleDrawer(value)}}></SideDrawer>
        </Toolbar>
      </AppBar>
    );
  }
}
