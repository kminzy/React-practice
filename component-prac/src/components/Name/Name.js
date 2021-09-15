import React, {useState} from "react";

//입력한 이름을 alert로 출력하는 컴포넌트
function Name() {
    const [name, setName] = useState();

    return (
        <div>
            <h2 className="nameContent">&#11088; Show Entered Name</h2>
            <input type="text" name="name" placeholder="Enter your name" value={name} onChange = {e => {
                const {value} = e.target;
                setName(value);
            }} />
            &nbsp;&nbsp;
            <button onClick = {() => alert("안녕하세요 "+name+"님!👋")}>OK</button>
        </div>
    );

}

export default Name;