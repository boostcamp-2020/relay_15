import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { DetailContainer, TagListWrapper } from './styles/PostDetail.style';
import Post from './Post';
import Tag from './Tag';
import { useMemberState } from '../contexts/MemberContext';
import { BASE_URL } from '../secret';

function arrayFromObject(obj) {
  const result = Object.keys(obj).map((key) => ({ id: key, title: obj[key] }));
  return result;
}

const PostDetail = ({ onClickPost, id }) => {
  const {
    myInfo: { email },
  } = useMemberState();
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [tags, setTags] = useState([]);
  const [recommends, setRecommends] = useState([]);

  const fetchData = useCallback(async (id) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/post/${id}`, { email });
      if (data) {
        setTitle(data.title);
        setImg(data.image);
        setTags(JSON.parse(data.tags));
        setRecommends(arrayFromObject(JSON.parse(data.recommend)));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <DetailContainer>
      <header className="TitleContainer">
        <h1>{title}</h1>
      </header>
      <div className="MainImgContainer">
        <img className="MainImgContainer__item" src={img} alt="post_image" />
      </div>
      {tags && tags.length !== 0 && (
        <TagListWrapper>
          {tags.map((v) => (
            <Tag key={`post_${id}_tag_${v}`} title={v} />
          ))}
        </TagListWrapper>
      )}
      {recommends.map((v) => (
        <Post dummy_id={v.id} dummy_title={v.title} key={`recommend_list${v.id}`} onClick={() => onClickPost(v.id)} />
      ))}
    </DetailContainer>
  );
};

export default PostDetail;
