import React from 'react';
import { GridBox, LearnButton, EstimateButton, CallToActionGrid } from '../../utils/mui-styled-components/calltoaction';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import ButtonArrow from './ButtonArrow';
import { useMediaQuery } from '@mui/material';

export default function CallToAction() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return(
    <CallToActionGrid container style={{height: "60em"}} alignItems="center" justifyContent={matchesSM ? "center" : "space-between"} direction={matchesSM ? "column" : "row"}>
      <GridBox item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
        <GridBox container direction="column">
          <GridBox item>
            <Typography variant="h2">
              Simple Software. <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem"}}>
              Take advantage of the 21st Century.
            </Typography>
              <GridBox container item justifyContent={matchesSM ? "center" : undefined}>
                <LearnButton variant="outlined">
                  <span style={{ marginRight: "5em"}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </LearnButton>
              </GridBox>
          </GridBox>
        </GridBox>
      </GridBox>
      <GridBox item >
        <EstimateButton variant="contained">Free Estimate</EstimateButton>
      </GridBox>
    </CallToActionGrid>
  )
};
