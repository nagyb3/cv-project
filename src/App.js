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

    const [isShown, setIsShown] = React.useState({
        general: true, educational: true, practical: true
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

    // function showForm(sectionName) {
    //     setIsShown(prevState => ({
    //         ...prevState, sectionName: !prevState.sectionName
    //     }))
    // }

    return (
        <div>
            <h1>Cv site</h1>
            {/*<form onSubmit={handleSubmit}>*/}
                <GeneralInfo /*showForm={showForm}*/ formIsShown={isShown.general} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <EducationalExperience formIsShown={isShown.educational} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <PracticalExperience formIsShown={isShown.practical} handleChange={handleChange} handleSubmit={handleSubmit}/>
                {/*<button>SUBMIT the whole thing</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default App;
