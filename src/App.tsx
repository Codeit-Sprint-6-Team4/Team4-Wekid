import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AccountSetting from '@pages/AccountSetting/AccountSetting';
import Board from '@pages/Board/Board';
import Boards from '@pages/Boards/Boards';
import Home from '@pages/Home/Home';
import MyWeki from '@pages/MyWeki/MyWeki';
import SignIn from '@pages/SignIn/components/SignIn';
import SignUp from '@pages/SignUp/SignUp';
import UpLoadBoard from '@pages/UpLoadBoard/UpLoadBoard';
import Weki from '@pages/Weki/Weki';
import WekiList from '@pages/WekiList/WekiList';
import { theme } from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
