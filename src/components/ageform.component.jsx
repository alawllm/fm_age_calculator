import { useState } from "react";
import Calculator from "./calculator.component";
import arrowIcon from '../assets/icon-arrow.svg'
import { validateDay, validateMonth, validateYear } from "../validation";

import './ageform.styles.scss'


function AgeForm() {
    const [formData, setFormData] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: ''
    })

    const [errors, setError] = useState({
        birthDay: false,
        birthMonth: false,
        birthYear: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateInputs = (day, month, year) => {
        setError((prevErrors) => ({
            ...prevErrors,
            birthDay: !validateDay(day, month, year)
        }))

        setError((prevErrors) => ({
            ...prevErrors,
            birthMonth: !validateMonth(month)
        }))

        setError((prevErrors) => ({
            ...prevErrors,
            birthYear: !validateYear(year)
        }))
    };

    //assigning the correct state on change
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
    //validating on blur
    const handleBlur = (evt) => {
        let birthDayInput = +(formData.birthDay)
        let birthMonthInput = +(formData.birthMonth)
        let birthYearInput = +(formData.birthYear)

        console.log('inputs', birthDayInput, birthMonthInput, birthYearInput)
        console.log('errors before validation', errors)

        validateInputs(birthDayInput, birthMonthInput, birthYearInput)

        console.log('errors after validation', errors)
    }

    //preventing default behaviour of the formular
    const handleSubmit = (evt) => {
        evt.preventDefault()

        const hasErrors = Object.values(errors).some((error) => error === true);
        console.log('hasErrors', hasErrors)
        if (!hasErrors
            && formData.birthDay.length !== 0
            && formData.birthMonth.length !== 0
            && formData.birthYear.length !== 0) {
            //setError(defaultErrorState)
            setIsSubmitted(true)
        }
    }

    function style(error) {
        if (error) {
            return {
                color: "red",
                border: "1px solid red"
            }
        }
    }

    function inputStyle(error) {
        if (error) {
            return {
                color: "red"
            }
        }
    }

    return (
        <>
            <form className="form">
                <div className="inputs-structure">
                    <div className="input-wrapper">
                        <label
                            htmlFor="day"
                            style={inputStyle(errors.birthDay)}
                        >DAY</label>
                        <input type="text"
                            id="birthday"
                            name="birthDay"
                            placeholder="-"
                            inputMode="decimal"
                            pattern="[0-9]{1,2}"
                            style={style(errors.birthDay)}
                            value={formData.birthDay}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />

                        {errors.birthDay && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be a valid day
                            </p>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label
                            htmlFor="month"
                            style={inputStyle(errors.birthMonth)}
                        >MONTH</label>
                        <input type="text"
                            id="birthmonth"
                            name="birthMonth"
                            placeholder="-"
                            inputMode="decimal"
                            pattern="[0-9]{1,2}"
                            style={style(errors.birthMonth)}
                            value={formData.birthMonth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.birthMonth && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be a valid month
                            </p>
                        )}
                    </div>
                    <div className="input-wrapper">

                        <label
                            htmlFor="year"
                            style={inputStyle(errors.birthYear)}
                        >YEAR</label>

                        <input type="text"
                            id="birthyear"
                            name="birthYear"
                            placeholder="-"
                            inputMode="decimal"
                            pattern="[0-9]{1,4}"
                            style={style(errors.birthYear)}
                            value={formData.birthYear}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.birthYear && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be valid year
                            </p>
                        )}
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" onClick={handleSubmit}>
                        <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
                    </button>
                </div>
            </form >
            <Calculator
                day={formData.birthDay}
                month={formData.birthMonth}
                year={formData.birthYear}
                isSubmitted={isSubmitted} />
        </>
    )
}

export default AgeForm;