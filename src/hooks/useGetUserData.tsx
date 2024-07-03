import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { userType } from '@api/user';
import { getUserMe } from '@api/user';

const useGetUserData = () => {
  const [myUserData, setUserData] = useState<userType | null>(null);

  const accessToken: string | undefined = Cookies.get('accessToken');

  const getServerUserMe = async () => {
    try {
      const response: AxiosResponse<userType> = await getUserMe(accessToken);
      if (response.data) {
        setUserData({
          profile: {
            code: response.data.profile?.code || '',
            id: response.data.profile?.id || 0,
          },
          updatedAt: response.data.updatedAt || '',
          createdAt: response.data.createdAt || '',
          teamId: response.data.teamId || '',
          name: response.data.name || '',
          id: response.data.id || 0,
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
