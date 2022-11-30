import React from "react";

import './title.css';

function gallary() {
    let img=["./img/1.jpg","./img/2.jpg","./img/3.jpg"]
    return (
        <>
            <div className="gallary">
                <div className="gallary-card">
                {
                    img.map((i)=>{
                        return(
                            <div className="item">
                                <img src={i}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    );
}

export default gallary;