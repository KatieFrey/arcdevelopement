import {useEffect} from 'react';
//import Lottie from 'react-lottie';
import { useTheme } from '@mui/material';
import lottie from "lottie-web";
import {LandingPageSVG, GridBox, GridSVG, EstimateButton, LearnButton, TypographyGrid} from '../utils/mui-styled-components/landingpage';
import { Button, Typography } from '@mui/material';
import ButtonArrow from './ui/ButtonArrow';

import animationData from '../animations/landinganimation/data';

export default function LandingPage() {
  const theme = useTheme();

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
    <GridBox container direction="column" style={{marginTop: "5em"}}>
      <GridBox item>
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
                <LearnButton variant="outlined">
                  <span style={{ marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </LearnButton>
              </GridBox>
            </GridBox>
          </TypographyGrid>
          <GridSVG sm item>
            <LandingPageSVG id="landing-page" />
          </GridSVG>
        </GridBox>
      </GridBox>
    </GridBox>
  )
}
