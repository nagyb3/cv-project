import React from "react"
import "../styles/styles.css";

export default function EducationalExperience(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, educational: !prevState.educational
        }))
    }

    const dataField = <div>
        <ul>
            <li>Name of the school: {props.data.nameOfSchool}</li>
            <li>Title of study: {props.data.titleOfStudy}</li>
            <li>Date of study: {props.data.dateOfStudy}</li>
            {/*TODO: convert date into nicely human readable string*/}
        </ul>
    </div>

    return (
        <div className="educational-experience">
            <h2>Educational experience</h2>
            {props.dataIsShown.educational && dataField}
            {props.formIsShown ?
                <form id="educationalForm"
                      onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="name-of-school">name of school:</label>
                        <input value={props.data.nameOfSchool} type="text"
                               name="nameOfSchool" id="name-of-school"/>
                    </div>
                    <div>
                        <label htmlFor="title-of-study">title of study:</label>
                        <input value={props.data.titleOfStudy} type="text"
                               name="titleOfStudy" id="title-of-study"/>
                    </div>
                    <div>
                        <label htmlFor="date-of-study">date of study:</label>
                        <input value={props.data.dateOfStudy} type="date"
                               name="dateOfStudy" id="date-of-study"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>Edit</button>
            }
        </div>
    )
}