import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { ThemeProvider } from 'styled-components';
import Footer from '@components/layout/Footer';
import HeaderContainer from '@components/layout/Header/HeaderContainer';
import useGetUserData from '@hooks/useGetUserData';
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
import { theme } from '@styles/theme';
import { AuthProvider } from '@context/AuthProvider';  // AuthProvider를 임포트합니다.

function App() {
  const { myUserData } = useGetUserData();

  return (
    <MyWekiDataContext.Provider value={myUserData}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
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
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MyWekiDataContext.Provider>
  );
}

export default App;
