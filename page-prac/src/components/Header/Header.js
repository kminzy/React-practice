import React from 'react';

function Header ({state}) {
    const count = (state) => { // filter 함술ㄹ 사용하여 status의 값이 're'인 것만 카운팅 하여 출력
        let cnt = state.filter((v) => v.status === 're').length;
        return cnt;
    };
    return (
        <div>
            <h1>To Do List</h1>
            <div>해야 할 일: {count(state)}개</div>
        </div>
    );
}

export default Header;