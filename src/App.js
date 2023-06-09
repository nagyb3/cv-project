import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./styles/styles.css";

function App() {
    const [inputValues, setInputValues] = React.useState(
        {}
    );

    const [data, setData] = React.useState({
        name: "", email: "", phone: "",
        nameOfSchool: "", titleOfStudy: "", dateOfStudy: "",
        companyName: "", positionTitle: "", dateFrom: "", dateTo: ""
    })

    const [formIsShown, setFormIsShown] = React.useState({
        general: true, educational: true, practical: true
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
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (event.target.id === "generalInfoForm") {
            setData(prevState => ({...prevState,
                name: event.target[0].value,
                email: event.target[1].value,
                phone: event.target[2].value}))
            setFormIsShown(prevState => ({...prevState, general: !prevState.general}))
            setDataIsShown(prevState => ({...prevState, general: true}))
        } else if (event.target.id === "educationalForm") {
            setData(prevState => ({...prevState,
                nameOfSchool: event.target[0].value,
                titleOfStudy: event.target[1].value,
                dateOfStudy: event.target[2].value}))
            setFormIsShown(prevState => ({...prevState, educational: !prevState.educational}))
            setDataIsShown(prevState => ({...prevState, educational: true}))
        } else if (event.target.id === "practicalForm") {
            setData(prevState => ({...prevState,
                companyName: event.target[0].value,
                positionTitle: event.target[1].value,
                dateFrom: event.target[2].value,
                dateTo: event.target[3].value
            }))
            setFormIsShown(prevState => ({...prevState, practical: !prevState.practical}))
            setDataIsShown(prevState => ({...prevState, practical: true}))
        }
    }

    function toggleShowForm(sectionName) {
        setFormIsShown(prevState => ({
            ...prevState, sectionName: !prevState.sectionName
        }))
    }

    function toggleShowData(sectionName) {
        setDataIsShown(prevState => ({...prevState, [sectionName]: !prevState.sectionName}))
    }

    return (
        <div>
            <h1>Cv site</h1>
            <GeneralInfo data={data}
                dataIsShown={dataIsShown}
                setFormIsShown={setFormIsShown}
                formIsShown={formIsShown.general}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
            <EducationalExperience data={data}
                dataIsShown={dataIsShown}
                setFormIsShown={setFormIsShown}
                formIsShown={formIsShown.educational}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
            <PracticalExperience data={data}
                dataIsShown={dataIsShown}
                setFormIsShown={setFormIsShown}
                formIsShown={formIsShown.practical}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
        </div>
    );
}

export default App;
