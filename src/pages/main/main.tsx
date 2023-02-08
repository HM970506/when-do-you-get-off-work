import React from 'react'

const Main = () => {

    return (
        <>
            <h1>지금 퇴근하면..</h1>
            <div>
                <label>버스</label><input type="radio" />
                <input type="text" placeholder="버스번호" />
            </div>
            <div>
                <label>지하철</label><input type="radio" />
            </div>
        </>
    )
}

export default Main