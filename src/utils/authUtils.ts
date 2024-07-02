import { NavigateFunction } from 'react-router-dom';

export const handleLogout = (navigate: NavigateFunction) => {
  // 로그아웃 로직 (토큰 삭제, 사용자 상태 초기화 등)
  localStorage.removeItem('token');
  navigate('/login');
};
