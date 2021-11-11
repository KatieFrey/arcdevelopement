import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useTheme} from '@mui/material';
import lottie from "lottie-web";
import {GridBox, RowGrid, ArrowContainer, IconGrid, IconImage, HeaderGrid, CustomSoftwareSVG, MissionStatement, TeamAvatar} from "../utils/mui-styled-components/aboutus";
import {Typography, Hidden} from "@mui/material";
import {useMediaQuery} from "@mui/material";

import CallToAction from './ui/CallToAction';

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import { Call } from '@mui/icons-material';

export default function Revolution(props){

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#technologyAnimation"),
  //     animationData: technologyAnimation,
  //     renderer: "svg", // "canvas", "html"
  //     loop: true, // boolean
  //     autoplay: false, // boolean
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice'
  //     }
  //   });
  // }, [])

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return(
    <GridBox container direction="column">

      <RowGrid item style={{marginTop: matchesMD ? "1em" : "2em"}}>
        <Typography align={matchesMD ? "center" : undefined} variant="h2">About Us</Typography>
      </RowGrid>

      <RowGrid item container justifyContent="center" style={{marginTop: "3em"}}>
        <MissionStatement variant="h4" align="center">
          Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
        </MissionStatement>
      </RowGrid>

      <RowGrid item container justifyContent="space-around" direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} style={{marginTop: "10em", marginBottom: "10em"}}>

        <GridBox item>
          <GridBox item container direction="column" lg style={{maxWidth: "35em"}}>
            <GridBox item>
              <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom>History</Typography>
            </GridBox>
            <GridBox item>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{fontWeight: 700, fontStyle: "italic"}}>
                We're the new kid on the block.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Founded in 2019, we're ready to get out hands on the world's business problems.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                It all started with one question: Why aren't all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, education barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                All this change can be a lot to keep up with, and that's where we come in.
              </Typography>
            </GridBox>
          </GridBox>
        </GridBox>

        <GridBox item>
          <GridBox item container justifyContent="center" lg>
            <img src={history} alt="quill pen sitting on top of book" style={{maxHeight: matchesMD ? 200 : "22em"}}/>
          </GridBox>
        </GridBox>

      </RowGrid>

      <RowGrid item container direction="column" alignItems="center" style={{marginBottom: "15em"}}>
        <GridBox item>
          <Typography variant="h4" align="center" gutterBottom>Team</Typography>
        </GridBox>
        <GridBox item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </GridBox>
        <GridBox item>
          <TeamAvatar alt="founder" src={profile} />
        </GridBox>

        <GridBox item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <GridBox item lg style={{maxWidth: "45em", padding: "1.25em"}}>
              <Typography variant="body1" align="center" paragraph>I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning - learning about computers, learning mathematics and philosophy, studying design, always just learning.</Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
              </Typography>
            </GridBox>
          </Hidden>
          <GridBox item container direction="column" alignItems={matchesMD ? "center" : undefined} style={{marginBottom: matchesMD ? "2.5em" : 0}} lg>
            <GridBox item>
              <img src={yearbook} alt="yearbook page about founder" style={{maxWidth: matchesMD ? 300 : undefined}}/>
            </GridBox>
            <GridBox item>
              <Typography variant="caption">
                a page from my Sophmore yearbook
              </Typography>
            </GridBox>
          </GridBox>
          <Hidden mdDown>
            <GridBox item lg style={{maxWidth: "45em", padding: "1.25em"}}>
              <Typography variant="body1" align="center" paragraph>I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning - learning about computers, learning mathematics and philosophy, studying design, always just learning.</Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
              </Typography>
            </GridBox>
          </Hidden>
          <GridBox item container direction="column" alignItems={matchesMD ? "center" : "flex-end"} lg>
            <GridBox item>
              <img src={puppy} alt="grey spotted puppy" style={{maxWidth: matchesMD ? 300 : undefined}}/>
            </GridBox>
            <GridBox item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </GridBox>
          </GridBox>
        </GridBox>
      </RowGrid>

      <GridBox item>
        <CallToAction setValue={props.setValue} />
      </GridBox>
    </GridBox>
  )
}
