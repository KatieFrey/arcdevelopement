import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useTheme} from '@mui/material';
import lottie from "lottie-web";
import {GridBox, RowGrid, ArrowContainer, IconGrid, IconImage, HeaderGrid, CustomSoftwareSVG} from "../utils/mui-styled-components/mobileapps";
import {Typography, Hidden} from "@mui/material";
import {useMediaQuery} from "@mui/material";

import CallToAction from './ui/CallToAction';

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from "../animations/integrationAnimation/data.json";

export default function MobileApps(props){

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#integrationAnimation"),
      animationData: integrationAnimation,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }, [])

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <GridBox container direction="column">

      <RowGrid item container direction="row" justifyContent={matchesMD ? "center" : undefined} style={{marginTop: matchesXS ? "1em" : "2em"}}>
        <Hidden mdDown>
          <IconGrid item style={{marginRight: "1em", marginLeft: "-3.5em"}}>
            <ArrowContainer component={Link} to="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
              <IconImage src={backArrow} alt="Back to Custom Software Page"/>
            </ArrowContainer>
          </IconGrid>
        </Hidden>
        <HeaderGrid item container direction="column">
          <GridBox item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>iOS/Android App Development</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Mobile apps allow you to take your tools on the go.</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Convenience. Connection.</Typography>
          </GridBox>
        </HeaderGrid>
        <Hidden mdDown>
        <IconGrid item>
          <ArrowContainer component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
            <IconImage src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
          </ArrowContainer>
        </IconGrid>
        </Hidden>
      </RowGrid>

      <RowGrid item container direction={matchesSM ? "column" : "row"} style={{marginTop: "15em", marginBottom: "15em"}}>
        <GridBox item container direction="column" md>
          <GridBox item>
            <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Integration</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.</Typography>
            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.</Typography>
          </GridBox>
        </GridBox>
        <GridBox item md align="center">
          <CustomSoftwareSVG id="integrationAnimation" style={{maxWidth: "20em"}}/>
        </GridBox>
        <GridBox item container direction="column" md>
          <GridBox item>
            <Typography variant="h4" align={matchesSM ? "center" : "right"} gutterBottom>Simultaneous Platform Support</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time.</Typography>
            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>This significantly reduces costs and creates a more unified brand experience across all devices.</Typography>
          </GridBox>
        </GridBox>
      </RowGrid>

      <RowGrid item container direction={matchesMD ? "column" : "row"} style={{marginBottom: "15em"}}>
        <GridBox item container direction="column" alignItems="center" md>
          <GridBox item>
            <Typography variant="h4" align="center" gutterBottom>Extend Functionality</Typography>
          </GridBox>
          <GridBox item>
            <img src={swiss} alt="swiss army knife" />
          </GridBox>
        </GridBox>
        <GridBox item container direction="column" alignItems="center" md style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}>
          <GridBox item>
            <Typography variant="h4" align="center" gutterBottom>Extend Access</Typography>
          </GridBox>
          <GridBox item>
            <img src={access} alt="tear-one-off sign" style={{maxWidth: matchesXS ? "20em" : "28em"}}/>
          </GridBox>
        </GridBox>
        <GridBox item container direction="column" alignItems="center" md>
          <GridBox item>
            <Typography variant="h4" align="center" gutterBottom>Increase Engagement</Typography>
          </GridBox>
          <GridBox item>
            <img src={engagement} alt="app with notification" />
          </GridBox>
        </GridBox>
      </RowGrid>
      <GridBox item>
        <CallToAction setValue={props.setValue} />
      </GridBox>
    </GridBox>
  )
}
