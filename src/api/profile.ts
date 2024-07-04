import ReactQuill from 'react-quill';
import { AxiosError, AxiosResponse } from 'axios';
import instance from './axios';
import { userType } from './user';

export interface profileType {
  updatedAt: string;
  securityQuestion: string;
  teamId: string;
  content: string;
  nationality: string;
  family: string;
  bloodType: string;
  nickname: string;
  birthday: string;
  sns: string;
  job: string;
  mbti: string;
  city: string;
  image: string;
  code: string;
  name: string;
  id: number;
}

export interface profileCheckType {
  registerAt: string;
  userId: number;
}

export interface errorMessageType {
  message: string;
}

export const getProfie = async (code: string): Promise<profileType> => {
  const URL = `/profiles/${code}`;

  try {
    const response: AxiosResponse<profileType> = await instance.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfiles = async (page = 1, pageSize = 3, name = '') => {
  const params = {
    page,
    pageSize,
    name,
  };
  return instance.get(`/profiles`, { params });
};

export const getProfileEditCheck = async (code: string) => {
  const URL = `/profiles/${code}/ping`;

  try {
    const response: AxiosResponse<profileCheckType | string> =
      await instance.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postEditingProfile = async (
  code: string,
  securityAnswer: string,
) => {
  const URL = `/profiles/${code}/ping`;

  try {
    const response: AxiosResponse<string> = await instance.post(URL, {
      securityAnswer: securityAnswer,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        const response = error.response.data as errorMessageType;
        console.error(response.message);
        throw error;
      }
    }
  }
};

export const patchProfile = async (
  code: string,
  profile: profileType,
  content: ReactQuill.Value,
) => {
  const URL = `/profiles/${code}`;
  try {
    await instance.patch(URL, {
      nationality: profile.nationality,
      family: profile.family,
      bloodType: profile.bloodType,
      nickname: profile.nickname,
      birthday: profile.birthday,
      sns: profile.sns,
      job: profile.job,
      mbti: profile.city,
      city: profile.city,
      image: profile.image,
      content: content,
    });
  } catch (error) {}
};
