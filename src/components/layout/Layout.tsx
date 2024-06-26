import React from 'react';
import styled from 'styled-components';
//Components
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <StyledLayout>{props.children}</StyledLayout>
      <Footer />
    </>
  );
};

const StyledLayout = styled.main`
  height: auto;
  min-height: calc(100vh - 165px);
`;

export default Layout;
