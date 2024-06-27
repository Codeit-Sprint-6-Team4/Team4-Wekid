import React from 'react';
import Button from '@components/button/Button';
import {
  PostContentWrapper,
  PostInfoWrapper,
  PostHeader,
  PostTitle,
  PostActions,
  PostMeta,
  AuthorInfo,
  AuthorName,
  PostDate,
  LikeButtonWrapper,
  LikeButton,
  PostBody,
  BackToListWrapper,
} from './PostUIStyled';

interface PostUIProps {
  post: {
    title: string;
    author: string;
    date: string;
    body: string;
  };
  likes: number;
  onLike: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const PostUI: React.FC<PostUIProps> = ({
  post,
  likes,
  onLike,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <PostContentWrapper>
        <PostInfoWrapper>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostActions>
              <Button $primary onClick={onEdit}>
                수정하기
              </Button>
              <Button $primary onClick={onDelete}>
                삭제하기
              </Button>
            </PostActions>
          </PostHeader>
          <PostMeta>
            <AuthorInfo>
              <AuthorName>{post.author}</AuthorName>
              <PostDate>{post.date}</PostDate>
            </AuthorInfo>
            <LikeButtonWrapper>
              <LikeButton onClick={onLike}>
                <span className="blind">좋아요</span>
              </LikeButton>
                {likes}
            </LikeButtonWrapper>
          </PostMeta>
        </PostInfoWrapper>
        <PostBody>{post.body}</PostBody>
      </PostContentWrapper>
      <BackToListWrapper>
        <Button $secondary>목록으로</Button>
      </BackToListWrapper>
    </>
  );
};

export default PostUI;
