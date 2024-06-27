import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfie, profileType } from '@api/profile';
import ProfileUI from './ProfileUI';
import { StyeldProfileWrap } from './profile.styled';

const MyWekiContainer = () => {
  const { code } = useParams();
  const [profile, setProfile] = useState<profileType>();
  const receiveProfile = async () => {
    try {
      const result = await getProfie(code as string);
      setProfile(result);
    } catch (error) {}
  };
  //   useEffect(() => {
  //     receiveProfile();
  //   }, []);
  return (
    <div style={{ margin: '10px 50px' }}>
      <ProfileUI />
    </div>
  );
};

export default MyWekiContainer;
