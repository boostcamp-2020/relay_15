import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import WritePostForm from './WritePostForm';
import Post from './Post';
import Button from '../common/Button';
import { useMemberState } from '../contexts/MemberContext';





const MainPostsSection = ({ onClickPost })=> {
  const { myInfo } = useMemberState();
  const [postList, setPostList] = useState([])
  const [isVisibleWriteForm, setIsVisibleWriteForm] = useState(false);

  const onClickWritePostVisible = useCallback(() => {
    setIsVisibleWriteForm(true);
  }, []);

  const onClickWritePostUnVisible = useCallback(() => {
    setIsVisibleWriteForm(false);
    console.log('test');
  }, []);

  useEffect(()=>{
    (async () =>{
      console.log(myInfo.email);
      if(myInfo.email){
        const response = await axios.post('http://61.97.188.233/post', { email:myInfo.email });
        console.log(response);
        console.log("데이터가 넘어갈까융"+response.data);
        if(response.data){
          setPostList(response.data);
        }
      }
     })();
  }, [])

  return (
    <>
      {isVisibleWriteForm && <WritePostForm onClose={onClickWritePostUnVisible} />}
      <MainPostsSectionWrapper>
        <div>
          <Button onClick={onClickWritePostVisible} title="게시글 작성" />
        </div>
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

const Input = styled.input`
  background: blue;
  font-size: 11px;
`;

export default MainPostsSection;
