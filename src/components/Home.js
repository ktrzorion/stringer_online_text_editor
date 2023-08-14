import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export default function Home(props) {

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "danger")
    }

    const allUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase", "success")
    }

    const allLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase", "success")
    }

    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied Successfully", "success")
    }

    const firstCharCapitalize = () => {
        let newText = text.replace(/\.([a-z])/g, (match, letter) => `.${letter.toUpperCase()}`);
        setText(newText);
        props.showAlert("All First Char Capitalized", "success");
    }

    const downloadTextAsFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "StringerFile.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("Text Downloaded as .txt File", "success");
    };

    const [text, setText] = useState('');
    return (
        <div>
            <div className={`navbar px-3 navbar-${props.mode} bg-${props.mode}`} style={{ borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h5 style={{ color: props.mode === 'light' ? 'black' : 'white', display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', width: '100%' }}>
                    <div className='mx-5'>
                        Word Count : {text.split(/\s+/).filter((element) => element.length !== 0).length}
                    </div>|
                    <div className='mx-5'>
                        Character Count : {text.length}
                    </div>|
                    <div className='mx-5'>
                        Sentence Count : {text.split(/[.!?]/).filter((element) => element.length !== 0).length}
                    </div>
                </h5>
            </div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" style={{ backgroundColor: props.mode === 'dark' ? '#100010' : 'white', border: props.mode === 'dark' ? '2px solid white' : '2px solid black', borderRadius: '30px' }}>
                <div className="mb-3">
                    <h5 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Enter Your Text Here :</h5>
                    <textarea className="form-control my-3" style={{ border: props.mode === 'light' ? 'grey solid 2px' : 'grey solid 2px', height: '250px' }} value={text} onChange={handleChange} />
                </div>
                <div className="buttons mt-4">
                    <button className='mx-2 btn btn-danger' onClick={clearText}>CLEAR</button>
                    <button className='mx-2 btn btn-warning' onClick={allUppercase}>TO UPPERCASE</button>
                    <button className='mx-2 btn btn-warning' onClick={allLowercase}>TO LOWERCASE</button>
                    <button className='mx-2 btn btn-warning' onClick={firstCharCapitalize}>FIRST CHAR CAPATALIZE</button>
                    <button className='mx-2 btn btn-warning' onClick={removeSpace}>REMOVE EXTRA SPACES</button>
                    <button className='mx-2 btn btn-primary' onClick={copyText}>COPY TEXT</button>
                </div>
                <div className="buttons mt-4">
                    <button className='mx-2 btn btn-success' onClick={downloadTextAsFile}>DOWNLOAD</button>
                </div>
            </div>
            <footer className="container">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className={`d-block mb-3 text-${props.text}`}>STRINGER &copy; 2022–2023</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}