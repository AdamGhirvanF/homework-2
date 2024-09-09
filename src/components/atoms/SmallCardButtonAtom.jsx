import React from "react";

export default class SmallCardButtonAtom extends React.Component{
    render(){
        return  <button class="btn btn-secondary">{this.props.button}</button>
    }
}