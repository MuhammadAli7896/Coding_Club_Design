export default function Contact() {
    return (
        <div className="container my-3">
            <h1>Contact Us</h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <label for="" className="form-label">Select category </label>
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
            
            <span style={{marginRight : "25px"}}>Are you a member? </span>
            <div class="form-check my-3 d-inline-block">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Yes
                    </label>
            </div>


            <div className="mb-3 my-2">
                <label for="exampleFormControlTextarea1" className="form-label">Your query</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Message or Question"></textarea>
            </div>

            <label for="" className="form-label d-block">How you find this site?</label>
            <div className="form-check form-check-inline ml-4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" for="inlineCheckbox1">Yes, helpful</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" for="inlineCheckbox2">Need Improvement</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" for="inlineCheckbox3">There are very issues</label>
            </div>
        </div>

    );
}