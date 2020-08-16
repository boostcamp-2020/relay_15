import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../common/Button';
import { useMemberState } from '../contexts/MemberContext';

import { useInput } from '../hooks';
import { BASE_URL } from '../secret';

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeeee;
  border: 1px solid #000;
  border-radius: 4px;

  & > .unvisible {
    display: none;
  }

  & > .close {
    align-self: flex-end;
    margin-right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  & > button {
    width: 150px;
    margin: 10px;
  }
`;

const Picture = styled.img`
  margin-left: 0px;
  width: 380px;
  height: 380px;
  opacity: ${({ visivle }) => (visivle ? '1' : '0')};
`;

const TitleInput = styled.input`
  margin: 10px;
  width: 380px;
  height: 28px;
  border: 3px solid #eeeeee;

  &:focus {
    outline: none;
  }
`;

const WritePostForm = ({ onClose, update }) => {
  const {
    myInfo: { email },
  } = useMemberState();
  const uploadRef = useRef();
  const [title, onChangeTitle] = useInput('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState(null);

  const onClickUpload = useCallback(() => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  }, []);

  const uploadImage = useCallback(async (e) => {
    e.preventDefault();
    const imageFormData = new FormData();
    imageFormData.append('image', e.target.files[0]);

    const { data } = await axios.post(`${BASE_URL}/post/image`, imageFormData);
    if (data && data.url) {
      setImage(data.url);
      setTags(data.tags);
    }
  }, []);

  const uploadPost = useCallback(
    async (e) => {
      e.preventDefault();
      if (title.trim() && title.length < 50 && image && email) {
        const { data } = await axios.post(`${BASE_URL}/post/upload`, {
          email,
          title,
          image,
          tags: tags || [],
        });
        if (data) {
          onClose();
          update();
          return;
        }
        alert('게시글 작성에 실패했습니다.');
        return;
      }
      alert('올바르지 않은 값입니다');
    },
    [title, image, email, tags],
  );

  return (
    <ModalWrapper>
      <div className="close" onClick={onClose}>
        ❌
      </div>
      <TitleInput placeholder="제목을 입력하세요 :)" value={title} onChange={onChangeTitle} />
      <Picture src={image} alt="upload" visivle={image} />
      <input type="file" hidden onChange={uploadImage} ref={uploadRef} />
      <ButtonWrapper>
        <Button title={'이미지 선택'} onClick={onClickUpload}></Button>
        <Button title={'게시글 작성'} onClick={uploadPost}></Button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default WritePostForm;
