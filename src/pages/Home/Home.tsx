import React from 'react';
import InputProfile from '@components/input/InputProfile';
import { StyledProfileFrame } from '@components/input/inputProfileFrame';

const Home = () => {
  return (
    <div>
      메인페이지입니다.
      <InputProfile name="테스트" value="s" onChange={() => {}} />
    </div>
  );
};

export default Home;
