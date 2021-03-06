import { styled } from '@mui/material/styles';
import {Tabs, Tab, Button, Menu, MenuItem, SwipeableDrawer, IconButton, List, ListItem, ListItemText, AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const AppBarContainer = styled(AppBar)(({theme}) => ({
  zIndex: theme.zIndex.modal + 1
}))


export const MarginDiv = styled('div')(({ theme }) => ({
  minHeight: "56px",
  marginBottom: "4em",

  [theme.breakpoints.down('md')]: {
    marginBottom: "3em",
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: "2em",
  },
}));

export const DrawerContainer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: `${theme.palette.common.blue}`,
  }
}));

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

export const HeaderEstimateButton = styled(Button)(({theme}) => ({
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  fontFamily: "Pacifico",
  fontSize: "1rem",
  textTransform: "none",
  height: "45px",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const LogoButton = styled(Button)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.down('md')]: {
    height: "8em",
  },
  [theme.breakpoints.down('xs')]: {
    height: "5.5em",
  },
}));

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
export const ListContainer = styled(List)`

`;

export const ListItemContainer = styled(ListItem)(({theme}) => ({
  '&:last-child': {
    backgroundColor: "#FFBA60",
  },
  '& .Mui-selected': {
    boxShadow: `0px 0px 0px 8px ${theme.palette.common.orange}`
  }
}));

export const ListItemTextContainer = styled(ListItemText)`
  font-family: Raleway;
  text-transform: none;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  opacity: 0.7;
`;

export const ListItemTextSelected = styled(ListItemText)`
  font-family: Raleway;
  text-transform: none;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  opacity: 1;
`;


