import React, { ChangeEvent, useState, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { set } from 'date-fns';
import { postImage } from '@api/image';
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
  const [editImage, setEditImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('');
  const { code } = useParams();
  const quailRef = useRef<ReactQuill>(null);

  const onChangeProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const value = e.target.files[0];
      setEditImage(value);
      const imageURL = URL.createObjectURL(value);
      setPreviewImage(imageURL);
    }
  };

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
        if (code === userData?.profile?.code && editImage != null) {
          const response = await postImage(editImage);
          if (typeof response === 'string') {
            await patchProfile(code, profile, quailRef.current.value, response);
            return;
          }
        }
        await patchProfile(code, profile, quailRef.current.value);
      }
    } catch (error) {}
  };
  const onCancel = () => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
    setEditImage(null);
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
      editImage={editImage}
      previewImage={previewImage}
      onChangeProfileImage={onChangeProfileImage}
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
