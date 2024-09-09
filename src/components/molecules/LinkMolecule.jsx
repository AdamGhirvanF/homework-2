import AnchorAtom from "../atoms/AnchorAtom"
import React from "react";

export default class LinkMolecule extends React.Component{
    render(){
        return <>
        <li class="nav-item">
            <AnchorAtom name="Home" />
        </li>
        <li class="nav-item">
            <AnchorAtom name="Next" />
        </li>
        <li class="nav-item">
            <AnchorAtom name="About" />
        </li>
        <li class="nav-item">
            <AnchorAtom name="Past" />
        </li>
            </>
    }
}