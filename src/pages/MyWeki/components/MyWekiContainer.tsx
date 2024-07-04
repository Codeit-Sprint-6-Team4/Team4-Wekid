import React, { ChangeEvent, useState, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { userType } from '@api/user';
import useMywekiAPi from '@hooks/useMywekiAPi';
import MyWekiUI from './MyWekiUI';

const MyWekiContainer = () => {
  const { profile, isEditNow, setProfile, receiveProfile } = useMywekiAPi();
  const userData = useContext<userType | null>(MyWekiDataContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState('');

  const quailRef = useRef<ReactQuill>(null);

  const onParticipate = () => {
    if (typeof isEditNow !== 'string' && userData !== null) {
      if (isEditNow.userId === userData.profile?.id) {
        setIsModalOpen(true);
        return;
      }
    }
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsEditMode(false);
    receiveProfile();
  };

  const onChangeModalInput = (e: ChangeEvent<HTMLInputElement>) => {
    setModalInput(e.target.value);
  };
  const onChangeProfileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (profile) {
      setProfile({ ...profile, [name]: e.target.value });
    }
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onSave = () => {
    if (quailRef.current) {
      console.log(quailRef.current.value);
    }
  };

  return (
    <MyWekiUI
      ref={quailRef}
      profile={profile}
      isEditMode={isEditMode}
      isEditNow={isEditNow}
      isModalOpen={isModalOpen}
      modalInput={modalInput}
      setIsEditMode={setIsEditMode}
      onChangeModalInput={onChangeModalInput}
      onChangeProfileInput={onChangeProfileInput}
      onParticipate={onParticipate}
      onCancel={onCancel}
      onSave={onSave}
      onModalClose={onModalClose}
    />
  );
};

export default MyWekiContainer;
