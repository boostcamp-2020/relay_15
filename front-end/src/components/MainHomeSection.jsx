import React, { useCallback } from 'react';

import GuestBook from './GuestBook';
import { useInput } from '../hooks';
import { apiFetch } from '../apis';

const MainHomeSection = ({ mainInfo, myInfo, dispatch }) => {
  const [text, onChangeText, setText] = useInput('');

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
    [myInfo, mainInfo, text, dispatch, setText],
  );

  return (
    <section className="profile-content" id="profile-content">
      <h1 className="home-title">{mainInfo.name}님의 미니홈피</h1>
      <h3>방명록을 작성해주세요.</h3>
      <div className="guest-book">
        <textarea className="guest-book-textarea" value={text} onChange={onChangeText}></textarea>
        <button className="guest-book-button" onClick={writeGuestBook}>
          등록
        </button>
      </div>
      l
      <ul className="guest-book-list">
        {mainInfo.guestbooks && mainInfo.guestbooks.map((book) => <GuestBook key={book.no} book={book} />)}
      </ul>
    </section>
  );
};

export default MainHomeSection;
