import {useState, useEffect} from 'react';
import CallToAction from './ui/CallToAction'
import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material';
import lottie from "lottie-web";
import {GridBox, IconContainer, IconImage, HeaderGrid, IconGrid, MainGrid, SaveEnergyTimeMoneyGrid, ItemGrid, CustomSoftwareSVG, RootsImage, RowGrid} from "../utils/mui-styled-components/customsoftware";
import {Typography, Hidden} from "@mui/material";
import {useMediaQuery} from "@mui/material"

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data.js';

export default function CustomSoftware(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#documentsAnimation"),
      animationData: documentsAnimation,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#scaleAnimation"),
      animationData: scaleAnimation,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#automationAnimation"),
      animationData: automationAnimation,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#uxAnimation"),
      animationData: uxAnimation,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: false, // boolean
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }, [])

  return(
    <GridBox container direction="column">

      <RowGrid item container direction="row" justifyContent={matchesMD ? "center" : undefined} style={{marginTop: matchesXS ? "1em" : "2em"}}>
        <Hidden mdDown>
          <IconGrid item style={{marginRight: "1em", marginLeft: "-3.5em"}}>
            <IconContainer component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
              <IconImage src={backArrow} alt="Back to Services Page"/>
            </IconContainer>
          </IconGrid>
        </Hidden>
        <HeaderGrid item container direction="column">
          <GridBox item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>Custom Software Development</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Whether we're replacing old software or inventing a new solutions, Arc Deveolpment is here to help your business tackle technology.</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Using regular commercial software leaves you with a lot of stuff you don't need without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective and improving your workflow and reducing costs than generalized options.</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>We create exactly what you want, exactly how you want it.</Typography>
          </GridBox>
        </HeaderGrid>
        <Hidden mdDown>
        <IconGrid item>
          <IconContainer component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
            <IconImage src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
          </IconContainer>
        </IconGrid>
        </Hidden>
      </RowGrid>

      <RowGrid item container direction="row" justifyContent="center" style={{marginTop:"15em", marginBottom:"20em"}}>
        <SaveEnergyTimeMoneyGrid item container direction="column" md alignItems="center">
          <GridBox item>
            <Typography variant="h4">Save Energy</Typography>
          </GridBox>
          <GridBox>
            <img src={lightbulb} alt="lightbulb" />
          </GridBox>
        </SaveEnergyTimeMoneyGrid>
        <SaveEnergyTimeMoneyGrid item container direction="column" md alignItems="center" style={{ marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}}>
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
      </RowGrid>

      <RowGrid item container alignItems={matchesMD ? "center" : undefined}direction={matchesMD ? "column" : "row"} justifyContent="space-between">
        <ItemGrid item container md style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"}>
          <GridBox item container direction="column" md>
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>Digital Documents & Data</Typography>
            </GridBox>
            <GridBox item>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                Billions are spent annually on the purchasing, printing and distributions of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate you communication, and help the Earth.
              </Typography>
            </GridBox>
          </GridBox>
          <GridBox item md>
            <CustomSoftwareSVG id="documentsAnimation" style={{minHeight: 250, maxHeight: 275, maxWidth: 275}}/>
          </GridBox>
        </ItemGrid>
        <ItemGrid item container direction={matchesSM ? "column" : "row"}>
          <GridBox item md>
            <CustomSoftwareSVG id="scaleAnimation" style={{maxHeight: 260, maxWidth: 280}}/>
          </GridBox>
          <GridBox item container direction="column" md>
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>Scale</Typography>
            </GridBox>
            <GridBox item>
              <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                Whether you're a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
              </Typography>
            </GridBox>
          </GridBox>
        </ItemGrid>
      </RowGrid>

      <RowGrid item container direction="row" style={{marginTop: "20em", marginBottom: "20em"}}>
        <GridBox item container direction="column" alignItems="center">
          <GridBox item>
            <RootsImage src={roots} alt="tree with roots extending out" height={matchesSM ? "300em" : "450em"} width={matchesSM ? "300em" : "450em"}/>
          </GridBox>
          <ItemGrid item>
            <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
            <Typography variant="body1" align="center" paragraphy> Many problems are merely symptoms of larger underlying issues.</Typography>
            <Typography variant="body1" align="center" paragraphy>We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology</Typography>
          </ItemGrid>
        </GridBox>
      </RowGrid>

      <RowGrid item container alignItems={matchesMD ? "center" : undefined}direction={matchesMD ? "column" : "row"} justifyContent="space-between" style={{marginBottom: "20em"}} >
        <ItemGrid item container md style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"}>
          <GridBox item container direction="column" md>
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>Automation</Typography>
            </GridBox>
            <GridBox item>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                Why waste time when you don't have to?.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                We can help you identify processes with time tor event based actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                Increasing efficiency increases profits, leaving you more time to focus on you business, not busywork.
              </Typography>
            </GridBox>
          </GridBox>
          <GridBox item md>
            <CustomSoftwareSVG id="automationAnimation" style={{maxHeight: 290, maxWidth: 280}}/>
          </GridBox>
        </ItemGrid>
        <ItemGrid item container direction={matchesSM ? "column" : "row"}>
          <GridBox item md>
            <CustomSoftwareSVG id="uxAnimation" style={{maxHeight: 310, maxWidth: 155}}/>
          </GridBox>
          <GridBox item container direction="column" md>
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>User Experience Design</Typography>
            </GridBox>
            <GridBox item>
              <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                A good design that isn't usable isn't a good design
              </Typography>
              <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
              <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                By prioritizing users and the real ways they interact with technology we're able to develp unique, personable experiences that solve problems rather than crate new ones.
              </Typography>
            </GridBox>
          </GridBox>
        </ItemGrid>
      </RowGrid>
      <GridBox item>
        <CallToAction setValue={props.setValue} />
      </GridBox>
    </GridBox>
  )
}

