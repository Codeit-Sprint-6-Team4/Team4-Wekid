import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';

export const getComment = async (
  articleId: string,
  limit: number = 10,
  cursor?: number,
) => {
  const URL = `/articles/${articleId}/comments`;
  try {
    const response = await instance.get(URL, {
      params: {
        articleId,
        limit,
        cursor,
      },
    });
    return response.data; // 응답 전체 반환 (list와 nextCursor를 포함)
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

export const getAllComments = async (articleId: string) => {
  const URL = `/articles/${articleId}/comments`;
  try {
    const response = await instance.get(URL, {
      params: {
        articleId,
        limit: 1000, // 큰 limit 값을 설정하여 모든 댓글을 가져옴
      },
    });
    return response.data.list.length; // 댓글의 총 개수를 반환
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

export const postComment = async (id: string, content: string) => {
  const URL = `/articles/${id}/comments`;
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token); // 토큰 확인
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers); // 헤더 확인

    const response = await instance.post(URL, { content }, { headers });
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

export const deleteComment = async (commentId: string) => {
  const URL = `/comments/${commentId}`;
  try {
    const token = Cookies.get('accessToken'); // 쿠키에서 토큰 가져오기
    if (!token) {
      throw new Error('No access token found');
    }
    const response = await instance.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 헤더에 토큰 추가
      },
    });
    return response.data; // 일반적으로 성공 메시지 또는 상태 코드 반환
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

export const patchComment = async (commentId: string, content: string) => {
  const URL = `/comments/${commentId}`;
  try {
    const token = Cookies.get('accessToken'); // 쿠키에서 토큰 가져오기
    if (!token) {
      throw new Error('No access token found');
    }
    const response = await instance.patch(
      URL,
      { content }, // 요청 본문에 업데이트할 데이터 포함
      {
        headers: {
          Authorization: `Bearer ${token}`, // 인증 헤더에 토큰 추가
        },
      },
    );
    return response.data; // 일반적으로 성공 메시지 또는 상태 코드 반환
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};
