import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';
import { getUserMe } from '@api/user';
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
import Weki from '@pages/Weki/Weki';
import WekiList from '@pages/WekiList/WekiList';
import { theme } from '@styles/theme';
import GlobalStyle from './styles/global-styles';

const myWekiDataContext = createContext(undefined);

function App() {
  const [myWekiData, setMyWekiData] = useState({
    profile: {
      code: '11111',
      id: 1,
    },
    updatedAt: '2024-07-02T04:38:10.622Z',
    createdAt: '2024-07-02T04:38:10.622Z',
    teamId: '6-4',
    name: '이름',
    id: 1,
  });

  const accessToken: string | undefined = Cookies.get('accessToken');
  console.log('사용자 정보' + myWekiData.profile);
  const getServerUserMe = async () => {
    try {
      const data = await getUserMe(accessToken);
      console.log(data);
    } catch (error) {
      console.log('user가져오기 에러ㅏ');
    }
  };

  useEffect(() => {
    if (accessToken) {
      getServerUserMe();
    }
  }, []);

  return (
    <myWekiDataContext.Provider value={myWekiData}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
            <Route path="mypage" element={<AccountSetting />} />
            <Route path="weki/:code" element={<MyWeki />} />
            <Route path="wekilist">
              <Route index element={<WekiList />} />
              <Route path=":id" element={<Weki />} />
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
      //{' '}
    </myWekiDataContext.Provider>
  );
}

export default App;
