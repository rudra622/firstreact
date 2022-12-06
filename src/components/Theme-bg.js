import React from "react";

import './Theme.css';

class Theme extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundcolor : "red",
            color : "black"
        }
    }

    blue = () => {
        this.setState({
            backgroundcolor : "yellow",
            color : "red"
        })
    }
    red = () => {
        this.setState({
            backgroundcolor : "black",
            color : "white"
        })
    }
    green = () => {
        this.setState({
            backgroundcolor : "blue",
            color : "white"
        })
    }

    render(){
        return(
            <>
                <div className="container" style={{backgroundColor: this.state.backgroundcolor}}>
                    <div className="row">
                    <div className="details" >
                        <hr/>
                        <hr/>
                        <h1>Class Base Components</h1>
                        <hr/>
                        <hr/>
                        <p style={{color: this.state.color}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus   PageMaker including versions of Lorem Ipsum.<br/><br/>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                        </p>
                        <div className="buttons">
                            <button onClick={()=>{this.blue()}}>Blue</button>
                            <button onClick={()=>{this.red()}}>Red</button>
                            <button onClick={()=>{this.green()}}>Green</button>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Theme;
