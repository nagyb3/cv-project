import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class GeneralInfo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
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
}

class EducationalExperience extends React.Component {
    render() {
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
}

class PracticalExperience extends React.Component {
    render() {
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
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <h1>Cv site</h1>
        <GeneralInfo/>
        <EducationalExperience/>
        <PracticalExperience/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
