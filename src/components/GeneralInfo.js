import React from "react"
import "../styles/styles.css";

export default function GeneralInfo(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, general: !prevState.general
        }))
    }
    const dataField = <div>
        <ul>
            <li>Name: {props.data.name}</li>
            <li>Email: {props.data.email}</li>
            <li>Phone number: {props.data.phone}</li>
        </ul>
    </div>

    return (
        <div className="general-info">
            <h2>General info:</h2>
            {props.dataIsShown.general && dataField}
            {props.formIsShown ?
                <form id="generalInfoForm"
                      onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="name:">name</label>
                        <input value={props.data.name} type="text"
                               name="name" id="name" placeholder="Full Name"/>
                    </div>
                    <div>
                        <label htmlFor="email:">email</label>
                        <input value={props.data.email} type="email"
                               name="email" id="email" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone-number:">phone number</label>
                        <input value={props.data.phone} type="tel"
                               name="phone" id="phone" placeholder="Phone Number"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>Edit</button>
            }
        </div>
    )
}