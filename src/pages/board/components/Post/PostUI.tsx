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
import { useNavigate } from 'react-router-dom';

interface PostUIProps {
  post: {
    title: string;
    writer: { id: string; name: string };
    createdAt: string;
    content: string;
    isLiked: boolean;
  };
  likes: number;
  onLike: () => void;
  onEdit: () => void;
  onDelete: () => void;
  isMyPost: boolean; // 본인 게시글 여부 추가
}

const PostUI: React.FC<PostUIProps> = ({ post, likes, onLike, onEdit, onDelete, isMyPost }) => {
  const navigate = useNavigate();

  return (
    <>
      <PostContentWrapper>
        <PostInfoWrapper>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            {isMyPost && (
              <PostActions>
                <Button $primary onClick={onEdit}>수정하기</Button>
                <Button $primary onClick={onDelete}>삭제하기</Button>
              </PostActions>
            )}
          </PostHeader>
          <PostMeta>
            <AuthorInfo>
              <AuthorName>{post.writer.name}</AuthorName>
              <PostDate>{new Date(post.createdAt).toLocaleDateString()}</PostDate>
            </AuthorInfo>
            <LikeButtonWrapper>
              <LikeButton $isLiked={post.isLiked} onClick={onLike}>
                <span className="blind">좋아요</span>
              </LikeButton>
              {likes}
            </LikeButtonWrapper>
          </PostMeta>
        </PostInfoWrapper>
        <PostBody>{post.content}</PostBody>
      </PostContentWrapper>
      <BackToListWrapper>
        <Button $secondary onClick={() => {
          navigate('/boards');
        }}>목록으로</Button>
      </BackToListWrapper>
    </>
  );
};

export default PostUI;
