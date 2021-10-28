import { styled } from '@mui/material/styles';
import { Grid, Button, Card } from '@mui/material';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';

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

export const LearnButtonHero = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.9rem",
  height: 45,
  width: 145
}));

export const SpecialText = styled('span')(({theme}) => ({
  fontFamily: "Pacifico",
  color: theme.palette.common.orange
}))

export const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em"
  }
}));

export const IconImage = styled('img')(({theme}) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))

export const ServiceGrid = styled(Grid)(({theme}) => ({
  marginTop: "12em",
  [theme.breakpoints.down("sm")]: {
    padding: 25
  }
}))

export const RevolutionBackground = styled('div')(({theme}) => ({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
}));

export const RevolutionCard = styled(Card)(({theme}) => ({
  position: "absolute",
  boxShadow: theme.shadows[10], borderRadius: 15,
  padding: "10em",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "8em",
    paddingBottom: "8em",
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 9,
    width: "100%"
  }
}));

export const InfoBackground = styled('div')(({theme}) => ({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
}));

export const InfoButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em"
  },
  color: "white",
  borderColor: "white"
}));
