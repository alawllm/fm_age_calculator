import { useState } from "react";
import Calculator from "./calculator.component";
import arrowIcon from '../assets/icon-arrow.svg'

import './ageform.styles.scss'


function AgeForm() {
    //react keeps the reference to the object in memory

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

    const validateDay = (day, month, year) => {
        const longMonths = [1, 3, 5, 7, 8, 10, 12]
        const shortMonths = [4, 6, 9, 11]
        if (day > 0 && day <= 31) {
            if (longMonths.includes(month)) {
                return true;
            } else if (shortMonths.includes(month)) {
                if (day <= 30) return true;
            } else if (month === 2) {
                //check february and leap years
                if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                    if (day <= 29) {
                        return true;
                    }
                } else {
                    // non-leap year
                    if (day <= 28) {
                        return true;
                    }
                }
            }
        }
        //in case if day is less than zero or more than current date
        return false
    }

    const validateMonth = (month) => {
        return month > 0 && month <= 12 ? true : false
    }

    const validateYear = (year) => {
        let currentDate = new Date()
        let currentYear = currentDate.getFullYear()

        return year > 1920 && year <= currentYear ? true : false
    }

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


    //preventing default behaviour of the formular
    const handleSubmit = (evt) => {
        evt.preventDefault()

        let birthDayInput = +(formData.birthDay)
        let birthMonthInput = +(formData.birthMonth)
        let birthYearInput = +(formData.birthYear)
        console.log('inputs', birthDayInput, birthMonthInput, birthYearInput)

        console.log('errors before validation', errors)

        validateInputs(birthDayInput, birthMonthInput, birthYearInput)
        console.log('errors after validation', errors)

        const hasErrors = Object.values(errors).some((error) => error === true);
        console.log('hasErrors', hasErrors)
        if (!hasErrors) {
            //setError(defaultErrorState)
            setIsSubmitted(true)
        }
    }

    //error styling
    function style(error) {
        if (error) {
            return {
                color: "rgba 255,0,0,0.5"
            }
        }
    }

    return (
        <>
            <form className="form">
                <div className="inputs-structure">
                    <div className="input-wrapper">
                        <label htmlFor="day">DAY</label>
                        <input type="text"
                            id="birthday"
                            //name matches state properties
                            //state can be set with that name
                            name="birthDay"
                            placeholder="0"
                            inputMode="decimal"
                            pattern="[0-9]{1,2}"
                            style={style(errors.birthDay)}
                            value={formData.birthDay}
                            onChange={handleChange}
                            required
                        />
                        {/* //if the error exists, the paragraph will be shown */}
                        {errors.birthDay && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be a valid day
                            </p>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="month">MONTH</label>
                        <input type="text"
                            id="birthmonth"
                            name="birthMonth"
                            placeholder="0"
                            inputMode="decimal"
                            pattern="[0-9]{1,2}"
                            style={style(errors.birthMonth)}
                            value={formData.birthMonth}
                            onChange={handleChange}
                            required
                        />
                        {errors.birthMonth && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be a valid month
                            </p>
                        )}
                    </div>
                    <div className="input-wrapper">

                        <label htmlFor="year" placeholder="">YEAR</label>

                        <input type="text"
                            id="birthyear"
                            name="birthYear"
                            placeholder="0"
                            inputMode="decimal"
                            pattern="[0-9]{1,4}"
                            style={style(errors.birthYear)}
                            value={formData.birthYear}
                            onChange={handleChange}
                            required
                        />
                        {errors.birthYear && (
                            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                                Must be valid year
                            </p>
                        )}
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit}>
                    <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
                </button>
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