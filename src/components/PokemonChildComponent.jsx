import React from "react";

export default class PokemonComponent extends React.Component{
    render(){
        return(
            <>
            <h1>This is {this.props.name}</h1>
            </>
        )
    }
}