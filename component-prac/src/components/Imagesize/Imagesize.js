import React, {useState} from "react";
import "./Imagesize.css";

//이미지 크기 변경 컴포넌트
function Imagesize() {
    const [size, setSize] = useState(150);

    return (
        <div>
            <h2 className="sizeContent">&#128260; Adjust Image Size</h2>
            <div className="rangeWrapper">
            <input type="range" min="1" max="300" value={size} onChange = {e => {
                const {value} = e.target;
                setSize(parseInt(value, 10));
            }} />
            </div>

            <img className="sizeImage" alt="" src="img/tube.png" style={{width:`${size}px`, height:`${size}px`}} />
        </div>
    );
}

export default Imagesize;