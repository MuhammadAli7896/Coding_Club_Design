import "./contact.css"

export default function Contact() {
    return (
        <div className="container my-3">
            <div className="heading">
                <h1 style={{marginBottom: "-10px"}}>Contact us</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <label htmlFor="" className="form-label">Select category </label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Competitions</option>
                <option value="1">Courses</option>
                {/* <!-- <option value="1">Web-development</option>
            <option value="2">Programming</option> --> */}
                <option value="2">Placements</option>
                <option value="3">Blogs</option>
                <option value="4">Learning</option>
                <option value="5">Events</option>
            </select>

            <span style={{ marginRight: "25px" }}>Are you a member? </span>
            <div className="form-check my-3 d-inline-block">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Yes
                </label>
            </div>


            <div className="mb-3 my-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your query</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Message or Question"></textarea>
            </div>

            <label htmlFor="" className="form-label d-block">How you find this site?</label>
            <div className="form-check form-check-inline ml-4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Yes, helpful</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">Need Improvement</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">There are very issues</label>
            </div>
            <div style={{ marginTop: "5vh", justifyContent: "center", display: "flex" }} className="button">
                <button type="button" className="btn btn-primary btn-lg">Submit</button>
            </div>
        </div>

    );
}