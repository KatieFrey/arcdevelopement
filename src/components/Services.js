import React from 'react';
import { Link } from 'react-router-dom';
import { GridBox, ServicesButton, IconImage, ServiceGrid, SpecialText, LearnButton } from '../utils/mui-styled-components/services';
import { Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import ButtonArrow from './ui/ButtonArrow';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

export default function Services(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return(
    <GridBox container direction="column">
      <GridBox item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
        <Typography align={matchesSM ? "center" : undefined} variant="h2" gutterBottom>Services</Typography>
      </GridBox>
      <GridBox item /*---iOS/Android Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : "flex-end"} style={{marginTop: matchesSM ? "1em" : "5em"}}>
          <GridBox item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Extend Functionality. Extend Access. Increase Engagement.</Typography>
            <Typography variant="subtitle1">Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.</Typography>
            <LearnButton component={Link} to="/mobileapps" variant="outlined" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <IconImage alt="mobile phone icon" src={mobileAppsIcon} width="250em"/>
          </GridBox>
        </ServiceGrid>
      </GridBox>
      <GridBox item /*---Custom Software Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : undefined}>
          <GridBox item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Save Energy. Save Time. Save Money.</Typography>
            <Typography variant="subtitle1">Complete digital solutions, from investigation to <SpecialText>celebration</SpecialText></Typography>
            <LearnButton component={Link} to="/customsoftware" variant="outlined" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item>
            <IconImage alt="custom software icon" src={customSoftwareIcon} />
          </GridBox>
        </ServiceGrid>
      </GridBox>
      <GridBox item /*---Websites Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : "flex-end"} style={{marginBottom: "10em"}}>
          <GridBox item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Reach More. Discover More. Sell More.</Typography>
            <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
            <LearnButton component={Link} to="/websites" variant="outlined" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <IconImage alt="website icon" src={websitesIcon} width="250em"/>
          </GridBox>
        </ServiceGrid>
      </GridBox>
    </GridBox>
  )
}
