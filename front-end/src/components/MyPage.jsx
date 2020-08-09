import React, { useCallback } from 'react';
import { MyPageStyle } from './style/MyPage.style';
import { useInput } from '../hooks';
import { useHistory } from 'react-router-dom';
import BoostHeader from './BoostHeader';
import { apiFetch } from '../apis';

function MyPage() {
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const history = useHistory();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await apiFetch({
      method: 'PUT',
      url: '/myinfo',
      body: { name, password },
    });
    history.push('/main');
  }, []);

  const onWithdrawal = useCallback(async (e) => {
    e.preventDefault();
    // 뒤에 아이디 추가해서 보내야함. 성공하면 /로 가면서 회원 성공
    const response = await apiFetch({
      method: `DELETE`,
      url: '/myinfo',
    });
    history.push('/');
  }, []);

  return (
    <MyPageStyle>
      <BoostHeader />

      <section>
        <form className="mypage-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="이름 수정"
            value={name}
            onChange={onChangeName}
          />
          <input
            type="password"
            placeholder="비밀번호 수정"
            value={password}
            onChange={onChangePassword}
          />
          <input
            type="password"
            placeholder="비밀번호 수정 확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />

          <div className="button-box">
            <button type="submit" className="update-button info-button">
              내 정보 변경
            </button>
            <br />
            <button
              type="button"
              onClick={onWithdrawal}
              className="delete-button update-button"
            >
              회원탈퇴
            </button>
          </div>
        </form>
      </section>
    </MyPageStyle>
  );
}

export default MyPage;
