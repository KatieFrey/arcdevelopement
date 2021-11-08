import { styled } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';

export const GridBox = styled(Grid)`

`;

export const ServicesButton = styled(Button)(({theme}) => ({

}));

export const IconImage = styled('img')(({theme}) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))

export const ServiceGrid = styled(Grid)(({theme}) => ({
  marginTop: "10em",
  [theme.breakpoints.down("sm")]: {
    padding: 25
  }
}));

export const SpecialText = styled('span')(({theme}) => ({
  fontFamily: "Pacifico",
  color: theme.palette.common.orange
}));

export const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em"
  }
}));
