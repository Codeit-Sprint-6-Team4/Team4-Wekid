import { AxiosResponse } from 'axios';
import instance from './axios';

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
