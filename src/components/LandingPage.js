import {useEffect} from 'react';
//import Lottie from 'react-lottie';
import { useTheme } from '@mui/material';
import lottie from "lottie-web";
import {LandingPageSVG, GridBox, GridSVG, EstimateButton, LearnButtonHero, TypographyGrid, SpecialText, LearnButton, IconImage, GridBoxMain, ServiceGrid} from '../utils/mui-styled-components/landingpage';
import { Typography } from '@mui/material';
import ButtonArrow from './ui/ButtonArrow';

import { useMediaQuery } from '@mui/material';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

export default function LandingPage() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#landing-page"),
      animationData: animationData,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  })


  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // }
  //<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
  return (
    <GridBoxMain container direction="column" style={{marginTop: "5em"}}>
      <GridBox item /*---Hero Block---*/ >
        <GridBox container justifyContent="flex-end" alignItems="center" direction="row">
          <TypographyGrid sm item>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <GridBox container justifyContent="center" style={{marginTop: "1em"}}>
              <GridBox item>
                <EstimateButton variant="contained">Free Estimate</EstimateButton>
              </GridBox>
              <GridBox item>
                <LearnButtonHero variant="outlined">
                  <span style={{ marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </LearnButtonHero>
              </GridBox>
            </GridBox>
          </TypographyGrid>
          <GridSVG sm item>
            <LandingPageSVG id="landing-page" />
          </GridSVG>
        </GridBox>
      </GridBox>
      <GridBox item /*---Custom Software Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : undefined}>
          <GridBox item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Save Energy. Save Time. Save Money.</Typography>
            <Typography variant="subtitle1">Complete digital solutions, from investigation to <SpecialText>celebration</SpecialText></Typography>
            <LearnButton variant="outlined">
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item>
            <IconImage alt="custom software icon" src={customSoftwareIcon} />
          </GridBox>
        </ServiceGrid>
      </GridBox>
      <GridBox item /*---iOS/Android Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : "flex-end"}>
          <GridBox item style={{ textAlign: matchesSM ? "center" : undefined}}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Extend Functionality. Extend Access. Increase Engagement.</Typography>
            <Typography variant="subtitle1">Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.</Typography>
            <LearnButton variant="outlined">
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <IconImage alt="mobile phone icon" src={mobileAppsIcon} />
          </GridBox>
        </ServiceGrid>
      </GridBox>
      <GridBox item /*---Websites Block---*/>
        <ServiceGrid container direction="row" justifyContent={matchesSM ? "center" : undefined}>
          <GridBox item style={{ marginLeft: matchesSM ? 0 : "5em",textAlign: matchesSM ? "center" : undefined}}>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" style={{marginBottom: "1em"}}>Reach More. Discover More. Sell More.</Typography>
            <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
            <LearnButton variant="outlined">
              <span style={{ marginRight: 10}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </LearnButton>
          </GridBox>
          <GridBox item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <IconImage alt="website icon" src={websitesIcon} />
          </GridBox>
        </ServiceGrid>
      </GridBox>
    </GridBoxMain>
  )
}
