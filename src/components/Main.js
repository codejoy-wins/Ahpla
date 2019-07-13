import React from "react";
import ToDoItem from './ToDoItem';

function Main(){
    const mySty = {
        padding: "3vw",
    }
    return(
        <main style={mySty}>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </main>
    )
}

export default Main;