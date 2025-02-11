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
let timer = true;

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
        <>
            <div className="Contador">
                <h2> <SecondCounter time={seconds} />

                    <button type="button" className="btn btn-secondary" onClick={() => seconds = 0}>Resetear</button>
                    <button type="button" className="btn btn-secondary" onClick={() => timer= false }>Stop </button>
                    <button type="button" className="btn btn-secondary" onClick={() => timer= true }>Start </button>
                </h2>

            </div>
        </>)
}

setInterval(() => {
    if (timer) {
        seconds++;
        render()
    }
}, 1000);


