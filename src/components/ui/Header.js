import React, {useState, useEffect} from 'react';
import { Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { CompanyLogo } from '../../utils/emotion-styled-components';
import {TabsContainer, TabContainer, ButtonContainer, LogoButton, MenuContainer, MenuItemContainer, MarginDiv, DrawerContainer, IconContainer, MenuIconContainer, ListContainer, ListItemContainer, ListItemTextContainer, ListItemTextSelected, AppBarContainer} from '../../utils/mui-styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);


  console.log("Value: ", props.value)
  //console.log("Matches: ", matches)

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const menuOptions = [{name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0}, {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1}, {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2}, {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}]

  const routes = [{name: "Home", link: "/", activeIndex: 0}, {name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event)}, {name: "The Revolution", link: "/revolution", activeIndex: 2}, {name: "About Us", link: "/about", activeIndex: 3}, {name: "Contact Us", link: "/contact", activeIndex: 4}]

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if(props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if(route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
          default:
          break;
      }
    })
  }, [props.value, menuOptions, props.selectedIndex, routes])

  const tabs = () => (
    <React.Fragment>
      <TabsContainer value={props.value} textColor="inherit" onChange={handleChange} indicatorColor="secondary">
        {routes.map((route,index) => (
          <TabContainer key={`${route}${index}`} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}/>
        ))}
      </TabsContainer>
      <ButtonContainer variant="contained" color="secondary" component={Link} to={"/estimate"}>Free Estimate</ButtonContainer>
      <MenuContainer
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        disableAutoFocusItem
        elevation={0}
        keepMounted
        MenuListProps={{onMouseLeave: handleClose}}
        style={{zIndex: 1302}}
        >

        {menuOptions.map((option, index) => (
          <MenuItemContainer
            key={`${option}${index}`}
            component={Link}
            to={option.link}
            onClick={(event) => {handleMenuItemClick(event, index); props.setValue(1); handleClose(); }}
            selected={index === props.selectedIndex && props.value === 1}
            >
            {option.name}
          </MenuItemContainer>
        ))}
      </MenuContainer>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <DrawerContainer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <MarginDiv />
        <ListContainer disablePadding>
          {routes.map(route => (
            <ListItemContainer key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link} selected={props.value === route.activeIndex} onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex);}}>
              {props.value !== route.activeIndex ?
                <ListItemTextContainer disableTypography>{route.name}</ListItemTextContainer> :
                <ListItemTextSelected disableTypography>{route.name}</ListItemTextSelected>
                }
            </ListItemContainer>
          ))}
          <ListItemContainer
            onClick={() => {setOpenDrawer(false); props.setValue(5);}}
            divider
            button
            component={Link}
            to="/estimate"
            selected={props.value === 5}>
            {props.value !== 5 ?
                <ListItemTextContainer disableTypography>Free Estimate</ListItemTextContainer> :
                <ListItemTextSelected disableTypography>Free Estimate</ListItemTextSelected>
                }
          </ListItemContainer>
        </ListContainer>
      </DrawerContainer>
      <IconContainer onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIconContainer></MenuIconContainer>
      </IconContainer>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBarContainer position="fixed">
          <Toolbar disableGutters>
            <LogoButton disableRipple component={Link} to={"/"}>
              <CompanyLogo alt="company logo" src={logo} onClick={() => props.setValue(0)}/>
            </LogoButton>
            {matches ? drawer : tabs()}
          </Toolbar>
        </AppBarContainer>
      </ElevationScroll>
      <MarginDiv />
    </React.Fragment>
  )
}
// The Toolbar component gives the horizontal quality.
// AppBar has built in property of ' position="fixed" '.
