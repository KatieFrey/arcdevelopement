import { styled } from '@mui/material/styles';
import { Grid, IconButton } from '@mui/material';

export const GridBox = styled(Grid)`

`;

export const MainGrid = styled(Grid)(({theme}) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  paddingTop: "2em",
  paddingBottom: "10em"
}))

export const HeaderGrid = styled(Grid)(({theme}) => ({
  maxWidth: "40em"
}))

export const SaveEnergyTimeMoneyGrid = styled(Grid)(({theme}) => ({
  maxWidth: "40em"
}))

export const IconGrid = styled(Grid)(({theme}) => ({
  marginTop: "0.5em"
}))

export const IconContainer = styled(IconButton)`
  margin-left: auto;
  &:hover {
    background-color: transparent;
  }
`;

export const IconImage = styled('img')(({theme}) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))
