import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import {
  getProfie,
  profileType,
  getProfileEditCheck,
  profileCheckType,
  postEditingProfile,
} from '@api/profile';
import MyWekiUI from './MyWekiUI';

const MyWekiContainer = () => {
  const { code } = useParams();
  const [profile, setProfile] = useState<profileType | null>(null);
  const [isEditNow, setIsEditNow] = useState<profileCheckType | string>('');
  const [isEdit, setIsEdit] = useState(false);

  const onParticipate = () => {
    if (!isEditNow) {
      // setIsEdit(true);
      serveEditingProfile();
    }
  };

  const onCancel = () => {
    setIsEdit(false);
  };

  const onSave = () => {};

  const receiveProfile = async () => {
    try {
      if (typeof code === 'string') {
        const result = await getProfie(code);
        setProfile(result);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  const receiveProfileEditCheck = async () => {
    console.log('시작');
    try {
      if (typeof code === 'string') {
        const response = await getProfileEditCheck(code);
        setIsEditNow(response);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  const serveEditingProfile = async () => {
    try {
      if (typeof code === 'string') {
        const response = await postEditingProfile(code, 'test');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  useEffect(() => {
    receiveProfile();
    receiveProfileEditCheck();
    const timeCheck = setInterval(receiveProfileEditCheck, 300000);
    return () => clearInterval(timeCheck);
  }, []);

  return (
    <MyWekiUI
      profile={profile}
      isEdit={isEdit}
      isEditNow={isEditNow}
      onParticipate={onParticipate}
      onCancel={onCancel}
      onSave={onSave}
    />
  );
};

export default MyWekiContainer;
