import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function FeedBackForm(props) {

    const handleFeedback = () => {
        console.log("Feedback Form Is Submitted");
        let newText = "Thank You For Your Feedback :)"
        setText(newText);
        props.showAlert("Feedback Submitted", "success");
        setTimeout(() => {
            setText("Enter Your Feedback");
            setEmail("Enter Your Email.")
          }, 4000);
    }


    const handleChange = (event) => {
        console.log("Text Area Edited");
        setText(event.target.value);
    }

    const handleEmail = (event) => {
        console.log("Email Edited");
        setEmail(event.target.value);
    }

    const [text, setText] = useState("Enter Your Feedback.");
    const [email, setEmail] = useState("Enter Your Email.")
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-4" style={{ backgroundColor: props.mode === 'dark' ? '#100010' : 'white', border: props.mode === 'dark' ? '2px solid white' : '2px solid black', borderRadius: '30px' }}>
            <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label mb-3" style={{color: props.mode === 'light'? 'black':'white'}}>Email Address</label>
                <input type="email" style={{backgroundColor: props.mode === 'light'? 'white':'#280000', color: props.mode === 'light'? 'black':'white'}} className="form-control" id="exampleFormControlInput1" placeholder="abc@example.com" value={email} onChange={handleEmail} />
            </div>
            <div className="my-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3 my-2" style={{color: props.mode === 'light'? 'black':'white'}}>{props.formName}</label>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white':'#280000', color: props.mode === 'light'? 'black':'white'}} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange}></textarea>
            </div>
            <button disabled={text.length===0 || email.length===0} className="btn btn-dark mt-3" onClick={handleFeedback}>Submit</button>
        </div>
    )
}

FeedBackForm.propTypes = {formName : PropTypes.string.isRequired}
FeedBackForm.defaultProps = {formName : "Type Here"}