import React from 'react';
import { Layout } from 'antd';
import { useState } from 'react';
import { LayoutWrapper } from './style';
import LandingFooter from './Footer';
import HeaderComponent from './Header';

interface LayoutChildren {
  children: React.ReactNode
}
const LayoutComponent = ({ children }: LayoutChildren) => {
  const { Content } = Layout;
  const [showMobileSider, setShowMobileSider] = useState(false);
  return (
    <LayoutWrapper>
    <HeaderComponent showMobileSider={showMobileSider} setShowMobileSider={setShowMobileSider}/>
    <Content>{children}</Content> 
    <LandingFooter/>
  </LayoutWrapper>
  );
};

export default LayoutComponent;
