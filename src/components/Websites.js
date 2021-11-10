import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useTheme} from '@mui/material';

import {GridBox, RowGrid, ArrowContainer, IconGrid, IconImage, HeaderGrid} from "../utils/mui-styled-components/mobileapps";
import {Typography, Hidden} from "@mui/material";
import {useMediaQuery} from "@mui/material";

import CallToAction from './ui/CallToAction';

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';
import { ParagraphContainer } from '../utils/mui-styled-components/websites';


export default function Websites(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  return (
    <GridBox container direction="column">
      <RowGrid item container direction="row" justifyContent={matchesMD ? "center" : undefined} style={{marginTop: matchesXS ? "1em" : "2em"}}>
        <Hidden mdDown>
          <IconGrid item style={{marginRight: "1em", marginLeft: "-3.5em"}}>
            <ArrowContainer component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
              <IconImage src={backArrow} alt="Back to iOS/Android App Development Page"/>
            </ArrowContainer>
          </IconGrid>
        </Hidden>
        <HeaderGrid item container direction="column">
          <GridBox item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>Website Development</Typography>
          </GridBox>
          <GridBox item>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>Having a website is a necessity in today's business world. They give you one central, public location to let people know who you are, what you do, and why you're the best at it.</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.</Typography>
          </GridBox>
        </HeaderGrid>
        <Hidden mdDown>
        <IconGrid item>
          <ArrowContainer component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
            <IconImage src={forwardArrow} alt="Forward to Services Page"/>
          </ArrowContainer>
        </IconGrid>
        </Hidden>
      </RowGrid>

      <RowGrid item container direction={matchesSM ? "column" :"row"} alignItems="center" style={{marginTop: "15em"}}>
        <GridBox item>
          <GridBox container direction="column">
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Analytics</Typography>
            </GridBox>
            <GridBox item>
              <IconImage src={analytics} style={{marginLeft: "-2.75em"}} alt="graph with magnifying glass revealing 1's and 0's" />
            </GridBox>
          </GridBox>
        </GridBox>
        <GridBox item style={{maxWidth: "30em"}}>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
          </ParagraphContainer>
        </GridBox>
      </RowGrid>

      <RowGrid item container direction={matchesSM ? "column" :"row"} alignItems="center" justifyContent="flex-end" style={{marginBottom: "15em", marginTop: "15em"}}>
        <GridBox item>
          <GridBox container direction="column">
            <GridBox item>
              <Typography variant="h4" align="center" gutterBottom>Ecommerce</Typography>
            </GridBox>
            <GridBox item>
              <IconImage src={ecommerce}  alt="world outline made of dollar signs" />
            </GridBox>
          </GridBox>
        </GridBox>
        <GridBox item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined} paragraph>
            It's no secret that people like to shop online.
          </ParagraphContainer>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined} paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
          </ParagraphContainer>
        </GridBox>
      </RowGrid>

      <RowGrid item container direction={matchesSM ? "column" :"row"} alignItems="center">
        <GridBox item>
          <GridBox container direction="column">
            <GridBox item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Outreach</Typography>
            </GridBox>
            <GridBox item>
              <IconImage src={outreach} alt="megaphone" />
            </GridBox>
          </GridBox>
        </GridBox>
        <GridBox item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined}>
            Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them before visiting in person.
          </ParagraphContainer>
        </GridBox>
      </RowGrid>

      <RowGrid item container direction={matchesSM ? "column" :"row"} alignItems="center" justifyContent="flex-end" style={{marginTop: "15em", marginBottom: "15em"}}>
        <GridBox item>
          <GridBox container direction="column">
            <GridBox item>
              <Typography variant="h4" align="center" gutterBottom>Search Engine<br /> Optimization</Typography>
            </GridBox>
            <GridBox item>
              <IconImage src={seo}  alt="website standing on winner's podium" />
            </GridBox>
          </GridBox>
        </GridBox>
        <GridBox item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined} paragraph>
            How often have you ever been to the second page of Google results?
          </ParagraphContainer>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined} paragraph>
            If you're like us, probably never.
          </ParagraphContainer>
          <ParagraphContainer variant="body1" align={matchesSM ? "center" : undefined} paragraph>
            Customers don't go there either, so we make sure your website is designed to end up on top.
          </ParagraphContainer>
        </GridBox>
      </RowGrid>
      <GridBox item>
        <CallToAction setValue={props.setValue} />
      </GridBox>
    </GridBox>
  )
}
