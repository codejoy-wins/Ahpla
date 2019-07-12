import React from 'react';

function Time(){
    const date = new Date(); // creating date object?
    const hours = date.getHours();
    let timeOfday = "error";

    if(hours < 12){
        timeOfday = "Good Morning";
    } else if (hours < 17){
        timeOfday = "Good Afternoon";
    } else{
        timeOfday = "Goodnight";
    }

    return(
        <div style={{textAlign: "center"}}>
            <p>Date: {date.getMonth()+1}/{ date.getDate()}/{date.getFullYear()}</p>
            <p>{timeOfday}</p>
            <p>It is currently about {date.getHours() % 12} o' clock!</p>
        </div>
    )
}

export default Time;