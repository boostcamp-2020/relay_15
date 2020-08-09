import React, { useCallback } from 'react';
import { useInput } from '../hooks/index';
import { useHistory, Link } from 'react-router-dom';
import { LoginBox } from './styles/Login.style';
import { apiFetch } from '../apis';
import { useMemberDispatch } from '../contexts/MemberContext';
import { useLogoutCheck } from '../hooks';

function Login() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const history = useHistory();
  const dispatch = useMemberDispatch();

  useLogoutCheck();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await apiFetch({
          method: 'POST',
          url: '/login',
          body: { email, password },
        });

        if (response.message === 'failed') {
          alert('아이디나 비밀번호가 틀렸습니다.');
          return;
        }

        dispatch({
          type: 'LOGIN',
          value: {
            email: response.email,
            name: response.name,
            friends: response.friends,
          },
        });

        history.push(`/main/${email}`);
      } catch (e) {
        console.error(e);
      }
    },
    [email, password, dispatch, history]
  );

  return (
    <LoginBox>
      <div className="login-box">
        <h1>BOOSTWORLD</h1>
        <form onSubmit={onSubmit} name="login" className="login">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              placeholder="아이디(이메일)"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="비밀번호"
            />
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <Link to="/signup" className="signup">
          회원가입
        </Link>
      </div>
    </LoginBox>
  );
}

export default Login;
