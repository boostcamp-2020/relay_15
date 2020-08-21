import React, { useEffect, useCallback, useState } from 'react';

import { useInput } from '../hooks';
import { useHistory } from 'react-router-dom';
import { apiFetch } from '../apis';
import { SignUpStyle } from './styles/SignUp.style';
import MyRating from '../components/MyRating';
function SignUp() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [name, onChangeName] = useInput('');
  const [age, onChangeAge] = useInput('');
  const [location, onChangeLocation] = useInput('');

  const [tendency, onChangeTendency] = useInput(3);
  const [activityTime, onChangeActivityTime] = useInput(3);
  const [food, onChangeFood] = useInput(3);
  const [movie, onChangeMovie] = useInput(3);

  const [isCorrectPassword, setIsCorrectPassword] = useState(false);

  const history = useHistory();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email.trim() || !password.trim() || !name.trim() || !age.trim() || !location.trim()) {
        alert('필수 항목을 채워주세요');
        return;
      }
      if (!isCorrectPassword) {
        alert('비밀번호를 확인해주세요.');
        return;
      }
      try {
        const params = makeParams();
        console.log(params);
        await apiFetch({
          url: '/users',
          method: 'POST',
          body: params,
        });

        history.push('/');
      } catch (e) {
        // console.error(e.message);
        alert('예기치 못 한 에러가 발생했습니다.');
      }
    },
    [email, password, name, age, location, tendency, movie, food, activityTime, isCorrectPassword, history],
  );

  const makeParams = () => {
    return {
      email: email,
      password: password,
      name: name,
      age: parseInt(age.replace(/[^0-9]/g, '')),
      location: location,
      character: {
        tendency: tendency,
        movie: movie,
        food: food,
        activityTime: activityTime,
      },
    };
  };

  useEffect(() => {
    password === passwordCheck ? setIsCorrectPassword(true) : setIsCorrectPassword(false);
  }, [password, passwordCheck]);

  return (
    <SignUpStyle>
      <section className="sign-up">
        <header className="latte-header">
          <h1>BOOSTWORLD - 회원 가입</h1>
          <hr />
        </header>

        <section className="signup-section">
          <header className="signup-header">
            <h2>프로필 입력</h2>
          </header>
          <hr />

          <section>
            <form className="signup-form" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email">이메일 아이디</label>
                <input id="email" type="email" value={email} onChange={onChangeEmail} />
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input id="password" type="password" value={password} onChange={onChangePassword} />
              </div>
              <div>
                <label htmlFor="password-check">비밀번호 확인</label>
                <input id="password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
              </div>
              {!isCorrectPassword && <div className="check-password">비밀번호와 확인이 일치하지 않습니다.</div>}
              <div>
                <label htmlFor="name">이름</label>
                <input id="name" type="text" value={name} onChange={onChangeName} />
              </div>
              <div>
                <label htmlFor="age">나이</label>
                <input id="age" type="text" value={age} onChange={onChangeAge} />
              </div>
              <div>
                <label htmlFor="location">사는 곳</label>
                <input id="location" type="text" value={location} onChange={onChangeLocation} />
              </div>

              <hr style={{ width: '500px' }} />
              <MyRating
                name={'tendency'}
                left={'내향성'}
                right={'외향성'}
                value={tendency}
                onChangeRating={onChangeTendency}
              ></MyRating>
              <MyRating
                name={'activityTime'}
                left={'아침형'}
                right={'야행형'}
                value={activityTime}
                onChangeRating={onChangeActivityTime}
              ></MyRating>
              <MyRating
                name={'food'}
                left={'한식파'}
                right={'양식파'}
                value={food}
                onChangeRating={onChangeFood}
              ></MyRating>
              <MyRating
                name={'movie'}
                left={'코미디'}
                right={'스릴러'}
                value={movie}
                onChangeRating={onChangeMovie}
              ></MyRating>
              <button type="submit" className="signup-button">
                회원가입
              </button>
            </form>
          </section>
        </section>
      </section>
    </SignUpStyle>
  );
}

export default SignUp;
