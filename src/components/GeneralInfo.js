import React from "react"

export default function GeneralInfo(props) {

    function toggle() {
        props.setFormIsShown(prevState => ({
            ...prevState, general: !prevState.general
        }))
    }

    return (
        <div className="general-info">
            <h2>General info:</h2>
            {props.formIsShown ?
                <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="name:">name</label>
                        <input type="text" name="name" id="name" placeholder="Full Name"/>
                    </div>
                    <div>
                        <label htmlFor="email:">email</label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone-number:">phone number</label>
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number"/>
                    </div>
                    <button>SAVE</button>
                </form> : <button onClick={toggle}>show form</button>
            }
        </div>
    )
}