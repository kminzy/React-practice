// 로그인 서버와 통신하여 데이터를 받고, 처리한다
// *** 동기식으로 통신해야 한다 ***
// 로그인 서버 통신이 우선이 우선이고, 모든 일들은 그 후에 진행되어야 한다
export const fetchLogin = async({id, password}) => {
    const response = await fetch("http://localhost:8888/users");

    if (response.ok) {
        // 서버와 통신이 성공적으로 이루어지면 users에 json값을 대입한다
        const users = await response.json();

        // users 내의 객체들을 순회하면서, 그 객체들의 id 값과 form 컴포넌트에서 받은 account의 id값을 비교한다
        // 비교 결과 서로 일치하는 것만 user에 대입하게 된다
        const user = users.find((user) => user.id === id);
        // 서로 일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러를 생성한다
        if (!user || user.password !== password) {
            throw new Error("아이디 또는 비밀번호가 일치하지 않습니다!");
        }

        // 모든게 일치하면 그 user 정보를 return한다
        // 이 return값이 form 컴포넌트 내의 fetchLogin 함수의 값으로 출력된다
        // form 컴포넌트에서 setUser값에 넣어야 한다
        return user;
    }

    // 서버 통신이 이루어지지 않았을 때
    throw new Error("서버 통신이 원활하지 않습니다.");
};
