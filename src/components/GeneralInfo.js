import React from "react"

export default function GeneralInfo() {
    return (
        <div className="general-info">
            <h2>basic info:</h2>
            <div>
                <label htmlFor="name:">name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div>
                <label htmlFor="email:">email</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone-number:">phone number</label>
                <input type="tel" name="phone-number" id="phone-number"/>
            </div>
        </div>
    )
}