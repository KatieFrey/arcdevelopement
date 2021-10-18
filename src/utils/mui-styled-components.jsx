import { styled } from '@mui/material/styles';
import {Tabs, Tab, Button, Menu, MenuItem, SwipeableDrawer, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MarginDiv = styled('div')(({ theme }) => ({
  minHeight: "56px",
  marginBottom: "4em",

  [theme.breakpoints.down('md')]: {
    marginBottom: "3em",
  },
  [theme.breakpoints.down('xs')]: {
    marginBottom: "2em",
  },
}));

export const DrawerContainer = styled(SwipeableDrawer)`

`;

export const IconContainer = styled(IconButton)`
  margin-left: auto;
  &:hover {
    background-color: transparent;
  }
`;

export const MenuIconContainer = styled(MenuIcon)`
  height: 50px;
  width: 50px;
`;

export const TabsContainer = styled(Tabs)`
  margin-left: auto;
`;

export const TabContainer = styled(Tab)`
  font-family: Raleway;
  text-transform: none;
  font-weight: 700;
  font-size: 1rem;
  min-width: 10;
  margin-left: 25px;
`;

export const ButtonContainer = styled(Button)`
  border-radius: 50px;
  margin-left: 50px;
  margin-right: 25px;
  font-family: Pacifico;
  font-size: 1rem;
  text-transform: none;
  height: 45px;
  color: white;
`;

export const LogoButton = styled(Button)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.down('md')]: {
    height: "8em",
  },
  [theme.breakpoints.down('xs')]: {
    height: "5.5em",
  },
}));

// export const LogoButton = styled(Button)`
//   padding: 0;
// `;

export const MenuContainer = styled(Menu)`
  padding: 0;
  margin: 0;
`
export const MenuItemContainer = styled(MenuItem)`
  background-color: #0B72B9;
  color: white;
  font-family: Raleway;
  text-transform: none;
  font-weight: 700;
  font-size: 1rem;
  &:first-child {
    margin-top: -10px;
    font-size: 1.25rem;
  }
  &:hover {
    color: #FFBA60;
  }
`
