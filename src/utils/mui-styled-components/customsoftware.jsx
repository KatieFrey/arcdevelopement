import { styled } from '@mui/material/styles';
import { Grid, IconButton } from '@mui/material';

export const GridBox = styled(Grid)`

`;
export const RowGrid = styled(Grid)(({theme}) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em'
  }
}))

export const MainGrid = styled(Grid)(({theme}) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  paddingTop: "2em",
  paddingBottom: "10em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: "1em"
  }
}))

export const HeaderGrid = styled(Grid)(({theme}) => ({
  maxWidth: "40em"
}))

export const SaveEnergyTimeMoneyGrid = styled(Grid)(({theme}) => ({
  maxWidth: "40em"
}))

export const ItemGrid = styled(Grid)(({theme}) => ({
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

export const CustomSoftwareSVG = styled('div')`

`

export const IconImage = styled('img')(({theme}) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))

export const RootsImage = styled('img')(({theme}) => ({
  height: "45em",
  width: "45em",
  //marginTop: "5em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))


