import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function Master(){
    const mySty = {
        color: "gold",
        textAlign: "center",
    }
    return(
        <div>
            <h1 style={mySty}>Master</h1>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Master;