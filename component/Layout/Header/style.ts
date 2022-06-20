import styled from 'styled-components';
import { Drawer } from 'antd';

export const HeaderWrapper = styled.div`
 width: 100%;
 height: 100%;
 max-width: 100%;
 .ant-layout-header{
     height: 70px;
     background: #fafafa;
     position: fixed;
     width: 100%;
     z-index: 3;
     padding: 30px 80px 90px 80px;

     @media(max-width: 1000px){
      width: 100%;
      padding: 30px 60px 70px 60px;
     }
     @media(max-width: 800px){
      width: 100%;
      padding: 30px 18px 70px 18px;
     }
     @media(max-width:480px){
      width: 100%;
      height: 70px;
      padding: 10px 15px 70px 15px;
     }
     /* */
 }
.headerLeft{
    img{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        justify-content: space-between
    }

    .menuIcon{
        font-size: 45px;
        color: #1F6E10;
        @media screen and (min-width: 701px){
        display: none;
    }
    }
    .link{
    a{
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: #061603;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    margin: 0 10px;
    padding: 10px 15px 15px 15px;
    width: 100%;

    &:nth-child(2){
        color: #fff;
        background-color: #1F6E10;
        width: 128px;
        height: 52px;
        margin-left: 25px;
        padding: 12px 24px;
        border-radius: 4px;
    }
}
    @media screen and (max-width: 700px){
            display: none;
        }
}
}
`;

interface Line {
  showMobileSider?: string,
  setShowMobileSider?: string,
  children?: React.ReactNode | string
}

export const MobileDrawer = styled(Drawer)<Line>`
@media (min-width: 701px){
  display: none;
}
.ant-drawer-content{
  width: 100%;
  /* min-height: %; */
  position: fixed;
  z-index: 3;
  bottom: 0;
  background-color: #f3f3f3;
  transition: all 0.2s ease-in-out;
  
  
    .sideBarSub{
      margin-top: 100px;
      padding: 0 30px;
      a{
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    color: #061603;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    padding: 15px 30px 10px 30px;
    margin: 20px auto 20px auto;
    border-radius: 5px;
    width: 400px;
    height: 60px;
    max-width: 100%;

    &:nth-child(2){
        color: #fff;
        background-color: #1F6E10;
        
    }
}
    .active{
        font-weight: bold;
        color: #1F6E10;
       
        ::before{
            content: "";
            position: absolute;
            width: 3.5px;
            height: 35px;
            left: 0;
            bottom: 0;
            background-color: #1F6E10;
            animation: underline 0.3s ease 1;
        }
        @keyframes underline {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
    }
    }
}
`;
