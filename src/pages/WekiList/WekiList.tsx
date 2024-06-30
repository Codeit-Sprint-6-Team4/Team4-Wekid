import React from 'react';
import Vactor from '@assets/images/Vector.svg';
import UserCardFrame from './components/UserCardFrame';

const WekiList: React.FC = () => {
  const userData = {
    image: Vactor,
    name: '김동욱',
    city: '서울',
    nationality: '대한민국',
    job: '대학생',
    code: 'kimdong',
  };

  return (
    <div>
      <UserCardFrame {...userData} />
    </div>
  );
};

export default WekiList;
