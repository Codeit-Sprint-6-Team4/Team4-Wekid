import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfie, profileType } from '@api/profile';
import Button from '@components/button/Button';
import MyWekiUI from './MyWekiUI';
import ProfileUI from './ProfileUI';
import { StyeldProfileWrap } from './profile.styled';
import {
  StyledWekiWrap,
  StyledWekiHeader,
  StyledWekiContent,
} from './wekiPage.styled';

const MyWekiContainer = () => {
  const { code } = useParams();
  const [profile, setProfile] = useState<profileType | null>(null);
  const receiveProfile = async () => {
    try {
      const result = await getProfie('d1119f52-da1a-4ef6-b212-85e047100d1f');
      setProfile(result);
    } catch (error) {}
  };
  useEffect(() => {
    receiveProfile();
  }, []);
  return <MyWekiUI profile={profile} />;
};

export default MyWekiContainer;
