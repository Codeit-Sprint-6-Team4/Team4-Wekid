import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { userType } from '@api/user';
import { getUserMe } from '@api/user';

const useGetUserData = () => {
  const [myUserData, setUserData] = useState<userType>({
    code: '',
    id: 0,
  });

  const accessToken: string | undefined = Cookies.get('accessToken');

  const getServerUserMe = async () => {
    try {
      const data = await getUserMe(accessToken);
      console.log('getUserMe 데이터:', data);
      if (data.profile) {
        const myCodeInfo = data.profile;
        setUserData((prev) => ({
          ...prev,
          code: myCodeInfo.code,
          id: myCodeInfo.id,
        }));
      } else {
        setUserData((prev) => ({
          ...prev,
          code: '',
          id: data.id,  // profile이 null인 경우에도 id를 설정
        }));
      }
    } catch (error) {
      console.log('user가져오기 에러');
    }
  };

  useEffect(() => {
    if (accessToken) {
      getServerUserMe();
    }
  }, []);
  return { myUserData };
};

export default useGetUserData;
