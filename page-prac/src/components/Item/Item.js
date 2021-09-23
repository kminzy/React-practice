import React from 'react';
import "./Item.css";

function Item ({todo, changeT}) {
    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        changeT(id);
    };
    let classNm = "";
    if (todo.status === "done") {
        classNm = "done";
    } else {
        classNm = "";
    }
    return (
        <div>
            <li data-id={todo.id} className={classNm} onClick={toggleItem}>
                {todo.id}
            </li>
        </div>
    );
}

export default Item;