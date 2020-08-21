import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Input from 'reusecore/src/elements/Input';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/src/components/UI/Container';
import { email } from 'react-icons-kit/ionicons/email';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import BannerWrapper, {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
} from './banner.style';

import AppScreenshot from 'common/src/assets/image/app/iphone-mockup-small-whitespace.png';
import AppLogo from 'common/src/assets/image/app/FitcusLogo.png';

const firebase = require('firebase/app');
const firestore = require('firebase/firestore');

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyle,
  btnStyleTwo,
  discountAmount,
  discountText,
}) => {

  const config = {
    apiKey: "AIzaSyADY4wm6ikBY38tm69s_WOM4d_SqichjmQ",
    authDomain: "fitcus.firebaseapp.com",
    databaseURL: "https://fitcus.firebaseio.com",
    projectId: "fitcus",
    storageBucket: "",
    messagingSenderId: "855819901407",
    appId: "1:855819901407:web:57801ffc816d5264"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  
  let database = firebase.firestore();
  const [email, setEmail] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  function handleEmailSubmit() {
    if (email.length > 0) {
      console.log(email)
      // Use .add if you dont want to specify the docId
      database.collection('/betaUser').add(
        {
          Email: email
        }
      )
      setEmailSent(true)
    }
    
  }
  function handleChange(value) {
    setEmail(value)
  }
  
  return (
    <Box {...SectionWrapper} style={{"paddingTop": "20px"}}>
      {/* <ParticlesComponent /> */}
      {/* <BannerSquareShape /> */}
      {/* <BannerCircleShape /> */}
      <Container>
        <Box {...row} style={{"justifyContent": "space-around"}}>
          <Box {...col} style={{"marginBottom": "20px"}}>
            <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...discountAmount} className="discountAmount" />
                  <Text {...discountText} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />

            <EmailInputWrapper>
              { emailSent ? 
                <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
                onChange={handleChange}
                style={{"backgroundColor": "rgb(158,239,96)"}}
              />
              :
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
                onChange={handleChange}
              />
              }
              
            </EmailInputWrapper>
            <ButtonWrapper>
              { emailSent ?
                <Link href="#">
                <a>
                  <Button {...button} {...btnStyle}
                    onClick={handleEmailSubmit}
                    disabled={true}
                   />
                </a>
              </Link>
              :
              
              <Link href="#">
                <a>
                  <Button {...button} {...btnStyle}
                    onClick={handleEmailSubmit}
                   />
                </a>
              </Link>
              }
              <Link href="#keyFeatures">
                <a>
                  <Button
                    {...button}
                    {...btnStyleTwo}
                    icon={<Icon icon={ic_arrow_forward} />}
                    className="withoutBg"
                  />
                </a>
              </Link>
            </ButtonWrapper>
          </Box>
          {/* <Box {...col} {...imageArea}> */}
            <div style={{"height": "845px", "width": "425px", "position": "relative", "margin": "0px", "overflow":"hidden"}}>
              <Image style={{"zIndex": "2", "position": "absolute", "marginTop": "-3px"}} src={AppScreenshot} alt="Domain Image" {...image} />
              <Image src={AppLogo} style={{"zIndex": "0", "height": "300px", "width": "auto", "position": "absolute", "top": "0", "bottom": "0", "left": "0px", "right" : "0px", "margin": "auto"}} alt="Logo Image" />
              <video autoPlay="autoplay" muted loop style={{"zIndex": "1", "maxWidth": "120%", "maxHeight": "100%", "position": "absolute", "marginLeft": "-20px"}} src="https://firebasestorage.googleapis.com/v0/b/fitcus.appspot.com/o/running.mp4?alt=media&token=57127367-b739-4600-b00c-cac462097fa1" type="video/mp4"></video>
            </div> 
          {/* </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '50%'],
    ml: 'auto',
  },
  title: {
    content: 'Next Generation Coaching',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  description: {
    content:
      "Fitcus is the world's first automated coaching and insights application. Just record your workout and Fitcus will tell you how many reps you did, how many calories you burned and the speed and power you generate without attaching any sensors to your body. Get insights on: Any Movement, Any Sport, Anywhere, Anytime.",
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    title: 'REQUEST ACCESS',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  btnStyleTwo: {
    title: 'KEY FEATURES',
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    ml: '15px',
    bg: '#fff',
    color: 'rgb(26, 115, 232)',
    
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Private release on iOS out now.',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
