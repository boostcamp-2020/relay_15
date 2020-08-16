import React, { useCallback, useEffect, useState } from 'react';
import BoostHeader from '../components/BoostHeader';
import Friend from '../components/Friend';
import PostDetail from '../components/PostDetail';

import { useMemberState, useMemberDispatch } from '../contexts/MemberContext';
import { apiFetch } from '../apis';

import { MainStyle } from './styles/Main.style';
import MainHomeSection from '../components/MainHomeSection';
import MainPostsSection from '../components/MainPostsSection';

function Main({ match }) {
  const { myInfo, mainInfo } = useMemberState();
  const [isHome, setIsHome] = useState(true);
  const [isPostList, setIsPostList] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const dispatch = useMemberDispatch();

  const fetchMainInfo = useCallback(async () => {
    try {
      const response = await apiFetch({
        url: `/guestbook/${match.params.email}`,
      });
      dispatch({
        type: 'GET_MAIN_INFO',
        value: response,
      });
    } catch (e) {
      console.error(e);
    }
  }, [match.params.email, dispatch]);

  useEffect(() => {
    fetchMainInfo();
  }, [match.params.email, fetchMainInfo]);

  const onClickHome = useCallback(() => {
    setIsHome(true);
    setIsPostList(false);
    setIsPost(false);
  }, []);
  const onClickPostList = useCallback(() => {
    setIsHome(false);
    setIsPostList(true);
    setIsPost(false);
  }, []);

  const onClickPost = useCallback((id) => {
    setIsHome(false);
    setIsPostList(false);
    setIsPost(id);
  }, []);

  return (
    <MainStyle>
      <BoostHeader />
      <section className="main-content">
        <section className="profile">
          <section className="profile-intro">
            <p>닉네임: {mainInfo.name}</p>
            <p>이메일: {mainInfo.email}</p>
            <p>자기소개</p>
            <p>설문조사 내용</p>
          </section>
          {isHome && <MainHomeSection mainInfo={mainInfo} myInfo={myInfo} dispatch={dispatch} />}
          {isPostList && <MainPostsSection myInfo={myInfo} mainInfo={mainInfo} onClickPost={onClickPost} />}
          {isPost !== false && <PostDetail id={isPost} />}

          <nav className="profile-buttons">
            <button id="home" onClick={onClickHome}>
              홈
            </button>
            <button id="board" onClick={onClickPostList}>
              게시판
            </button>
          </nav>
        </section>

        <aside>
          <h2>{mainInfo.name}님의 일촌</h2>
          <ul className="friends-list">
            {mainInfo.friends && mainInfo.friends.map((friend) => <Friend key={friend} friend={friend} />)}
          </ul>
        </aside>
      </section>
    </MainStyle>
  );
}

export default Main;
