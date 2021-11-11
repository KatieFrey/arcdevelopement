import { styled } from '@mui/material/styles';
import { Grid, Typography, Avatar } from '@mui/material';


export const GridBox = styled(Grid)`

`;

export const RowGrid = styled(Grid)(({theme}) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em'
  }
}));

export const CustomSoftwareSVG = styled('div')`

`
export const MissionStatement = styled(Typography)(({theme}) => ({
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.5rem",
  maxWidth: "50em",
  lineHeight: 1.4
}))

export const TeamAvatar = styled(Avatar)(({theme}) => ({
  height: "25em",
  width: "25em",
  [theme.breakpoints.down("sm")]: {
    height: "20em",
    width: "20em",
    maxHeight: 300,
    maxWidth: 300
  }
}))
