import { useState, useRef } from "react";
import Calculator from "./calculator.component";
import arrowIcon from '../assets/icon-arrow.svg'

function AgeForm() {
    //react keeps the reference to the object in memory
    const [formData, setFormData] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: ''
    })

    //error states for handling errors
    //error states should be handled inside of handle submit
    const [error, setError] = useState({
        birthDay: false,
        birthMonth: false,
        birthYear: false
    });

    console.log(error)

    //references
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();

    //assigning the correct state
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        setFormData(currData => {
            currData[changedField] = newValue;
            return {
                ...currData,
                [changedField]: newValue
            }
        })
    }

    //preventing default behaviour of the formular
    const handleSubmit = (evt) => {
        evt.preventDefault()

        const fieldWithError = evt.target.name;
        const newValue = true;

        //call validation
        //set error states inside of validation
        //if validation ok, set new states
        if (evt.target.validity.patternMismatch) {
            setError(currError => {
                currError[fieldWithError] = newValue;
                return {
                    ...currError,
                    [fieldWithError]: newValue
                }
            })
        }
    }

    // const validateInput = () => {
    //     const fields = [
    //         name: 'birthDay',
    //         value: state.birthDay,
    //         message:
    //     ]
    // }

    //handling blur - setting error to true
    // const handleBlur = (evt) => {
    //     const fieldWithError = evt.target.name;
    //     const newValue = true;
    //     //indicates whether the user has entered a value that does not satisfy the pattern
    //     //attr value
    //     if (evt.target.validity.patternMismatch) {
    //         setError(currError => {
    //             currError[fieldWithError] = newValue;
    //             return {
    //                 ...currError,
    //                 [fieldWithError]: newValue
    //             }
    //         })
    //     }
    // }

    //error styling
    function style(error) {
        if (error) {
            return {
                backgroundColor: "rgba 255,0,0,0.5"
            }
        }
    }

    return (
        <>
            <form>
                <h1>day: {formData.birthDay} month: {formData.birthMonth} year: {formData.birthYear}</h1>
                <label htmlFor="day">Day</label>
                <input type="text"
                    id="birthday"
                    //name matches state properties
                    //state can be set with that name
                    name="birthDay"
                    placeholder="day"
                    inputMode="decimal"
                    // pattern="^([1-9]|[12][0-9]|3[01])$"
                    pattern="[0-9]"
                    style={style(error)}
                    value={formData.birthDay}
                    onChange={handleChange}
                    ref={dayRef}
                />
                {/* //if the error exists, the paragraph will be shown */}
                {error.birthDay && (
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
                    ref={monthRef}
                />
                {error.birthMonth && (
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
                    ref={yearRef}
                />
                {error.birthYear && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        Must be in the past
                    </p>
                )}
                <button type="submit" onClick={handleSubmit}>
                    <img src={arrowIcon} alt="arrow icon" />
                </button>
            </form >

            <Calculator
                day={formData.birthDay}
                month={formData.birthMonth}
                year={formData.birthYear} />
        </>
    )
}

export default AgeForm;