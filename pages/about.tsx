import React from "react";
import Head from "next/head";
import Image from "next/image";
import { AboutStyle } from "../styles/AboutUs";
import { FlexibleDiv, Section } from "../component/Box/styles";
import Img from "../utilities/SVG/aboutus.svg";
import Line from "../utilities/SVG/line.svg";
import Dot from "../utilities/SVG/dot.svg";
import { Typography } from "antd";
function AboutUs() {
  const { Title, Text } = Typography;
  return (
    <>
      <Head>
        <title>About us - Azaman</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AboutStyle>
        <Section className='heroImage' id='hero'>
          <Image src={Img} alt='about us' layout="fixed" height={480} quality={100} className='bgWrap' />
          <div className='heroText'>
            
           <div className="div">
           <div className='line'>
           <Image src={Line} alt='about us' width={0} height={200} layout={'fixed'}/>
           </div>
            <Title level={1}>
              Making available commodities that <br/>help develop economies across<br/>
              nations
            </Title>
           </div>
           
          </div>
        </Section>

        <Section className='section' flexDir='column'>
          <FlexibleDiv justifyContent='space-between' className="dot">
            <Image src={Dot} alt='dot' />
            <Image src={Dot} alt='dot'/>
          </FlexibleDiv>
          <FlexibleDiv
            flexDir='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            className="text"
          >
            <Title level={2}>
              Sourcing and trading agricultural and metal commodities
            </Title>
            <Text>
              Azaman Global Commodities Limited was born out of the need to
              solve the problems in the Agro and Metal commodity space.<br/> We have
              seen how commodities like Agricultural products, Metals and
              Minerals have shaped the world.
            </Text>
            <Text>
              Virtually all that is used is either planted or mined. Serving as
              links between producers and end users, our core focus is to <br/>source
              and trade Agro and Metal Commodities. We carefully source for
              smallholder farmers and platers who supply us with  <br/>the best of raw
              commodities and we deliver these commodities with world class
              business ethics and operations.
            </Text>
            <Text>
              One of the major sources of livelihood in the world is agriculture
              and we pride ourselves as the suppliers of products that keep  <br/>the
              livelihood of any nation.
            </Text>
          </FlexibleDiv>
        </Section>
      </AboutStyle>
    </>
  );
}

export default AboutUs;
