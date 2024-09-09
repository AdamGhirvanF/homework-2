import LinkMolecule from "../molecules/LinkMolecule"
import BrandMolecule from "../molecules/BrandMolecule"
import React from "react";

export default class NavbarOrganism extends React.Component{
    render(){
        return <>
        <BrandMolecule/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button><div class="collapse navbar-collapse" id="navbarNav">
            </div><ul class="navbar-nav">
                <LinkMolecule />
            </ul></>
    }
}