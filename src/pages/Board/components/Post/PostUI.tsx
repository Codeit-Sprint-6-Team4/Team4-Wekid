import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
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

const PostUI: React.FC<PostUIProps> = ({
  post,
  likes,
  onLike,
  onEdit,
  onDelete,
  isMyPost,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <PostContentWrapper>
        <PostInfoWrapper>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            {isMyPost && (
              <PostActions>
                <Button $primary onClick={onEdit} className="edit">
                  <span>수정하기</span>
                </Button>
                <Button $primary onClick={onDelete} className="delete">
                  <span>삭제하기</span>
                </Button>
              </PostActions>
            )}
          </PostHeader>
          <PostMeta>
            <AuthorInfo>
              <AuthorName>{post.writer.name}</AuthorName>
              <PostDate>
                {new Date(post.createdAt).toLocaleDateString()}
              </PostDate>
            </AuthorInfo>
            <LikeButtonWrapper>
              <LikeButton $isLiked={post.isLiked} onClick={onLike}>
                <span className="blind">좋아요</span>
              </LikeButton>
              {likes}
            </LikeButtonWrapper>
          </PostMeta>
        </PostInfoWrapper>
        <PostBody
          className="view ql-editor"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </PostContentWrapper>
      <BackToListWrapper>
        <Button
          $secondary
          onClick={() => {
            navigate('/boards');
          }}
        >
          목록으로
        </Button>
      </BackToListWrapper>
    </>
  );
};

export default PostUI;
