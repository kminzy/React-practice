import React, {useState} from "react";
import "./Number.css";

//랜덤 숫자 2개 생성 후 사칙연산 하는 컴포넌트
function Number() {
    const [number1, setNumber1] = useState([]);
    const [number2, setNumber2] = useState([]);
    const [number3, setNumber3] = useState([]);
    const [number4, setNumber4] = useState([]);
    const [number5, setNumber5] = useState([]);
    const [number6, setNumber6] = useState([]);

    function makerandNum() {
        let num1, num2;
        let i = 0;

        for(i=0; i<=100; i++) {
            num1 = Math.floor(Math.random()*101);
            num2 = Math.floor(Math.random()*101);
        }

        setNumber1(num1);
        setNumber2(num2);
    }

    function addNum(a, b) {
        let addResult = a+b;
        setNumber3(addResult);
    }

    function subNum(a, b) {
        let subResult;
        if(a > b) {
            subResult = a-b;
        }
        else{
            subResult = b-a;
        }
        setNumber4(subResult);
    }

    function multiNum(a, b){
        let multiResult = a*b;
        setNumber5(multiResult);
    }

    function divNum(a, b){
        let divResult = (a/b).toFixed(2);
        setNumber6(divResult);
    }

    return (
        <>

        <h2 className="numContent">&#128208; Simple Calculation</h2>
        <div className="first">1. Create two random numbers</div>
        <button onClick = {() => makerandNum()}>Create</button>&nbsp;
        <div className="firstWrapper">
            <div className="firstResult">number1: <span>{number1.toLocaleString()}</span></div>
            &nbsp;&nbsp;&nbsp;
            <div className="firstResult">number2: <span>{number2.toLocaleString()}</span></div>
        </div>


        <div className="second">2. Perform a simple calculation</div>
        <button onClick = {() => addNum(number1, number2)}>Add</button>&nbsp;&nbsp;
        <div className="secondResult"><span>{number3}</span></div>
        <br/>
        <button onClick = {() => subNum(number1, number2)}>Substract</button>&nbsp;&nbsp;
        <div className="secondResult"><span>{number4}</span></div>
        <br/>
        <button onClick = {() => multiNum(number1, number2)}>Multiply</button>&nbsp;&nbsp;
        <div className="secondResult"><span>{number5}</span></div>
        <br/>
        <button onClick = {() => divNum(number1, number2)}>Divide</button>&nbsp;&nbsp;
        <div className="secondResult"><span>{number6}</span></div>

        </>
    );
}

export default Number;