import { Button, Typography } from "antd";
import Title from "antd/lib/skeleton/Title";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { FlexibleDiv, Section } from "../component/Box/styles";
import { HomeStyle } from "../styles/Home";
import Img from "../utilities/SVG/home.svg";
import Line from "../utilities/SVG/line.svg";
import Dot from "../utilities/SVG/dot.svg";
import Dot2 from "../utilities/SVG/dot2.svg";
import Dot3 from "../utilities/SVG/dot3.svg";
import Tower from "../utilities/SVG/tower.svg";
import Bulb from "../utilities/SVG/bulb.svg";
import Store from "../utilities/SVG/store.svg";
import Bike from "../utilities/SVG/bike.svg";
import Line2 from "../utilities/SVG/line2.svg";
import Img1 from "../utilities/SVG/image.svg";
import Img2 from "../utilities/SVG/img.svg";
import Farm from "../utilities/SVG/farm.svg";

const Home: NextPage = () => {
  const { Title, Text } = Typography;
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeStyle>
        <Section className='heroImage' id='hero'>
          <Image
            src={Img}
            alt='about us'
            layout='fixed'
            height={600}
            quality={100}
            className='bgWrap'
            objectFit="cover"
          />
          <div className='heroText'>
            <div className='div'>
              <div className='line'>
                <Image
                  src={Line}
                  alt='about us'
                  width={0}
                  height={350}
                  quality={100}
                />
              </div>
              <FlexibleDiv
                flexDir='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                style={{marginLeft: '20px'}}
                className='h1'
              >
                <h1>
                  A Global Commodity Trading <br /> Company
                </h1>
                <p className="span">
                  At Azaman Global, we source for and trade Agro and Metal
                  commodities <br />
                  to meet the needs of our customers across the globe and
                  develop <br />
                  economies across nations.
                </p>
                <Button
                  type='text'
                  htmlType='submit'
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </Button>
              </FlexibleDiv>
            </div>
          </div>
        </Section>

        <Section
          className='shaping'
          justifyContent='space-between'
          alignItems='space-between'
        >
          <div className='text'>
            <div className='dot'>
              <Image src={Dot} alt='dot' quality={100} />
            </div>
            <FlexibleDiv
              className='text_sub'
              alignItems='flex-start'
              justifyContent='flex-start'
              flexDir='column'
              
            >
              <h2>
                Shaping the world by meeting <br />
                economical needs
              </h2>
              <p>
                We have seen how commodities like Agricultural products, Metals
                and Minerals have shaped the world. Virtually all that is <br />
                used is either planted or mined. Serving as links between
                producers and end <br />
                users, our core focus is to source and trade Agro and Metal
                <br /> Commodities.
              </p>
              <Button
                type='text'
                htmlType='submit'
                onClick={() => router.push("/about")}
                className='btn'
              >
                Read More
              </Button>
            </FlexibleDiv>
          </div>
          <div className='image'>
            <div className='dott'>
              <Image src={Dot2} alt='dot' />
            </div>
            <div className='mainImg'>
              <Image
                src={Tower}
                alt='dot'
                width={560}
                height={560}
                quality={100}
                objectFit='contain'
              />
            </div>
            <div className='dott'>
              <Image src={Dot2} alt='dot' quality={100} />
            </div>
          </div>
        </Section>

        <Section className='card'>
          <FlexibleDiv className='card_sub' justifyContent='space-evenly'>
            <div className='cards'>
              <Image src={Bulb} alt='icon' quality={100} />
              <h3>We Source</h3>
              <p>
                As a link between primary producers and <br /> consumers, we
                carefully source for <br />
                smallholder farmers and metal workers who <br /> supply us with
                the best of raw commodities.
              </p>
            </div>
            <div className='line'>
              <Image src={Line2} alt='icon' />
            </div>
            <div className='cards'>
              <Image src={Store} alt='icon' />
              <Title level={3}>We Store</Title>
              <p>
                To reduce the effect of economic shock, we <br /> help bridge
                the gap in demand and supply <br /> by maintaining large
                inventories at strategic <br />
                locations across the globe.
              </p>
            </div>
            <div className='line'>
              <Image src={Line2} alt='icon' quality={100} />
            </div>
            <div className='cards'>
              <Image src={Bike} alt='icon' quality={100} />
              <Title level={3}>We Deliver</Title>
              <p>
                We carry out effective delivery by <br />
                providing a solidly reliable logistics <br />
                service between the producers and <br />
                consumers.
              </p>
            </div>
          </FlexibleDiv>
        </Section>

        <Section className='product'>
          <Title level={2} className='title'>Our Product</Title>
          <FlexibleDiv justifyContent='space-between'>
            <div className='dot'>
              <Image src={Dot2} alt='dot' quality={100} />
            </div>
            <div className='cards'>
              <div className='cardd'>
                <Image
                  src={Img1}
                  alt='dot'
                  width={440}
                  quality={100}
                  objectFit='cover'
                />
                <div className='card_text'>
                  <h3>Metal commodities</h3>
                  <p>
                    We currently deal with the trading of metals such as Tin,
                    Lead, Zinc, and Manganese.
                  </p>
                </div>
              </div>
              <div className='cardd'>
                <Image
                  src={Img2}
                  alt='dot'
                  width={440}
                  quality={100}
                  objectFit='cover'
                />

                <div className='card_text'>
                  <h3>Agricultural commodities</h3>
                  <p>
                    We offer the trading of crops like paddy rice, and cashew
                    nuts.
                  </p>
                </div>
              </div>
            </div>
            <div className='dot'>
              <Image src={Dot2} alt='dot' quality={100} />
            </div>
          </FlexibleDiv>
        </Section>

        <Section className='farmer heroImage'>
          <Image
            src={Farm}
            alt='about us'
            layout='fixed'
            height={500}
            quality={100}
            className='bgWrap'
          />
          <FlexibleDiv  justifyContent="flex-end" alignItems="flex-end" className="div">
          <FlexibleDiv className='text' justifyContent="space-between" alignItems="flex-end">
            <div className='do'>
              <Image src={Dot3} alt='dot' quality={100} />
            </div>
            <div className='card_text'>
              <h3>Farmers Empowerment <br/>Programme</h3>
              <p>
                Part of our investment in The Agricultural Sector is to empower
                smallholder farmers who are the foundation of our trading
                activities. This model educates them on the right farming
                methods to maximize productivity thus ensuring regular supply of
                commodities.
              </p>
            </div>
          </FlexibleDiv>
          </FlexibleDiv>
        </Section>
      </HomeStyle>
    </>
  );
};

export default Home;
