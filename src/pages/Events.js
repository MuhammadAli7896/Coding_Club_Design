export default function Events()
{
    let styles = {
        heading: {
            borderBottom: "4px solid #6e6b6b",
            // color: "#cc0707",
            margin: "10px",
        },
        subHeading :{
            margin: "20px 13px",
            borderBottom: "2px solid #6e6b6b",

        },
        container: {
            margin: "10px",
        },
        paragraph: {
            top: "0",
            left: "0",
            maxWidth: "70%",
            padding: "15px",
        }
    }
    return (
        <div>
            <h1 style={styles.heading}>Events</h1>
            <h3 style={styles.subHeading}>CODATHON Fall 2022</h3>
            <p style={styles.paragraph}>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to.</p>
        </div>
    );
}