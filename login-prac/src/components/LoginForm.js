import React, {useState} from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { fetchLogin } from './Service';
import { useUserContext } from '../context';


const Container = styled.div`
margin-top: 100px;
padding: 20px;
`;

const Input = styled.input`
position: relative;
overflow: hidden;
width: 100%;
height: 40px;
margin: 0 0 8px;
padding: 5px 39px 5px 11px;
border: solid 1px #dadada;
background: #fff;
box-sizing: border-box;
`;

const Button = styled.div`
font-size: 18px;
font-weight: 700;
line-height: 49px;
display: block;
width: 100%;
height: 49px;
margin: 16px 0 7px;
cursor: pointer;
text-align: center;
color: #fff;
border: none;
border-radius: 0;
background-color: #03c75a;
${({disabled}) => disabled && `background-color: #efefef;`}
`;

function LoginForm () {
    // 글로벌 전역 상태값인 setUser를 받아온다
    // 로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있다
    const { setUser } = useUserContext();

    const history = useHistory(); // url 이동을 위한 useHistory

    const [account, setAccount] = useState({ // input에서 입력한 아이디와 비밀번호 정보를 담기 위한 state
        id: "",
        password: "",
    });

    const onChangeAccount = (e) => { // input에 입력하면 자동적으로 account state값을 변경한다
        setAccount({
            // ...을 이용하여 account의 복사본을 만들고
            // input에 지정한 name 속성에 해당 value 값을 넣어 오버라이딩
            // console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitAccount = async() => { // 동기식으로 로그인정보를 통신하여 출력한다
        try {
            const user = await fetchLogin(account);

            // 통신에 성공하면 해당 user 아이디, 패스워드 값을 세팅한다
            setUser(user);
            // 성공하면 해당 url로 이동한다
            history.replace("/success");
        } catch(error) {
            // 정보가 일치하지 않거나, 서버 통신이 정상적으로 이루어지지 않으면 throw new Error("")값을 출력한다
            window.alert(error);
        }
    };

    return (
        <Container>
            <Input 
            id="id" 
            name="id" 
            placeholder="아이디를 입력해주세요"
            onChange={onChangeAccount}
            />
            <Input 
            id="password" 
            name="password" 
            type="password" 
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeAccount}
            />
            <Button onClick={onSubmitAccount}>로그인</Button>
        </Container>
    );
}

export default LoginForm;
