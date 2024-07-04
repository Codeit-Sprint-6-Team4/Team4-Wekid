import React, { ChangeEvent, useState, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { patchProfile } from '@api/profile';
import { userType } from '@api/user';
import useMywekiAPi from '@hooks/useMywekiAPi';
import MyWekiUI from './MyWekiUI';

const MyWekiContainer = () => {
  const {
    profile,
    isEditNow,
    setProfile,
    receiveProfile,
    isEditMode,
    setIsEditMode,
  } = useMywekiAPi();
  const userData = useContext<userType | null>(MyWekiDataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const { code } = useParams();
  const quailRef = useRef<ReactQuill>(null);

  const onParticipate = () => {
    if (typeof isEditNow !== 'string' && userData !== null) {
      if (isEditNow.userId === userData.id) {
        setIsModalOpen(true);
        return;
      } else if (isEditNow.userId !== userData.id) {
        return;
      }
    }

    setIsModalOpen(true);
  };

  const editPathProfile = async () => {
    try {
      if (typeof code === 'string' && quailRef.current && profile !== null) {
        await patchProfile(code, profile, quailRef.current.value);
      }
    } catch (error) {}
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
    setModalInput('');
    setIsModalOpen(false);
  };

  const onSave = async () => {
    await editPathProfile();
    setIsEditMode(false);
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
