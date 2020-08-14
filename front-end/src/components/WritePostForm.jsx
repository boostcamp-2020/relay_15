import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

import { apiFetch } from '../apis';

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

const WritePostForm = ({ onClose }) => {
  const uploadRef = useRef();
  const [title, setTitle] = useState('');
  const [img, setImg] = useState(
    'https://images.unsplash.com/photo-1479255833741-74244986c3c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  );

  const uploadData = useCallback(async (data) => {
    try {
      const response = await apiFetch({
        url: `/post/image`,
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const onClickUpload = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  // const uploadPost = () => {};
  const uploadImage = (e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    // uploadData(data);
    // fetch 후
    // setImg(e.target.files[0]);
  };

  const uploadPost = (e) => {};

  return (
    <ModalWrapper>
      <div className="close" onClick={onClose}>
        ❌
      </div>
      <TitleInput placeholder="제목을 입력하세요 :)" value={title} onChange={handleTitle} />
      <Picture src={img} alt="upload" />
      <input type="file" onChange={uploadImage} ref={uploadRef} className="unvisible" />
      <ButtonWrapper>
        <Button title={'이미지 선택'} onClick={onClickUpload}></Button>
        <Button title={'게시글 작성'} onClick={uploadPost}></Button>
      </ButtonWrapper>
    </ModalWrapper>
  );
};

export default WritePostForm;
