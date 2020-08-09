import React, { useCallback } from 'react';
import { useInput } from '../hooks/index';
import { useHistory, Link } from 'react-router-dom';
import { LoginBox } from './style/Login.style';
import { apiFetch } from '../apis';
import { useMemberDispatch } from '../contexts/MemberContext';

function Login() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const history = useHistory();
  const dispatch = useMemberDispatch();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await apiFetch({
          method: 'POST',
          url: '/login',
          body: { email, password },
        });

        dispatch({
          type: 'LOGIN',
          value: {
            email,
            name: response.name,
          },
        });

        history.push('/main');
      } catch (e) {
        console.error(e);
      }
    },
    [email, password]
  );

  return (
    <LoginBox>
      <div className="login-box">
        <h1>BOOSTWORLD</h1>
        <form onSubmit={onSubmit} name="login" className="login">
          <div>
            <input
              type="text"
              value=""
              id="email"
              value={email}
              onChange={onEmailChange}
              placeholder="아이디(이메일)"
            />
          </div>
          <div>
            <input
              type="password"
              value=""
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
