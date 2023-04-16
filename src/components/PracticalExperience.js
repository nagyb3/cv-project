import React from "react"

export default function PracticalExperience() {
    return (
        <div className="practical-experience">
            <h2>Practical experience</h2>
            <div>
                <label htmlFor="company-name">company name</label>
                <input type="text" name="company-name" id="company-name"/>
            </div>
            <div>
                <label htmlFor="position-title">position title:</label>
                <input type="text" name="position-title" id="position-title"/>
            </div>
            <div>
                <label htmlFor="date-from">date from</label>
                <input type="date" name="date-from" id="date-from"/>
            </div>
            <div>
                <label htmlFor="date-to">date to</label>
                <input type="date" name="date-to" id="date-to"/>
            </div>
        </div>
    )
}