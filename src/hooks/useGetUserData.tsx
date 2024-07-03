import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { userType } from '@api/user';
import { getUserMe } from '@api/user';

const useGetUserData = () => {
  const [myUserData, setUserData] = useState<userType | null>(null);

  const accessToken: string | undefined = Cookies.get('accessToken');

  const getServerUserMe = async () => {
    try {
      const myCodeInfo = await getUserMe(accessToken);
      if (myCodeInfo) {
        setUserData({
          profile: {
            code: myCodeInfo.profile.code || '',
            id: myCodeInfo.profile.id || 0,
          },
          updatedAt: myCodeInfo.updatedAt || '',
          createdAt: myCodeInfo.createdAt || '',
          teamId: myCodeInfo.teamId || '',
          name: myCodeInfo.name || '',
          id: myCodeInfo.id || 0,
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
  }, []);
  return { myUserData };
};

export default useGetUserData;
