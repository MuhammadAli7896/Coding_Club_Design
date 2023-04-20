import pic1 from './assets/1.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';
import pic4 from './assets/4.jpeg';
import pic5 from './assets/5.jpeg';
import pic6 from './assets/6.jpeg';


export default function Homepage() {
    return (
        <div className="Home">
            {/* carousel */}
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100 " alt="laptop/device" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to Hi-Coderz</h2>
                            <p>This website is designed for a coding club.</p>
                            {/* <button className="btn btn-danger">Technology</button>
                                <button className="btn btn-success">Development</button>
                                <button className="btn btn-primary">Blogs</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100 " alt="programming" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>The best Coding blog</h2>
                            <p>This website is designed for a coding club.</p>
                            {/* <button className="btn btn-danger">Technology</button>
                                <button className="btn btn-success">Development</button>
                                <button className="btn btn-primary">Blogs</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100 " alt="windows/mac" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Win awards and get opportunities</h2>
                            <p>This website is designed for a coding club.</p>
                            {/* <button className="btn btn-danger">Technology</button>
                                <button className="btn btn-success">Development</button>
                                <button className="btn btn-primary">Blogs</button> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Content  */}
            <div className='Content' style={{justifyContent: "center", alignItems: "center", margin: "15px", textAlign: "center"}}>
                <h2>Coding Club </h2>
                <h4>Vision Statement</h4>
                <p>The vision for this coding club is to raise awareness about the ever-evolving field of computer science. This club aims to introduce the student body with the latest trends in Software Development and bring them up-to-speed with the latest research activities.</p>
                <h4>Mission Statement</h4>
                <p>Our mission is to enable the student body to have global impact through innovative research, workshops, webinars and competitions. Through the spirit of hard work and competition, we want our students to be successful in research and obtaining technical skills.</p>
                <h4>Objectives of this Club</h4>
                <ul>
                    <li>Provide a strong foundation for student to grow their skills in computer science.</li>
                    <li>Develop the interest of Students in Competitive programming, speed programming and improve logic building skills.</li>
                    <li>Prepare the students to provide professional solutions to real life problems.</li>
                    <li>Enhance the problem-solving skills.</li>
                    <li>To develop a comprehensive, research-led society that imparts quality education, encourages Innovation, Entrepreneurship and Community Service.</li>
                </ul>
            </div>
        </div >
    );
}