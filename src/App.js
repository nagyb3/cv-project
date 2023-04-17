import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
    const [inputValues, setInputValues] = React.useState(
        {}
    );

    const [Data, setData] = React.useState({
        name: "", email: "", phone: "",
        nameOfSchool: "", titleOfStudy: "", dateOfStudy: "",
        companyName: "", positionTitle: "", dateFrom: "", dateTo: ""
    })

    // const [EducationData, setEducationData] = React.useState({
    //     nameOfSchool: "", titleOfStudy: "", dateOfStudy: ""
    // })
    //
    // const [PracticalData, setPracticalData] = React.useState({
    //     companyName: "", positiontTitle: "", dateFrom: "", dateTo: ""
    // })

    const [formIsShown, setFormIsShown] = React.useState({
        general: true, educational: true, practical: false
    })

    const [dataIsShown, setDataIsShown] = React.useState({
        general: false, educational: false, practical: false
    })

    function handleChange(event) {
        event.preventDefault();
        const {name, value} = event.target
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(Data)
    }

    function handleSubmit(event) {
        console.log(event)
    }

    function toggleShowForm(sectionName) {
        setFormIsShown(prevState => ({
            ...prevState, sectionName: !prevState.sectionName
        }))
    }

    function toggleShowData(sectionName) {
        setDataIsShown(prevState => ({...prevState, [sectionName]: !prevState.sectionName}))
        console.log(dataIsShown)
    }

    return (
        <div>
            <h1>Cv site</h1>
            <GeneralInfo setFormIsShown={setFormIsShown} formIsShown={formIsShown.general} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <EducationalExperience setFormIsShown={setFormIsShown} formIsShown={formIsShown.educational} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <PracticalExperience setFormIsShown={setFormIsShown} formIsShown={formIsShown.practical} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    );
}

export default App;
