import { AxiosResponse } from 'axios';
import instance from './axios';

interface postImageType {
  url: string;
}
export const postImage = async (imageData: File | null) => {
  const URL = `images/upload`;
  if (imageData === null) {
    return;
  }
  try {
    const response: AxiosResponse<postImageType> = await instance.post(
      URL,
      {
        image: imageData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data.url;
  } catch (error) {
    console.error(error);
  }
};
