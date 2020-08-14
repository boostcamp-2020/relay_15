import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import WritePostForm from './WritePostForm';
import Post from './Post';
import Button from '../common/Button';

const dummy = [
  { id: 1, title: '안녕하세요' },
  { id: 2, title: '반갑습니다' },
  { id: 3, title: '잘있어요' },
];

const MainPostsSection = ({ onClickPost }) => {
  const [isVisibleWriteForm, setIsVisibleWriteForm] = useState(false);

  const onClickWritePostVisible = useCallback(() => {
    setIsVisibleWriteForm(true);
  }, []);

  const onClickWritePostUnVisible = useCallback(() => {
    setIsVisibleWriteForm(false);
    console.log('test');
  }, []);

  return (
    <>
      {isVisibleWriteForm && <WritePostForm onClose={onClickWritePostUnVisible} />}
      <MainPostsSectionWrapper>
        <div>
          <Button onClick={onClickWritePostVisible} title="게시글 작성" />
        </div>
        <section>
          {dummy.map((v) => (
            <Post dummy_id={v.id} dummy_title={v.title} key={`post_list${v.id}`} onClick={() => onClickPost(v.id)} />
          ))}
        </section>
      </MainPostsSectionWrapper>
    </>
  );
};

const MainPostsSectionWrapper = styled.section`
  padding-top: 16px;
  width: 500px;

  & > div {
    display: flex;
    justify-content: flex-end;
    & > button {
      margin-right: 10px;
    }
  }

  & > section {
    margin-top: 16px;

    & > div {
      margin-bottom: 4px;
    }
  }
`;

const Input = styled.input`
  background: blue;
  font-size: 11px;
`;

export default MainPostsSection;
