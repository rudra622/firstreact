import React from "react";

import './Header.css';

function Header(props){
    return(
        <div className="container">
            <div className="row">
                <div className="header">
                    <div className="logo">
                        <img src={props.logo}/>
                    </div>
                    <div className="header-menu">
                        <ul>
                            {
                                props.list.map((v) => {
                                    return(
                                        <li>
                                            <a href="#">{v}</a>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="header-icon">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;