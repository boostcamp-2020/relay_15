import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { apiFetch } from '../apis';

const Post = (props) => {
  const fetchData = useCallback(async () => {
    try {
      const response = await apiFetch({
        url: `/post`,
      });
      //   setTitle();
      //   setImg();
      //   setRecommends();
    } catch (e) {
      console.error(e);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <LiList onClick={props.onClick}>
      <span>{props.dummy_id}</span>
      <span>{props.dummy_title}</span>
    </LiList>
  );
};

const LiList = styled.div`
  border-bottom: 1px solid #aaaaaa;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  margin: 0 8px;

  & > span:first-child {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export default Post;
