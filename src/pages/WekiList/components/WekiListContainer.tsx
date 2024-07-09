import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfiles } from '@api/profile';
import WekiListUI from './WekiListUI';

export interface ProfileType {
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

const WekiListContainer = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem('wikilistCurrentPage');
    return savedPage ? Number(savedPage) : 1;
  });
  const itemsPerPage = 3;
  const navigate = useNavigate();

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setSearchKeyword(e.target.value);
  };

  const fetchProfiles = async () => {
    try {
      const { data } = await getProfiles(
        currentPage,
        itemsPerPage,
        searchKeyword,
      );
      setProfiles(data.list);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error('게시글을 불러오는데 실패했습니다.', error);
    }
  };

  console.log(searchKeyword);
  console.log(profiles);

  useEffect(() => {
    fetchProfiles();
    sessionStorage.setItem('wikilistCurrentPage', String(currentPage));
  }, [currentPage, searchKeyword]);

  useEffect(() => {
    setCurrentPage(1);
    fetchProfiles();
    sessionStorage.setItem('wikilistCurrentPage', String(currentPage));
  }, [searchKeyword]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleProfileCardClick = (profile: ProfileType) => {
    navigate(`/wiki/${profile.code}`);
  };

  return (
    <WekiListUI
      profiles={profiles}
      searchKeyword={searchKeyword}
      totalCount={totalCount}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      handleSearchChange={handleSearchChange}
      handleProfileCardClick={handleProfileCardClick}
      handlePageChange={handlePageChange}
    />
  );
};

export default WekiListContainer;
