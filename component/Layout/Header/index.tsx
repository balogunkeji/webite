import Link from 'next/link';
import { defaultPaths } from './path';
import  { useRouter } from 'next/router';
import { HeaderWrapper, MobileDrawer } from './style';
import { Layout } from 'antd';
import { FlexibleDiv } from '../../Box/styles';
import { HiOutlineMenuAlt3 as Icon } from 'react-icons/hi';
import logoUrl from '../../../utilities/SVG/headerLogo.svg';
import Image from 'next/image';

function HeaderComponent({ showMobileSider, setShowMobileSider }: any) {
  const location = useRouter();
  const { Header } = Layout;
  const activePath = location.pathname;

  return (
    <HeaderWrapper>
      <Header>
        <FlexibleDiv justifyContent='space-between' className='headerLeft'>
          
         
          
               <Link href={'/'}>
            <Image src={logoUrl} alt='logo' />
            </Link>
              <div className='link'>
                {defaultPaths.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a
                      className={
                        activePath === item.href ||
                        item.subRoute.includes(activePath)
                          ? ' active'
                          : ''
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              
           
          <div className='menuIcon'>
            <Icon
              className='menuIcon'
              onClick={() => setShowMobileSider(!showMobileSider)}
            />
          </div>
        </FlexibleDiv>
      </Header>

      {/* mobile */}

      <MobileDrawer
        showMobileSider={showMobileSider}
        setShowMobileSider={setShowMobileSider}
        placement={'left'}
        closable={true}
        onClose={() => {
          setShowMobileSider(!showMobileSider);
        }}
        visible={showMobileSider}
      >
        <FlexibleDiv flexDir='column' className='sideBar'>
           
              <FlexibleDiv
                flexDir='column'
                alignItems='flex-start'
                className='sideBarSub'
                justifyContent='flex-start'
              >
                {defaultPaths.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a
                      className={
                        location.pathname === item.href ? 'active' : ''
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </FlexibleDiv>
              
           
         
        </FlexibleDiv>
      </MobileDrawer>
    </HeaderWrapper>
  );
}

export default HeaderComponent;
