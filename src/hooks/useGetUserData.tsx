import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { userType } from '@api/user';
import { getUserMe } from '@api/user';

const useGetUserData = () => {
  const [myUserData, setUserData] = useState<userType | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const accessToken: string | undefined = Cookies.get('accessToken');

  const getServerUserMe = async () => {
    try {
      const response = await getUserMe(accessToken);
      if (response) {
        setUserData({
          profile: response.profile,
          updatedAt: response.updatedAt || '',
          createdAt: response.createdAt || '',
          teamId: response.teamId || '',
          name: response.name || '',
          id: response.id || 0,
        });
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
    if (!isLogin) {
      setUserData(null);
    }
  }, [isLogin]);
  return { myUserData, isLogin, setIsLogin };
};

export default useGetUserData;
