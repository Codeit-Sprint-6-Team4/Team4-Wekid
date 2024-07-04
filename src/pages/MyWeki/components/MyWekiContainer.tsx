import React, { ChangeEvent, useEffect, useState } from 'react';
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
  const [isEditMode, setIsEditMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState('');

  const onParticipate = () => {
    if (!isEditNow) {
      // setIsEdit(true);
      setIsModalOpen(true);
      serveEditingProfile();
    }
  };

  const onCancel = () => {
    setIsEditMode(false);
  };

  const onChangeModalInput = (e: ChangeEvent<HTMLInputElement>) => {
    setModalInput(e.target.value);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const confirmAnswer = () => {
    setIsModalOpen(false);
    setIsEditMode(true);
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
      isEditMode={isEditMode}
      isEditNow={isEditNow}
      isModalOpen={isModalOpen}
      modalInput={modalInput}
      onChangeModalInput={onChangeModalInput}
      onParticipate={onParticipate}
      onCancel={onCancel}
      onSave={onSave}
      onModalClose={onModalClose}
      confirmAnswer={confirmAnswer}
    />
  );
};

export default MyWekiContainer;
