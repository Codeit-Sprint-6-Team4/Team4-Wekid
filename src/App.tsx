import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';
import { getUserMe, userType } from '@api/user';
import Footer from '@components/layout/Footer';
import HeaderContainer from '@components/layout/Header/HeaderContainer';
import AccountSetting from '@pages/AccountSetting/AccountSetting';
import Board from '@pages/Board/Board';
import Boards from '@pages/Boards/Boards';
import Home from '@pages/Home/Home';
import MyWiki from '@pages/MyWeki/MyWiki';
import SignIn from '@pages/SignIn/SignIn';
import SignUp from '@pages/SignUp/SignUp';
import UpLoadBoard from '@pages/UpLoadBoard/UpLoadBoard';
import Wiki from '@pages/Weki/Wiki';
import WikiList from '@pages/WekiList/WikiList';
import { theme } from '@styles/theme';
import GlobalStyle from './styles/global-styles';

const MyWekiDataContext = createContext<userType | undefined>(undefined);

function App() {
  const [myUserData, setUserData] = useState<userType>({
    code: '',
    id: 0,
  });
  const accessToken: string | undefined = Cookies.get('accessToken');

  const getServerUserMe = async () => {
    try {
      const data = await getUserMe(accessToken);
      const myCodeInfo = data.profile;
      if (myCodeInfo) {
        setUserData((prev) => ({
          ...prev,
          code: myCodeInfo.code || '',
          id: myCodeInfo.id || 0,
        }));
      } else {
        console.error('Profile data is missing.');
      }
    } catch (error) {
      console.error('Failed to retrieve user data', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getServerUserMe();
    }
  }, []);

  return (
    <MyWekiDataContext.Provider value={myUserData}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
            <Route path="mypage" element={<AccountSetting />} />
            <Route path="wiki/:code" element={<MyWiki />} />
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
      </ThemeProvider>
    </MyWekiDataContext.Provider>
  );
}

export default App;
