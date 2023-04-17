import React from "react"

export default function PracticalExperience(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, practical: !prevState.practical
        }))
    }

    return (
        <div className="practical-experience">
            <h2>Practical experience</h2>
            {props.formIsShown ?
                <form id="practicalForm"
                    onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="company-name">company name</label>
                        <input type="text" name="companyName" id="company-name"/>
                    </div>
                    <div>
                        <label htmlFor="position-title">position title:</label>
                        <input type="text" name="positionTitle" id="position-title"/>
                    </div>
                    <div>
                        <label htmlFor="date-from">date from</label>
                        <input type="date" name="dateFrom" id="date-from"/>
                    </div>
                    <div>
                        <label htmlFor="date-to">date to</label>
                        <input type="date" name="dateTo" id="date-to"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>Show form</button>
            }
        </div>
    )
}