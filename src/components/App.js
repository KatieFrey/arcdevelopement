import { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import AboutUs from "./AboutUs";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./ui/Theme"
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/services" render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/customsoftware" render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/mobileapps" render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/websites" render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/revolution" render={(props) => <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/about" render={(props) => <AboutUs {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/contact" component={() => <div>Contact Us</div>}/>
          <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
        </Switch>
        <Footer value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
