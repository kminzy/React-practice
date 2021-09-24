import React from 'react';
import Example1 from '../../components/Example1/Example1';
import "./Character.css";

function Character () {
    return (
        <div className="chaWrapper">
            <h1>리액트의 특징</h1>
            <h2>리액트의 중요한 4가지 특징</h2>
            <ol>
                <li>Component</li>
                <li>Virtual DOM</li>
                <li>One-way Data Flow</li>
                <li>JSX</li>
            </ol>
            <h2>useState 예제</h2>
            <div className="exWrapper">
                <Example1 />
            </div>
        </div>
    );
}

export default Character;