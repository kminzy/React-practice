import React, {useState, useEffect} from 'react';
import List from "../../components/List/List";
import Header from "../../components/Header/Header";
import "./Practice.css";

export const TodoContext = React.createContext();

function Practice () {
    const [state, setState] = useState([ // state를 생성하고 초기값을 설정한다
        {"id": "js공부", "status": "re"},
        {"id": "react공부", "status": "re"}
    ]);
    const [newTodo, setNewTodo] = useState(); // newTodo를 생성한다(초기값은 없음)
    const changeInputData = (e) => { // onChange 이벤트 발생 시 NewTodo에 해당 값을 저장한다
        setNewTodo(e.target.value);
    }
    const addTodo = (e) => { // onClick 이벤트 발생 시 state에 해당 값을 저장한다
        e.preventDefault();
        setState([...state, {id: newTodo, status: "re"}]);
    }
    const changeT = (id) => { // 할일 목록의 item을 클릭하면 발생하는 이벤트
        const updateT = state.map(todo => {
            if(todo.id === id) { // 클릭 시 해당 값에 변화
                if(todo.status === 'done') todo.status = 're';
                else todo.status = 'done';
            }
            else {
            }
            return todo;
        });
        setState(updateT);
    }

    useEffect(() => { // state가 변경될 때마다 호출
        console.log('새로운 내용이 랜더링됐네요', state);
    }, [state]);

    return (
        <div className="pracWrapper">
            <Header state = {state}></Header>
            <form action="">
                <input type="text" name="" onChange={changeInputData} />
                <button onClick={addTodo}>할 일 추가</button>
            </form>
            <List todos = {state} changeT = {changeT}></List>
        </div>
    );
}

export default Practice;