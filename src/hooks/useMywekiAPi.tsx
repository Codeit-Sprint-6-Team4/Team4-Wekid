import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { getProfie } from '@api/profile';
import { profileType } from '@api/profile';
import { profileCheckType } from '@api/profile';
import { getProfileEditCheck } from '@api/profile';

const useMywekiAPi = () => {
  const { code } = useParams();
  const [profile, setProfile] = useState<profileType | null>(null);
  const [isEditNow, setIsEditNow] = useState<profileCheckType | string>('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const receiveProfile = async () => {
    try {
      if (typeof code === 'string') {
        setIsLoading(true);
        const result = await getProfie(code);
        setProfile(result);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    } finally {
      setIsLoading(false);
    }
  };

  const receiveProfileEditCheck = async () => {
    try {
      if (typeof code === 'string') {
        console.log('시작');
        const response = await getProfileEditCheck(code);
        console.log(response);

        setIsEditNow(response);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  useEffect(() => {
    receiveProfile();
    receiveProfileEditCheck();
    const timeCheck = setInterval(receiveProfileEditCheck, 1500);
    return () => clearInterval(timeCheck);
  }, [isEditMode]);
  return {
    profile,
    isEditNow,
    setProfile,
    receiveProfile,
    isEditMode,
    setIsEditMode,
    isLoading,
  };
};

export default useMywekiAPi;
