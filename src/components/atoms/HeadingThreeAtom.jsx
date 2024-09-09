import React from "react";

export default class HeadingThreeAtom extends React.Component{
    render(){
        return  <a class="navbar-brand" href="#">{this.props.name}</a>
    }
}