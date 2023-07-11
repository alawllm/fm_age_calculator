import { useState } from "react";
import Calculator from "./calculator.component";

function AgeForm() {
    //react keeps the reference to the object in memory
    const [formData, setFormData] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: ''
    })

    const [inputError, setInputError] = useState({
        errorDay: 'Must be a valid day',
        errorMonth: 'Must be a valid month',
        errorMonth: 'Must be in the past'
    })

    // const updateBirthDay = (evt) => {
    //     setFormData(evt.target.value)
    // }

    // const updateBirthMonth = (evt) => {
    //     setFormData(evt.target.value)
    // }

    // const updateBirthYear = (evt) => {
    //     setFormData(evt.target.value)
    // }


    // const handleChange = (evt) => {
    //     const changedField = evt.target.name;
    //     const newValue = evt.target.value;
    //     //input error needs to be stored in the state
    //     //if (isNaN(newValue)) setInputError('Input must be a number')

    //     setFormData(currData => {
    //         currData[changedField] = newValue;
    //         return {
    //             //spread operator makes a copy - different object in memory
    //             ...currData,
    //             //updating the value
    //             //square brackets - variable
    //             [changedField]: newValue
    //         }
    //     })
    // }

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{formData.birthDay} {formData.birthMonth} {formData.birthYear}</h1>
                <label htmlFor="day">Day</label>
                <input type="text" placeholder="day" value={formData.birthDay} onChange={updateBirthDay} id="birthday" name="birthDay" />

                <label htmlFor="month">Month</label>
                <input type="text" placeholder="month" value={formData.birthMonth} onChange={updateBirthMonth} id="birthmonth" name="birthMonth" />
                <label htmlFor="year" placeholder="">Year</label>

                <input type="text" placeholder="year" value={formData.birthYear} onChange={updateBirthYear} id="birthyear" name="birthYear" />
                <button type="submit">Submit</button>
            </form >

            <Calculator day={formData.birthDay} month={formData.birthMonth} year={formData.birthYear} />
        </>
    )
}

export default AgeForm;