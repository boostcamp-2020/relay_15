import React, { useCallback, useEffect } from 'react';
import BoostHeader from './BoostHeader';
import { MainStyle } from './style/Main.style';
import { useMemberState, useMemberDispatch } from '../contexts/MemberContext';
import { apiFetch } from '../apis';
import { useInput } from '../hooks';

function Main() {
  const { myInfo, homepage } = useMemberState();
  const dispatch = useMemberDispatch();

  const [text, onChnageText, setText] = useInput('');

  // 게스트 불러오기, 누구의 방명록인지
  // const getGuestBook = useCallback(async () => {
  //   const response = await apiFetch({ url: '/guestbook' });
  // }, []);

  // 홈페이지의 정보를 불러와야하지 않나
  // 일촌의 이름을 누른다 -> 홈페이지로 간다-> 요청한다 -> 정보를 보여준다.(이때 같이 방명록 보여줘야함)
  // const fetchHomePageInfo = useCallback(async () => {
  // const response = await apiFetch({
  //   url: '/guestbook',
  //   method: 'POST',
  //   body: {
  //     to: 'sample@naver.com',
  //     from: '',
  //     contents: 'hi',
  //   },
  // });
  // }, []);

  // useEffect(() => {
  //   fetchHomePageInfo();
  // }, []);

  const writeGuestBook = useCallback(
    async (e) => {
      try {
        const response = await apiFetch({
          url: '/guestbook',
          method: 'POST',
          body: {
            content: text,
          },
        });
        dispatch({
          type: 'CREATE_GUEST_BOOK',
        });
        setText('');
      } catch (e) {
        console.error(e.message);
      }
    },
    [text]
  );
  return (
    <MainStyle>
      <BoostHeader />
      <section className="main-content">
        <section className="profile">
          <section className="profile-intro">
            <img src="" />
            <p>닉네임: {myInfo.name}</p>
            <p>이메일: {myInfo.email}</p>
            <p>자기소개</p>
            <p>설문조사 내용</p>
          </section>

          <section className="profile-content" id="profile-content">
            <h1 className="home-title">Week2님의 미니홈피</h1>
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
              <li className="guest-book-content">
                아무개 : 안녕하세요! 놀러왔어요.
              </li>
              <li className="guest-book-content">
                ㅇㅅㅇ : 주말에 돈까스 먹을래?
              </li>
              <li className="guest-book-content">
                ㅇㅁㅇ : 부스트캠프 챌린지 화이팅~~!!
              </li>
              <li className="guest-book-content">
                ㅋㅋㅋㅋ : 여러분 모두 최고
              </li>
            </ul>
          </section>

          <nav className="profile-buttons">
            <button id="home">홈</button>
            <button id="guest-book">방명록</button>
            <button id="board">게시판</button>
          </nav>
        </section>

        <aside>
          <h2>나의 일촌</h2>
          <ul className="friends-list">
            {myInfo.friends.map((friend) => (
              <li key={friend}>{friend}</li>
            ))}
          </ul>
        </aside>
      </section>
    </MainStyle>
  );
}

export default Main;
