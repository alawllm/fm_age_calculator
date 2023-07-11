import { useState } from "react";
import Calculator from "./calculator.component";

function AgeForm() {
    //react keeps the reference to the object in memory
    const [formData, setFormData] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: ''
    })

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            currData[changedField] = newValue;

            return {
                //spread operator makes a copy - different object in memory
                ...currData,
                //updating the value
                //square brackets - variable
                [changedField]: newValue
            }
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData.birthDay, formData.birthMonth, formData.birthYear)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{formData.birthDay} {formData.birthMonth} {formData.birthYear}</h1>
                <label htmlFor="day">Day</label>
                <input type="text" placeholder="day" value={formData.birthDay} onChange={handleChange} id="birthday" name="birthDay" />
                <label htmlFor="month">Month</label>
                <input type="text" placeholder="month" value={formData.birthMonth} onChange={handleChange} id="birthmonth" name="birthMonth" />
                <label htmlFor="year" placeholder="">Year</label>
                <input type="text" placeholder="year" value={formData.birthYear} onChange={handleChange} id="birthyear" name="birthYear" />
                <button type="submit">Submit</button>
            </form >

            <Calculator day={formData.birthDay} month={formData.birthMonth} year={formData.birthYear} />
        </>
    )
}

export default AgeForm;