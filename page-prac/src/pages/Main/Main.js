import React, {useEffect, useState} from 'react';
import "./Main.css";

function Main () {
    const [page, setPage] = useState("");
    useEffect(() => {
        setPage("Main");
    },[]);

    return (
        <div className="MainWrapper">
            <h1>Welcome! This is {page} page.</h1>
            <h2>React.js에 대해 알아봅시다</h2>
            <div>Navigation의 각 탭을 눌러서 내용을 확인해보세요!</div>
        </div>
    );
}

export default Main;