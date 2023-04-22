import pic4 from './assets/4.jpeg';
import pic5 from './assets/5.jpeg';
import pic6 from './assets/6.jpeg';

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
    return (
        <div>
            <h1 style={styles.heading}>Events</h1>
            <div>
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div>
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div>
                <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
                <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
                <div style={{ display: "flex", margin: "0px 100px" }}>
                    <img className="img-fluid " src={pic4} alt="" style={styles.image} />
                    <img className="img-fluid " src={pic5} alt="" style={styles.image} />
                </div>
            </div>
            <div>
                <h3 style={styles.subHeading} >Upcoming Events</h3>
                <h4 style={styles.subsubHeading}>HACKATHON June 2023</h4>
                <p style={styles.paragraph}>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>
                <div>
                    <ul style={{marginTop: "-15px", marginLeft: "5px"}}>
                        <li>Date: xx-yy-zz</li>
                        <li>Venue: Location</li>
                        <li>Time: xyz</li>
                        <li>Rewards: Prizes</li>
                    </ul>
                </div>
                <div style={{display: "block", height: "5vh"}}>
                    <button className='btn btn-outline-secondary' style={styles.button} >Register for it</button>
                </div>
            </div>
            <div>
                {/* <h3 style={styles.subHeading} >Upcoming Events</h3> */}
                <h4 style={styles.subsubHeading}>HACKATHON June 2023</h4>
                <p style={styles.paragraph}>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>
                <div>
                    <ul style={{marginTop: "-15px", marginLeft: "5px"}}>
                        <li>Date: xx-yy-zz</li>
                        <li>Venue: Location</li>
                        <li>Time: xyz</li>
                        <li>Rewards: Prizes</li>
                    </ul>
                </div>
                <div style={{display: "block", height: "5vh"}}>
                    <button className='btn btn-outline-secondary' style={styles.button} >Register for it</button>
                </div>
            </div>
        </div>
    );
}