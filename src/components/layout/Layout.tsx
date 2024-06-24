import React from 'react';
import Footer from '@components/layout/Footer';
//Components
import Header from '@components/layout/Header';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
