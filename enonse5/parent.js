import React from "react";
import Enfant from "./enfant";

class Parent extends React.Component {
    render () {
        return (
            <div>
                <h3>mwen se konpozan paran an</h3>
                <Enfant />
            </div>
        )
    }
}


export default Parent;