import React from "react"

export default function EducationalExperience() {
    return (
        <div className="educational-experience">
            <h2>Educational experience</h2>
            <div>
                <label htmlFor="name-of-school">name of school:</label>
                <input type="text" name="name-of-school" id="name-of-school"/>
            </div>
            <div>
                <label htmlFor="title-of-study">title of study:</label>
                <input type="text" name="title-of-study" id="title-of-study"/>
            </div>
            <div>
                <label htmlFor="date-of-study">date of study:</label>
                <input type="date" name="date-of-study" id="date-of-study"/>
            </div>
        </div>
    )
}