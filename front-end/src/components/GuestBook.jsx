import React from 'react';

const GuestBook = ({ book }) => {
  const { from, isBad, contents } = book;
  return (
    <li>
      {from}: {isBad ? '관리자에 의해 가려진 방명록입니다.' : contents}
    </li>
  );
};

export default GuestBook;
