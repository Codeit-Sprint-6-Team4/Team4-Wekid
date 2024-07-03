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
import MyWeki from '@pages/MyWeki/MyWeki';
import SignIn from '@pages/SignIn/SignIn';
import SignUp from '@pages/SignUp/SignUp';
import UpLoadBoard from '@pages/UpLoadBoard/UpLoadBoard';
import Weki from '@pages/Weki/Weki';
import WekiList from '@pages/WekiList/WekiList';
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
      setUserData((prev) => ({
        ...prev,
        code: myCodeInfo.code,
        id: myCodeInfo.id,
      }));
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
    </MyWekiDataContext.Provider>
  );
}

export default App;
