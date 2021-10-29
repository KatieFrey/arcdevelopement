import { styled } from '@mui/material/styles';
import { Grid, Button} from '@mui/material';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';


export const GridBox = styled(Grid)`

`;

export const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em"
  }
}));

export const CallToActionBackground = styled('div')(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mobileBackground})`
  }
}))

export const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 80,
  width: 205,
  fontSize: "1.5rem",
  marginRight: "5em",
  marginLeft: "2em",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0
  }
}));

export const CallToActionGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  height: "60em",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mobileBackground})`,
    backgroundAttachment: "inherit"
  }
}))
