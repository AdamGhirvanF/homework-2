import SmallCardTitleAtom from "../atoms/SmallCardTitleAtom"
import SmallCardBodyAtom from "../atoms/SmallCardBodyAtom"
import SmallCardButtonAtom from "../atoms/SmallCardButtonAtom"
import React from "react";

export default class SmallCardMolecule extends React.Component{
    render(){
        return <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <SmallCardTitleAtom title="6 September 2024"/>
                        <hr />
                        <SmallCardBodyAtom body="Ayo ketemu di Jakarta Selatan, Swiss Belinn 100 orang hadir"/>
                        <SmallCardButtonAtom button="View"/>
                    </div>
                </div>
            </div>
    }
}