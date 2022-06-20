import React from "react";
import { FooterStyles } from "./style";
import { FlexibleDiv, Section } from "../../Box/styles";
import { Layout, Typography } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import img from "../../../utilities/SVG/footerLogo.svg";

const LandingFooter = () => {
  const { Footer } = Layout;
  const router = useRouter();
  const { Text, Title } = Typography;
  const dynamicYear = new Date().getFullYear();
  return (
    <FooterStyles>
      <Footer>
        <Section
          className='section'
          flexWrap='wrap'
          flexDir="column"
        >
         <FlexibleDiv className="footer1" justifyContent="space-between" alignItems="flex-start">
         <div
            onClick={() => router.push("/")}
            className='getStarted'
          >
            <Image src={img} width={80} height={80} alt='' className='img' />
            <p>
              Our Mission: Sourcing and trading <br/> earth’s resources that drive
              global <br/> economies.{" "}
            </p>
          </div>
          <div
            className='links'
          >
            <Title level={3}>Office address</Title>
            <div className='div'>
              <div className='list'>
                <Text>
                  10A Ajanaku Street, Awuse Estate, <br />
                  Opebi, Ikeja. <br />
                  Lagos state, Nigeria.
                </Text>
              </div>
            </div>

            <div className='div'>
              <Text>
                Abuja Office: Space view Estate, <br/>Institute & Research District,<br/>
                Cadastral Zone, C00.<br/> Abuja, Nigeria.
              </Text>
            </div>
            </div>

            <div className='div'>
              <Title level={3}>For enquiries</Title>
              <div className='list'>
                <Text>Email: enquires@azamanglobal.com</Text>
                </div>
            </div>
         </FlexibleDiv>

         <FlexibleDiv className="footer2" justifyContent="flex-start">
         <Text>{dynamicYear} Azaman Global Commodities. All rights reserved</Text>
         </FlexibleDiv>
  
        </Section>
      </Footer>
    </FooterStyles>
  );
};

export default LandingFooter;
