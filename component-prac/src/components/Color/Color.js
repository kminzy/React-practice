import React, {useState} from "react";
import "./Color.css";

//텍스트 색 변경 컴포넌트
function Color() {
    const [color, setColor] = useState('black');

    return (
        <div>
        <h2 className="colorContent" style={{color}}>&#127752; Change Text Color</h2>
        <div className="pressColor">Press the button:&nbsp;</div>
        <button style={{color:'red'}} onClick = {() => setColor('red')}>Red</button>&nbsp;
        <button style={{color:'green'}} onClick = {() => setColor('green')}>Green</button>&nbsp;
        <button style={{color:'blue'}} onClick = {() => setColor('blue')}>Blue</button>&nbsp;
        <br/>
        <div className="inputColor">Enter the RGB color code:&nbsp;</div>
        <input type="text" value={color} onChange = {e => setColor(e.target.value)} />
        <br/>
        <div className="pickColor">Choose the color:&nbsp;</div>
        <input type="color" value={color} onChange = {e => setColor(e.target.value)} />
        </div>
    );
}

export default Color;