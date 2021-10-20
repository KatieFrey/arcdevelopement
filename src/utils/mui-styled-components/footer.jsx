import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const FooterDiv = styled('footer')(({theme}) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

export const AdornmentImage = styled('img')(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down('md')]: {
    width: "21em",
  },
  [theme.breakpoints.down('sm')]: {
    width: "15em",
  },
}));

export const GridMain = styled(Grid)`
  position: absolute;
`;

export const GridLink = styled(Grid)`
  color: white;
  font-family: Arial;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
`;

export const GridItem = styled(Grid)`
  margin: 3em;
`;

export const GridSocial = styled(Grid)(({theme}) => ({
  position: "absolute",
  marginTop: "-6em",
  right: "1.5em",
  [theme.breakpoints.down("sm")]: {
    right: "0.6em"
  }
}))

export const GridBox = styled(Grid)`

`;

export const IconImage = styled('img')(({ theme }) => ({
  height: "4em",
  width: "4em",
  [theme.breakpoints.down("sm")]: {
    height: "2.5em",
    width: "2.5em",
  }
}));
