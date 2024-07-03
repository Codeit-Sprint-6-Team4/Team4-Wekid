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
  return { myUserData };
};

export default useGetUserData;
