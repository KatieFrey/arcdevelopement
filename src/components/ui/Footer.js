import React from 'react';
import { Link } from 'react-router-dom';
import {FooterDiv, AdornmentImage, GridBox, GridMain, GridLink, GridItem, IconImage, GridSocial} from '../../utils/mui-styled-components/footer';
import {Hidden} from '@mui/material';

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer({value, selectedIndex, setValue, setSelectedIndex}){
  return(
    <FooterDiv>
      <Hidden mdDown>
        <GridMain container justifyContent="center">
          <GridItem item>
            <GridBox container direction="column" spacing={2}>
              <GridLink item component={Link} to="/" onClick={() => setValue(0)}>Home</GridLink>
            </GridBox>
          </GridItem>
          <GridItem item>
            <GridBox container direction="column" spacing={2}>
              <GridLink item component={Link} to="/services" onClick={() => {setValue(1); setSelectedIndex(0)}}>Services</GridLink>
              <GridLink item component={Link} to="/customsoftware" onClick={() => {setValue(1); setSelectedIndex(1)}}>Custom Software Development</GridLink>
              <GridLink item component={Link} to="/mobileapps" onClick={() => {setValue(1); setSelectedIndex(2)}}>iOS/Android App Development</GridLink>
              <GridLink item component={Link} to="/websites" onClick={() => {setValue(1); setSelectedIndex(3)}}>Website Development</GridLink>
            </GridBox>
          </GridItem>
          <GridItem item>
            <GridBox container direction="column" spacing={2}>
              <GridLink item component={Link} to="/revolution" onClick={() => setValue(2)}>The Revolution</GridLink>
              <GridLink item component={Link} to="/revolution" onClick={() => setValue(2)}>Vision</GridLink>
              <GridLink item component={Link} to="/revolution" onClick={() => setValue(2)}>Technology</GridLink>
              <GridLink item component={Link} to="/revolution" onClick={() => setValue(2)}>Process</GridLink>
            </GridBox>
          </GridItem>
          <GridItem item>
            <GridBox container direction="column" spacing={2}>
              <GridLink item component={Link} to="/about" onClick={() => setValue(3)}>About Us</GridLink>
              <GridLink item component={Link} to="/about" onClick={() => setValue(3)}>History</GridLink>
              <GridLink item component={Link} to="/about" onClick={() => setValue(3)}>Team</GridLink>
            </GridBox>
          </GridItem>
          <GridItem item>
            <GridBox container direction="column" spacing={2}>
              <GridLink item component={Link} to="/contact" onClick={() => setValue(4)}>Contact Us</GridLink>
            </GridBox>
          </GridItem>
        </GridMain>
      </Hidden>
      <AdornmentImage alt="black decorative slash" src={footerAdornment} />
      <GridSocial container justifyContent="flex-end" spacing={2}>
        <GridBox item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <IconImage alt="facebook logo" src={facebook} />
        </GridBox>
        <GridBox item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <IconImage alt="twitter logo" src={twitter} />
        </GridBox>
        <GridBox item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <IconImage alt="instagram logo" src={instagram} />
        </GridBox>
      </GridSocial>
    </FooterDiv>
  );
}


