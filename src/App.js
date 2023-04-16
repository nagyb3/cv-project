import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
    const [inputValues, setInputValues] = React.useState(
        {}
    );

    function handleChange() {

    }

    function handleSubmit() {

    }

    return (
        <div>
            <h1>Cv site</h1>
            <form onSubmit={handleSubmit}>
                <GeneralInfo onChange={handleChange()} />
                <EducationalExperience onChange={handleChange()}/>
                <PracticalExperience onChange={handleChange()}/>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default App;
