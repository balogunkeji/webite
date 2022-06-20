import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ContactStyle } from "../styles/Contact";
import { FlexibleDiv, Section } from "../component/Box/styles";
import Img from "../utilities/SVG/contact.svg";
import Line from "../utilities/SVG/line.svg";
import Dot from "../utilities/SVG/dot.svg";
import { Button, Input, Typography } from "antd";
import FormModal from '../component/Modal'
function ContactUs() {
  
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Contact us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ContactStyle>
        <Section className='heroImage' id='hero'>
          <Image src={Img} alt='about us' layout="fixed" height={480} quality={100} className='bgWrap' />
          <div className='heroText'>
           <div className="div">
           <div className='line'>
           <Image src={Line} alt='about us' width={0} height={120}/>
           </div>
            <div className="text">
            <Title level={1}>
            We’d love to hear from you
            </Title>
            <Text className="span">You can leave us a message, send an email or drop by at our office.</Text>
            </div>
           </div>
           
          </div>
        </Section>

        <Section className='section' flexDir='column'>
          <FlexibleDiv justifyContent='space-between' className="dot">
            <Image src={Dot} alt='dot' />
          </FlexibleDiv>
          <FlexibleDiv
            flexDir='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            className="text"
          >
            <Title level={3}>
            Get In Touch
            </Title>
           <div className="form">
           <Input  placeholder="Your name"/>
            <Input  placeholder="Email address"/>
            <TextArea rows={4} placeholder="Leave a message" maxLength={6} className='area'/>
            <Button type="text" htmlType="submit" onClick={() => setModal(!modal)}>Send Message</Button>
           </div>
          </FlexibleDiv>
          <FlexibleDiv justifyContent='space-between' className="dot">
            <Image src={Dot} alt='dot'/>
          </FlexibleDiv>
          <FormModal modal={modal} setModal={setModal}/>
        </Section>
      </ContactStyle>
    </>
  );
}

export default ContactUs;
