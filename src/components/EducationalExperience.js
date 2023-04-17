import React from "react"

export default function EducationalExperience(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, educational: !prevState.educational
        }))
    }


    return (
        <div className="educational-experience">
            <h2>Educational experience</h2>
            {props.formIsShown ?
                <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="name-of-school">name of school:</label>
                        <input type="text" name="nameOfSchool" id="name-of-school"/>
                    </div>
                    <div>
                        <label htmlFor="title-of-study">title of study:</label>
                        <input type="text" name="titleOfStudy" id="title-of-study"/>
                    </div>
                    <div>
                        <label htmlFor="date-of-study">date of study:</label>
                        <input type="date" name="dateOfStudy" id="date-of-study"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>Show form</button>
            }
        </div>
    )
}