import React, {useState, useEffect} from 'react';
import { Toolbar, AppBar} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { CompanyLogo } from '../../utils/emotion-styled-components';
import {TabsContainer, TabContainer, ButtonContainer, LogoButton, MenuContainer, MenuItemContainer} from '../../utils/mui-styled-components';
import { Link } from 'react-router-dom';


import logo from '../../assets/logo.svg';


function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



export default function Header(props){
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1){
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2){
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3){
      setValue(3);
    } else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4)
    }
  }, [value])


  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LogoButton disableRipple component={Link} to={"/"}>
              <CompanyLogo alt="company logo" src={logo} onClick={() => setValue(0)}/>
            </LogoButton>
            <TabsContainer value={value} textColor="inherit" onChange={handleChange} indicatorColor="secondary">
              <TabContainer label="Home" component={Link} to={"/"} />
              <TabContainer
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
                label="Services"
                component={Link}
                to={"/services"}
                />
              <TabContainer label="The Revolution" component={Link} to={"/revolution"} />
              <TabContainer label="About Us" component={Link} to={"/about"} />
              <TabContainer label="Contact Us" component={Link} to={"/contact"} />
            </TabsContainer>
            <ButtonContainer variant="contained" color="secondary">Free Estimate</ButtonContainer>
            <MenuContainer
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              disableAutoFocusItem
              elevation={0}
              MenuListProps={{onMouseLeave: handleClose}}>
              <MenuItemContainer onClick={() => {handleClose(); setValue(1);}} component={Link} to="/services">Services</MenuItemContainer>
              <MenuItemContainer onClick={() => {handleClose(); setValue(1);}} component={Link} to="/customsoftware">Custom Software Development</MenuItemContainer>
              <MenuItemContainer onClick={() => {handleClose(); setValue(1);}} component={Link} to="/mobileapps">Mobile App Development</MenuItemContainer>
              <MenuItemContainer onClick={() => {handleClose(); setValue(1);}} component={Link} to="/websites">Website Development</MenuItemContainer>
            </MenuContainer>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{minHeight: "56px", marginBottom: "3em"}}></div>
    </React.Fragment>
  )
}
// The Toolbar component gives the horizontal quality.
// AppBar has built in property of ' position="fixed" '.
