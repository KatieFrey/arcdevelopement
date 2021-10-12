import { styled } from '@mui/material/styles';
import {Tabs, Tab, Button, Menu, MenuItem} from '@mui/material'
//import theme from "../components/ui/Theme";

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

export const LogoButton = styled(Button)`
  padding: 0;
`;

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
