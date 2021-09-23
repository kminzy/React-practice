import React from 'react';
import Item from "../Item/Item";

function List ({todos, changeT}) {
    let todoList = todos.map((todo) => ( // map() 함수를 사용하여 상위 컴포넌트에서 전달받은 인자값을 item에게 넘겨준다
        <Item todo={todo} changeT={changeT}></Item>
    ));
    return (
        <div>
            <ul>할 일 목록 {todoList}</ul>
        </div>
    );
}

export default List;