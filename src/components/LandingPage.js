import {useEffect} from 'react';
//import Lottie from 'react-lottie';
import lottie from "lottie-web";
import {LandingPageSVG} from '../utils/mui-styled-components'

import animationData from '../animations/landinganimation/data';

export default function LandingPage() {
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
  return <LandingPageSVG id="landing-page" />
}
