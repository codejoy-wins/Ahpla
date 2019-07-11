import React from 'react';

function Header(){
    const mySty = {
        color: "blue",
        background: "orange",
        padding: "2vw",
        textAlign: "center"
    }
    return(
        <div style={mySty}><h2>I'm your awesome header!</h2></div>
    )
}

export default Header;