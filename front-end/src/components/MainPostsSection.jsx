import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import WritePostForm from './WritePostForm';
import Post from './Post';
import Button from '../common/Button';
import { useMemberState } from '../contexts/MemberContext';
import { BASE_URL } from '../secret';

const MainPostsSection = ({ onClickPost }) => {
  const { myInfo } = useMemberState();
  const [postList, setPostList] = useState([]);
  const [isVisibleWriteForm, setIsVisibleWriteForm] = useState(false);

  const onClickWritePostVisible = useCallback(() => {
    setIsVisibleWriteForm(true);
  }, []);

  const onClickWritePostUnVisible = useCallback(() => {
    setIsVisibleWriteForm(false);
  }, []);

  useEffect(() => {
    (async () => {
      if (myInfo.email) {
        const response = await axios.post(`${BASE_URL}/post`, { email: myInfo.email });
        if (response.data) {
          setPostList(response.data);
        }
      }
    })();
  }, []);

  return (
    <>
      {isVisibleWriteForm && <WritePostForm onClose={onClickWritePostUnVisible} />}
      <MainPostsSectionWrapper>
        <div>{myInfo.email && <Button onClick={onClickWritePostVisible} title="게시글 작성" />}</div>
        <section>
          {postList.map((v) => (
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

export default MainPostsSection;
