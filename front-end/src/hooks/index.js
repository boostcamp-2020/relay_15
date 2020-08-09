import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMemberState } from '../contexts/MemberContext';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  return [value, onChange, setValue];
}

export function useLoginCheck() {
  const history = useHistory();
  const { myInfo } = useMemberState();
  useEffect(() => {
    if (!myInfo.email) {
      alert('로그인한 유저만 사용할 수 있습니다.');
      history.push('/');
    }
  }, [myInfo]);
}
