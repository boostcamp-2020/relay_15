import React, { useCallback, useEffect } from 'react';
import BoostHeader from './BoostHeader';
import GuestBook from './GuestBook';
import Friend from './Friend';

import { useMemberState, useMemberDispatch } from '../contexts/MemberContext';
import { apiFetch } from '../apis';
import { useInput } from '../hooks';
import { MainStyle } from './style/Main.style';

function Main({ match }) {
  const { myInfo, mainInfo } = useMemberState();
  const dispatch = useMemberDispatch();

  const [text, onChnageText, setText] = useInput('');

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

  const writeGuestBook = useCallback(
    async (e) => {
      try {
        const response = await apiFetch({
          url: '/guestbook',
          method: 'POST',
          body: {
            from: myInfo.email,
            to: mainInfo.email,
            content: text,
          },
        });

        dispatch({
          type: 'ADD_GUEST_BOOK',
          value: response,
        });

        setText('');
      } catch (e) {
        console.error(e.message);
      }
    },
    [myInfo, mainInfo, text, dispatch, setText]
  );

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

          <section className="profile-content" id="profile-content">
            <h1 className="home-title">{mainInfo.name}님의 미니홈피</h1>
            <h3>방명록을 작성해주세요.</h3>
            <div className="guest-book">
              <textarea
                className="guest-book-textarea"
                value={text}
                onChange={onChnageText}
              ></textarea>
              <button className="guest-book-button" onClick={writeGuestBook}>
                등록
              </button>
            </div>

            <ul className="guest-book-list">
              {mainInfo.guestbooks &&
                mainInfo.guestbooks.map((book) => (
                  <GuestBook key={book.no} book={book} />
                ))}
            </ul>
          </section>

          <nav className="profile-buttons">
            <button id="home">홈</button>
            <button id="guest-book">방명록</button>
            <button id="board">게시판</button>
          </nav>
        </section>

        <aside>
          <h2>{mainInfo.name}님의 일촌</h2>
          <ul className="friends-list">
            {mainInfo.friends &&
              mainInfo.friends.map((friend) => (
                <Friend key={friend} friend={friend} />
              ))}
          </ul>
        </aside>
      </section>
    </MainStyle>
  );
}

export default Main;
