import pic1 from "./assets/7.jpg"
import pic2 from "./assets/8.jpeg"
import "./members.css"

export default function Members() {
    return (
        <div style={{ marginTop: "2vh", marginBottom: "10vh" }}>
            {/* Member#1 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic1} alt="" className="image" />
                        <figcaption className="caption">Incharge</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#2 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic2} alt="" className="image" />
                        <figcaption className="caption">Manager</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#3 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic1} alt="" className="image" />
                        <figcaption className="caption">Assistant Manager</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#4 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic2} alt="" className="image" />
                        <figcaption className="caption">Administrator</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#5 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic1} alt="" className="image" />
                        <figcaption className="caption">Finance Manager</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#6 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic2} alt="" className="image" />
                        <figcaption className="caption">Coordinator</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
            {/* Member#7 */}
            <div className="columns">
                <div className="imgcontainer">
                    <figure >
                        <img src={pic1} alt="" className="image" />
                        <figcaption className="caption">Coordinator</figcaption>
                    </figure>
                </div>
                <ul className="details">
                    <li>Name: </li>
                    <li>Qualification: </li>
                    <li>Lives at Karachi </li>
                    <li>Currently: </li>
                    <li>Email: </li>
                    <li>LinkedIn: </li>
                </ul>
            </div>
        </div>

    );
}