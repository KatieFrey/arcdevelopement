import { styled } from '@mui/material/styles';
import { Grid, IconButton, Typography } from '@mui/material';

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

export const HeaderGrid = styled(Grid)(({theme}) => ({
  maxWidth: "40em"
}))

export const IconGrid = styled(Grid)(({theme}) => ({
  marginTop: "0.5em"
}))

export const ArrowContainer = styled(IconButton)`
  margin-left: auto;
  &:hover {
    background-color: transparent;
  }
`;

export const CustomSoftwareSVG = styled('div')`

`

export const IconImage = styled('img')(({theme}) => ({

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0
  }
}))

export const ParagraphContainer = styled(Typography)(({theme}) => ({

}))
