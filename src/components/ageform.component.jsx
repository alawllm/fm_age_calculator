import { useState } from "react";
import Calculator from "./calculator.component";

function AgeForm() {
    //react keeps the reference to the object in memory
    const [formData, setFormData] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: ''
    })

    const [error, setError] = useState(false);

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        //input error needs to be stored in the state
        //if (isNaN(newValue)) setInputError('Input must be a number')

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
    }

    const handleBlur = (evt) => {
        //indicates whether the user has entered a value that does not satisfy the pattern
        //attr value
        if (evt.target.validity.patternMismatch) {
            setError(true)
            console.log(error)
        }
    }

    //styled error does not show
    function style(error) {
        if (error) {
            return {
                backgroundColor: "rgba 255,0,0,0.5"
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{formData.birthDay} {formData.birthMonth} {formData.birthYear}</h1>
                <label htmlFor="day">Day</label>
                <input type="text"
                    id="birthday"
                    name="birthDay"
                    placeholder="day"
                    inputMode="decimal"
                    // pattern="^([1-9]|[12][0-9]|3[01])$"
                    pattern="[0-9]"
                    style={style(error)}
                    value={formData.birthDay}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {error && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        Must be a valid day
                    </p>
                )}

                <label htmlFor="month">Month</label>
                <input type="text"
                    id="birthmonth"
                    name="birthMonth"
                    placeholder="month"
                    inputMode="decimal"
                    // pattern="^([1-9]|1[012])$"
                    pattern="[0-9]*"
                    style={style(error)}
                    value={formData.birthMonth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {error && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        Must be a valid month
                    </p>
                )}
                <label htmlFor="year" placeholder="">Year</label>

                <input type="text"
                    id="birthyear"
                    name="birthYear"
                    placeholder="year"
                    inputMode="decimal"
                    pattern="[0-9]*"
                    style={style(error)}
                    value={formData.birthYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {error && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        Must be in the past
                    </p>
                )}
                <button type="submit">Submit</button>
            </form >

            <Calculator
                day={formData.birthDay}
                month={formData.birthMonth}
                year={formData.birthYear} />
        </>
    )
}

export default AgeForm;