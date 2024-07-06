import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@context/AuthProvider';
import { MyDataContext } from '@context/myWekiDataContext';
import { ThemeProvider } from 'styled-components';
import Footer from '@components/layout/Footer';
import HeaderContainer from '@components/layout/Header/HeaderContainer';
import AccountSetting from '@pages/AccountSetting/AccountSetting';
import Board from '@pages/Board/Board';
import Boards from '@pages/Boards/Boards';
import Home from '@pages/Home/Home';
import MyWeki from '@pages/MyWeki/MyWeki';
import SignIn from '@pages/SignIn/SignIn';
import SignUp from '@pages/SignUp/SignUp';
import UpLoadBoard from '@pages/UpLoadBoard/UpLoadBoard';
import Wiki from '@pages/Weki/Wiki';
import WikiList from '@pages/WekiList/WikiList';
import GlobalStyle from '@styles/global-styles';
import { theme } from '@styles/theme';

function App() {
  return (
    <HelmetProvider>
      <MyDataContext>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <BrowserRouter>
              <GlobalStyle />
              <HeaderContainer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<SignIn />} />
                <Route path="mypage" element={<AccountSetting />} />
                <Route path="wiki/:code" element={<MyWeki />} />
                <Route path="wikilist">
                  <Route index element={<WikiList />} />
                  <Route path=":id" element={<Wiki />} />
                </Route>
                <Route path="boards">
                  <Route index element={<Boards />} />
                  <Route path=":id" element={<Board />} />
                  <Route path="upload" element={<UpLoadBoard />} />
                  <Route path="upload/:id" element={<UpLoadBoard />} />
                </Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </MyDataContext>
    </HelmetProvider>
  );
}

export default App;
