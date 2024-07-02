import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { getProfie, profileType } from '@api/profile';
import MyWekiUI from './MyWekiUI';

const MyWekiContainer = () => {
  const { code } = useParams();
  const [profile, setProfile] = useState<profileType | null>(null);
  const [isEdit, setIsEdit] = useState(true);

  const onCancel = () => {
    setIsEdit(false);
  };

  const onSave = () => {};

  const receiveProfile = async () => {
    try {
      if (typeof code === 'string') {
        const result = await getProfie('d1119f52-da1a-4ef6-b212-85e047100d1f');
        setProfile(result);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  useEffect(() => {
    receiveProfile();
  }, []);

  return (
    <MyWekiUI
      profile={profile}
      isEdit={isEdit}
      onSave={onSave}
      onCancel={onCancel}
    />
  );
};

export default MyWekiContainer;
