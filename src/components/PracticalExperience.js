import React from "react"
import "../styles/styles.css";

export default function PracticalExperience(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, practical: !prevState.practical
        }))
    }

    const dataField = <div>
        <ul>
            <li>Company name: {props.data.companyName}</li>
            <li>title: {props.data.positionTitle}</li>
            <li>Date from: {props.data.dateFrom}</li>
            <li>Date to: {props.data.dateTo}</li>
            {/*TODO: convert date into nicely human readable string*/}
        </ul>
    </div>

    return (
        <div className="practical-experience">
            <h2>Practical experience</h2>
            {props.dataIsShown.practical && dataField}
            {props.formIsShown ?
                <form id="practicalForm"
                    onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="company-name">company name</label>
                        <input value={props.data.companyName} type="text"
                               name="companyName" id="company-name"/>
                    </div>
                    <div>
                        <label htmlFor="position-title">position title:</label>
                        <input value={props.data.positionTitle} type="text"
                               name="positionTitle" id="position-title"/>
                    </div>
                    <div>
                        <label htmlFor="date-from">date from</label>
                        <input value={props.data.dateFrom} type="date"
                               name="dateFrom" id="date-from"/>
                    </div>
                    <div>
                        <label htmlFor="date-to">date to</label>
                        <input value={props.data.dateTo} type="date"
                               name="dateTo" id="date-to"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>Edit</button>
            }
        </div>
    )
}