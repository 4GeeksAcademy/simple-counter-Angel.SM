import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from "./components/SecondCounter/secondCounter";

let seconds = 0;


const render = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    )
}

function Home() {
    return (

        <div >
            <h2> <SecondCounter time={seconds} />
            <button type="button" class="btn btn-light">Reset</button>
            </h2>
            
        </div>)
}

setInterval(() => {
    seconds++;
    render()
}, 1000);


