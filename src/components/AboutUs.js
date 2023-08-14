// import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function AboutUs(props) {

    let myStyle = {
        
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }

    let borderStyle = {
        borderRadius: '15px'
    }

    return (
        <div className='container pb-2' style={{...myStyle, ...borderStyle}}>
            <h2>Our Journey With Dream</h2>
            <div className="accordion mt-4" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Our Vision
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Our vision at STRINGER,</strong> is to be the leading online platform that empowers individuals and businesses to effortlessly transform and enhance their text, making effective communication and content creation accessible to all.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Our Mission
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Our mission</strong> is to provide a powerful and user-friendly text manipulation platform that simplifies the process of working with text. We aim to equip users with the tools they need to improve the quality, readability, and impact of their written content. Through continuous innovation, exceptional user experience, and a commitment to privacy, we strive to be the go-to destination for text transformation, benefiting writers, professionals, students, and anyone who deals with text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Our Values
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            <ul>
                                <li><strong>Innovation:</strong> We believe in constantly pushing the boundaries of what's possible. We embrace innovation and continuously strive to develop new and exciting features that enhance the way users interact with and manipulate text.</li>
                                <li><strong>Simplicity:</strong> Our commitment to simplicity ensures that our platform is easy to use, making powerful text transformation accessible to everyone. We value intuitive design and user-friendly interfaces that require minimal effort to achieve outstanding results.</li>
                                <li><strong>Accessibility:</strong> We're dedicated to making our platform freely available to all users, ensuring that anyone can benefit from our tools regardless of their background, expertise, or financial resources.</li>
                                <li><strong>Privacy and Security:</strong> We prioritize the privacy and security of our users' data. We handle text processing with the utmost care, ensuring that user information is treated confidentially and not stored beyond what is necessary for the task.</li>
                                <li><strong>Empowerment:</strong> We believe in empowering individuals to take control of their text, enabling them to create content that resonates, communicates effectively, and meets their goals. Our platform is designed to be a powerful tool that puts the user in the driver's seat.</li>
                                <li><strong>Excellence:</strong> We are committed to delivering exceptional quality in everything we do. From the accuracy of our text transformations to the responsiveness of our platform, we strive for excellence to exceed our users' expectations.</li>
                                <li><strong>Community:</strong> We value the diverse community of users who trust us with their text manipulation needs. We aim to build a supportive and inclusive environment, where users can learn, share, and grow together.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}