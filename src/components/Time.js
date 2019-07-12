import React from 'react';

function Time(){
    const date = new Date(); // creating date object?
    return(
        <div>
            <p>Year: {date.getFullYear()}</p>
            <p>Month: {date.getMonth()+1}</p>
            <p>Day: {date.getDate()}</p>
            <p>Date: {date.getMonth()+1}/{ date.getDate()}/{date.getFullYear()}</p>
            <p>It is currently about {date.getHours() % 12} o' clock!</p>
        </div>
    )
}

export default Time;