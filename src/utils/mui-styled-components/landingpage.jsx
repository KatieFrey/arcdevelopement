import { styled } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';

export const GridBox = styled(Grid)`

`;

export const GridBoxMain = styled(Grid)(({theme}) => ({
  marginTop: "5em",
  [theme.breakpoints.down("md")]: {
    marginTop: "3em"
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2em"
  }
}))

export const TypographyGrid = styled(Grid)(({theme}) => ({
  minWidth: "21.5em",
  marginLeft: "1em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}));


export const GridSVG = styled(Grid)(({theme}) => ({
  maxWidth: "50em",
  minWidth: "21em",
  marginTop: "2em",
  marginLeft: "10%",
  [theme.breakpoints.down("sm")]:{
    maxWidth: "30em"
  }
}))

export const LandingPageSVG = styled('div')`
  height: 100%;
  width: 100%;
`
export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 45,
  width: 145,
  marginRight: 40,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const LearnButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.common.blue,
  color: theme.palette.common.blue,
  borderWidth: 2,
  textTransform: "none",
  borderRadius: 50,
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "0.9rem",
  height: 45,
  width: 145
}));
