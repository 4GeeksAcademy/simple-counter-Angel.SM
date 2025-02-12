import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedo,faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
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

                    <button type="button" className="btn btn-secondary" onClick={() => seconds = 0}>
                        <FontAwesomeIcon icon={faRedo} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => timer = false}>
                        <FontAwesomeIcon icon={faPause} />
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => timer = true}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>

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