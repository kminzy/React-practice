import React, {createContext, useState, useContext} from 'react';

// createContext를 사용하여 상태값을 담을 박스를 생성한다
const Context = createContext();

// 상위 컴포넌트에 UserContextProvider 컴포넌트를 감싸기 위한 설정
export function UserContextProvider({children}) {
    // 글로벌하게 관리하고 싶은 상태값을 지정한다
    const [user, setUser] = useState(null);
    return (
        // 변수명.Provider 문법으로 그 범위 안에 있는 컴포넌트한테 값을 공유할 수 있다
        // value 값에 전송할 props 넣기
        // 속성명(value)은 임의로 변경할 수 없다
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

// 이것을 이용해서 value에 있는 값에 접근할 수 있다
// 예를 들어, const {user} = useUserContext();를 하면 user의 상태값을 빼올 수 있다
export function useUserContext () {
    return useContext(Context)
}