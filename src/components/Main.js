import React from "react";

function Main(){
    const mySty = {
        padding: "3vw",
    }
    return(
        <main style={mySty}>
            <input type="checkbox" />
            <p className="lorem">Lorem</p>
            <input type="checkbox" />
            <p style={{color: "pink"}} >Lorem</p>
            <input type="checkbox" />
            <p style={{backgroundColor:"orange"}}>Lorem</p>
        </main>
    )
}

export default Main;