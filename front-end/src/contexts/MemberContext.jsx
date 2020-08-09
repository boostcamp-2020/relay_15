import React, { useReducer, useContext } from 'react';

import { createContext } from 'react';

const MemberContext = createContext(undefined);

const DispatchContext = createContext();

function memberReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        myInfo: {
          ...state.myInfo,
          ...action.value,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        myInfo: {},
      };
    case 'FRIENDS':
      return {
        ...state,
        myInfo: {
          ...state.myInfo,
          friends: action.value,
        },
      };
    case 'CREATE_GUEST_BOOK':
      return {
        ...state,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function MemberContextProvider({ children }) {
  const [state, dispatch] = useReducer(memberReducer, {
    loginStatus: '',
    myInfo: {
      email: '이메일',
      name: 'J067',
      friends: ['김도연', '김도호', '문석암', '전경윤', '신승현'],
    },
    homepage: {
      email: '',
      name: '',
      friends: [],
      contents: [],
    },
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <MemberContext.Provider value={state}>{children}</MemberContext.Provider>
    </DispatchContext.Provider>
  );
}

export function useMemberState() {
  const state = useContext(MemberContext);
  if (!state) throw new Error('멤버 에러');
  return state;
}

export function useMemberDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('디스패치 에러');
  return dispatch;
}
