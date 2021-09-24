import React, {useState} from 'react';
import "./Example1.css";

function Example1 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            현재 클릭한 횟수: {count}
            <br/>
            <button onClick={() => {
                setCount(count + 1);
            }}>Click!</button>
        </div>
    );
}

export default Example1;