import { useRef, useState } from 'react';
import pic4 from './assets/4.jpeg';
import pic5 from './assets/5.jpeg';
import pic6 from './assets/6.jpeg';
import "./events.css";

export default function Events() {
    let styles = {
        heading: {
            borderBottom: "4px solid #6e6b6b",
            margin: "10px",
        },
        subHeading: {
            margin: "30px 13px 1px",
            borderBottom: "2px solid #6e6b6b",
        },
        subsubHeading: {
            margin: "15px 13px 1px",
            display: "flex",
            alignItems: "center",
        },
        container: {
            margin: "10px",
        },
        paragraph: {
            top: "0",
            left: "0",
            maxWidth: "100%",
            padding: "15px 15px 5px",
        },
        image: {
            flex: "20%",
            padding: "25px 25px ",
            height: "auto",
            width: "auto"
        },
        button: {
            margin: "0px 15px",
            left: "40%",
            position: "absolute",
            transform: "translateY(-20%)"
        },
    }

    // updating the value of placeholder for which event user is registering
    let [event, setEvent] = useState("a");
    const updateEvent = (a) => {
        setEvent((event) => event = `Event#${a}`);
    }

    return (

        <div>
            <div>
                <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="registerModalLabel">Sign Up Form</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputName" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="registerInputName" placeholder='Enter Username' />
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="registerInputEmail1" aria-describedby="emailHelp" placeholder='Enter valid email address' />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="registerInputPassword1" className="form-label">Phone Number</label>
                                        <input type="Number" className="form-control" id="registerInputNumber" placeholder='Enter Phone number' />
                                    </div>
                                    <fieldset disabled>
                                        <div className="mb-3">
                                            <label htmlFor="registerInputEvent" className="form-label">I want to register in: </label>
                                            {/* Modififying the value of placeholder tag on runtime with the help of useState hook so only one modal is created and the value of event that user wants to register will be automatically updated */}
                                            <input type="text" className="form-control" id="registerInputEvent" placeholder={event} />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ marginRight: "1vw" }}>
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                <button type="button" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h1 style={styles.heading}>Events</h1>
            <div className="contents">
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div className='image-container' style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div className="contents">
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div className='image-container' style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div>
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div className='image-container' style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div className="contents">
                <h3 style={styles.subHeading} >Upcoming Events</h3>
                <h4 style={styles.subsubHeading}>HACKATHON June 2023</h4>
                <p style={styles.paragraph}>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>
                <div>
                    <ul style={{ marginTop: "-15px", marginLeft: "5px" }}>
                        <li>Date: xx-yy-zz</li>
                        <li>Venue: Location</li>
                        <li>Time: xyz</li>
                        <li>Rewards: Prizes</li>
                    </ul>
                </div>
                <div className='button' style={{ display: "block", height: "5vh" }}>
                    <button className='btn btn-outline-secondary' style={styles.button} data-bs-toggle="modal" data-bs-target="#registerModal" type='button' onClick={() => updateEvent(1)}>Register for it</button>
                </div>
            </div>
            <div className="contents">
                {/* <h3 style={styles.subHeading} >Upcoming Events</h3> */}
                <h4 style={styles.subsubHeading}>HACKATHON June 2023</h4>
                <p style={styles.paragraph}>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>
                <div>
                    <ul style={{ marginTop: "-15px", marginLeft: "5px" }}>
                        <li>Date: xx-yy-zz</li>
                        <li>Venue: Location</li>
                        <li>Time: xyz</li>
                        <li>Rewards: Prizes</li>
                    </ul>
                </div>
                <div className='button' style={{ display: "block", height: "5vh" }}>
                    <button className='btn btn-outline-secondary' style={styles.button} data-bs-toggle="modal" data-bs-target="#registerModal" type='button' onClick={() => updateEvent(2)}>Register for it</button>
                </div>
            </div>
        </div >
    );
}