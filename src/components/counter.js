import React from "react";
import './counter.css';

class counter extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    

    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="imgs"><img src="img/gift.gif" /></div>

                        <div className="details">
                            <h1>
                                Hello World ....
                                
                            </h1>
                            <h5>
                                Class base components....
                            </h5>
                            <p>
                                {this.state.count}
                            </p>
                            <div className="buttons">
                                <button 
                                    onClick={()=>{
                                        this.setState({count : this.state.count +1});
                                    }}
                                >
                                    +
                                </button>
                                <button 
                                    onClick={()=>{
                                        this.setState({count : this.state.count -1});
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    
                        <div className="imgs"><img src="img/gift.gif" /></div>
                    </div>
                </div>
            </>
        )
    }

}

export default counter;