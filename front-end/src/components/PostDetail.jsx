import React, { useEffect, useState, useCallback } from 'react';
import { DetailContainer } from './styles/PostDetail.style';
import Post from './Post';

import { apiFetch } from '../apis';

const PostDetail = ({ id }) => {
  const [title, setTitle] = useState('게시글 상세뷰');
  const [img_url, setImg] = useState('https://source.unsplash.com/random/1');
  const [recommend_arr, setRecommends] = useState([
    { id: 1, title: '추천!' },
    { id: 2, title: '선인장!' },
  ]);
  const fetchData = useCallback(async (id) => {
    try {
      const response = await apiFetch({
        url: `/post/${id}`,
      });
      //   setTitle();
      //   setImg();
      //   setRecommends();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <DetailContainer>
      <header className="TitleContainer">
        <h1>{title}</h1>
      </header>
      <div className="MainImgContainer">
        <img className="MainImgContainer__item" src={img_url} alt="" />
      </div>
      {recommend_arr.map((v) => (
        <Post dummy_id={v.id} dummy_title={v.title} key={`recommend_list${v.id}`} />
      ))}
    </DetailContainer>
  );
};

export default PostDetail;
