import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMemberState, useMemberDispatch } from '../contexts/MemberContext';
import { Header } from './style/BoostHeader.style';

function BoostHeader() {
  const { myInfo } = useMemberState();
  const dispatch = useMemberDispatch();

  const onLogOut = useCallback(() => {
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  return (
    <Header>
      <Link to="/">
        <h1>BOOSTWORLD</h1>
      </Link>
      <nav className="page-nav">
        <Link to="/main">
          <button className="menu-button">내 미니홈피</button>
        </Link>
        <Link to="/mypage">
          <button id="mypage" className="menu-button">
            내 정보 관리
          </button>
        </Link>
        {myInfo.email ? (
          <button className="menu-button" onClick={onLogOut}>
            로그아웃
          </button>
        ) : (
          <Link to="/">
            <button className="menu-button">로그인</button>
          </Link>
        )}
      </nav>
    </Header>
  );
}

export default BoostHeader;
