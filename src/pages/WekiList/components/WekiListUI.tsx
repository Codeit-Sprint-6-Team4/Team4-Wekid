import React from 'react';
import Pagination from '@components/pagination/Pagination';
import UserCardFrame from './UserCardFrame';
import {
  StyledNoResultContainer,
  StyledNoResultImage,
  StyledSearchBarAndResultContainer,
  StyledSearchNoResultsMessage,
  StyledSearchResultsMessage,
  StyledUserCardWrapper,
  StyledWekiListContainer,
  StyledWekiListPageContainer,
} from './WekiList.styled';
import { ProfileType } from './WekiListContainer';
import WekiSeacrhBar from './WekiSeacrhBar';

interface WekiListUIProps {
  profiles: ProfileType[];
  searchKeyword: string;
  totalCount: number;
  itemsPerPage: number;
  currentPage: number;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  handleProfileCardClick: (profile: ProfileType) => void;
  handlePageChange: (page: number) => void;
}

const WekiListUI: React.FC<WekiListUIProps> = ({
  profiles,
  searchKeyword,
  totalCount,
  itemsPerPage,
  currentPage,
  handleSearchChange,
  handleProfileCardClick,
  handlePageChange,
}) => {
  return (
    <StyledWekiListPageContainer>
      <StyledSearchBarAndResultContainer>
        <WekiSeacrhBar
          placeholder="제목을 검색해 주세요"
          onChange={handleSearchChange}
          value={searchKeyword}
        />
        {searchKeyword &&
          (totalCount > 0 ? (
            <StyledSearchResultsMessage>
              "{searchKeyword}"님을 총 <span>{totalCount}</span>명 찾았습니다.
            </StyledSearchResultsMessage>
          ) : (
            <StyledNoResultContainer>
              <StyledSearchNoResultsMessage>
                "{searchKeyword}"과 일치하는 검색 결과가 없어요.
              </StyledSearchNoResultsMessage>
              <StyledNoResultImage />
            </StyledNoResultContainer>
          ))}
      </StyledSearchBarAndResultContainer>
      <StyledWekiListContainer>
        {profiles &&
          profiles.length > 0 &&
          profiles.map((profile) => (
            <StyledUserCardWrapper
              key={profile.id}
              onClick={() => handleProfileCardClick(profile)}
            >
              <UserCardFrame
                image={profile.image}
                name={profile.name}
                city={profile.city}
                nationality={profile.nationality}
                job={profile.job}
                code={profile.code}
              />
            </StyledUserCardWrapper>
          ))}
      </StyledWekiListContainer>
      <Pagination
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledWekiListPageContainer>
  );
};

export default WekiListUI;
