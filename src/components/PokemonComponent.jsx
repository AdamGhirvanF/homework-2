import React from "react";
import PokemonChild from "./PokemonChildComponent";

export default class PokemonComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name: ""
        }
    }

    handleClick = () => {
        return this.name;
    }

    render(){
        return(
            <>
            <input type="text" onChange={e => this.setState({name:e.target.value})} />
            <button onClick={this.handleClick()}>Check Pokemon</button>
            <PokemonChild name={this.state.name}/>
            </>
        )
    }
}