import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material';
import lottie from "lottie-web";
import {GridBox, IconContainer, IconImage, HeaderGrid, IconGrid, MainGrid, SaveEnergyTimeMoneyGrid} from "../utils/mui-styled-components/customsoftware";
import {Typography} from "@mui/material";
import {useMediaQuery} from "@mui/material"

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";

export default function CustomSoftware(props) {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#landing-page"),
      animationData: backArrow,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  })

  return(
    <MainGrid container direction="column">
      <GridBox item container direction="row">
        <IconGrid item style={{marginRight: "1em", marginLeft: "-3.5em"}}>
          <IconContainer component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
            <IconImage src={backArrow} alt="Back to Services Page"/>
          </IconContainer>
        </IconGrid>
        <HeaderGrid item container direction="column">
          <GridBox item>
            <Typography variant="h2">Custom Software Development</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" paragraph>Whether we're replacing old software or inventing a new solutions, Arc Deveolpment is here to help your business tackle technology.</Typography>
            <Typography variant="body1" paragraph>Using regular commercial software leaves you with a lot of stuff you don't need without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency</Typography>
            <Typography variant="body1" paragraph>Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective and improving your workflow and reducing costs than generalized options.</Typography>
            <Typography variant="body1" paragraph>We create exactly what you want, exactly how you want it.</Typography>
          </GridBox>
        </HeaderGrid>
        <IconGrid item>
          <IconContainer component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
            <IconImage src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
          </IconContainer>
        </IconGrid>
      </GridBox>
      <GridBox item container direction="row" justifyContent="center" style={{marginTop:"15em", marginBottom:"20em"}}>
        <SaveEnergyTimeMoneyGrid item container direction="column" md alignItems="center">
          <GridBox item>
            <Typography variant="h4">Save Energy</Typography>
          </GridBox>
          <GridBox>
            <img src={lightbulb} alt="lightbulb" />
          </GridBox>
        </SaveEnergyTimeMoneyGrid>
        <SaveEnergyTimeMoneyGrid item container direction="column" md alignItems="center">
          <GridBox item>
            <Typography variant="h4">Save Time</Typography>
          </GridBox>
          <GridBox>
            <img src={stopwatch} alt="stopwatch" />
          </GridBox>
        </SaveEnergyTimeMoneyGrid>
        <SaveEnergyTimeMoneyGrid item container direction="column" md alignItems="center">
          <GridBox item>
            <Typography variant="h4">Save Money</Typography>
          </GridBox>
          <GridBox>
            <img src={cash} alt="cash" />
          </GridBox>
        </SaveEnergyTimeMoneyGrid>
      </GridBox>
    </MainGrid>
  )
}

