import React from "react";

export default class AnchorAtom extends React.Component{
    render(){
        return <a class="nav-link" aria-current="page" href="#">{this.props.name}</a>
    }
}