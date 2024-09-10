import React from "react";

export default class TimerComponentClass extends React.Component {
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        console.log("Class Timer Start");
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        console.log("Class Timer End");
        clearInterval(this.timerId);
    }

    render(){
        return(
            <>
            <div className="text-center" style={{marginTop:"45vh"}}>
                <h1>Realtime Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
            </>
        )
    }

}