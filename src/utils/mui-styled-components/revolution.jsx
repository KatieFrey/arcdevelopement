import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

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
