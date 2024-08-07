import React, { ChangeEvent, useState, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { MyWekiDataContext, contextType } from '@context/myWekiDataContext';
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
    isLoading,
  } = useMywekiAPi();
  const context = useContext(MyWekiDataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const [editImage, setEditImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('');
  const { code } = useParams();
  const quailRef = useRef<ReactQuill>(null);

  const onParticipate = () => {
    if (typeof isEditNow !== 'string' && context !== undefined) {
      if (isEditNow.userId === context.myUserData?.id) {
        setIsModalOpen(true);
        return;
      } else if (isEditNow.userId !== context.myUserData?.id) {
        return;
      }
    }
    setIsModalOpen(true);
  };

  const onChangeProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const value = e.target.files[0];
      setEditImage(value);
      const imageURL = URL.createObjectURL(value);
      setPreviewImage(imageURL);
    }
  };
  const editorImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); //toolbar 이미지를 누르게 되면 이 부분이 실행된다.
    input.onchange = async () => {
      /*이미지 선택에 따른 조건을 다시 한번 하게 된다.*/
      if (input.files !== null) {
        const file: File = input.files[0];

        let quillObj = quailRef.current?.getEditor();
        const range = quillObj?.getSelection()!;

        const res = await postImage(file);
        if (res !== undefined) {
          quillObj?.insertEmbed(range.index, 'image', `${res}`);
        }
      }
    };
  };

  const editPathProfile = async () => {
    try {
      if (typeof code === 'string' && quailRef.current && profile !== null) {
        if (code === context?.myUserData?.profile?.code && editImage != null) {
          const response = await postImage(editImage);
          if (typeof response === 'string') {
            await patchProfile(code, profile, quailRef.current.value, response);
            return;
          }
        }
        await patchProfile(code, profile, quailRef.current.value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSave = async () => {
    await editPathProfile();
    setIsEditMode(false);
    setModalInput('');
  };

  const onCancel = () => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
    setEditImage(null);
    setIsEditMode(false);
    receiveProfile();
    setModalInput('');
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

  const onModalClose = (closeType?: string) => {
    if (closeType === 'permission') {
      setIsModalOpen(false);
      return;
    }
    setModalInput('');
    setIsModalOpen(false);
  };

  const onTimeOut = () => {
    setModalInput('');
    setIsEditMode(false);
  };

  return (
    <MyWekiUI
      isLoading={isLoading}
      ref={quailRef}
      profile={profile}
      isEditNow={isEditNow}
      isEditMode={isEditMode}
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
      editorImageHandler={editorImageHandler}
      onTimeOut={onTimeOut}
    />
  );
};

export default MyWekiContainer;
