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

    const defaultErrorState = {
        birthDay: false,
        birthMonth: false,
        birthYear: false
    }
    const [errors, setError] = useState(defaultErrorState);

    console.log(errors)

    //references
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();

    //reseting error state 
    const resetErrorState = () => {
        setError(defaultErrorState)
    }

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
        //reseting error state at the end
        resetErrorState();
    }

    const validateDay = (day, month, year) => {
        if (day > 0 && day <= 31) {
            const longMonths = [1, 3, 5, 6, 8, 10, 12]
            const shortMonths = [4, 7, 9, 11]
            if (longMonths.includes(month)) {
                return true;
            } else if (shortMonths.includes(month)) {
                day <= 30 ? true : false
            } else if (month === 2) {
                //check february
            }
        }
        //in case if day is less than zero or more than current date
        return false
    }

    const validateMonth = (month) => {
        month > 0 && month <= 12 ? true : false
    }

    const validateYear = (year) => {
        let currentDate = new Date()
        let currentYear = currentDate.getFullYear()

        year > 1920 && year <= currentYear ? true : false
    }

    const validateInputs = (day, month, year) => {
        if (validateDay(day) === false) {
            setError((prevErrors) => ({
                ...prevErrors,
                birthDay: true
            }));
        }
        if (validateMonth(month) === false) {
            setError((prevErrors) => ({
                ...prevErrors,
                birthMonth: true
            }));
        }
        if (validateYear(year) === false) {
            setError((prevErrors) => ({
                ...prevErrors,
                birthYear: true
            }));
        }
    };


    //preventing default behaviour of the formular
    const handleSubmit = (evt) => {
        evt.preventDefault()

        let birthDayInput = 23
        let birthMonthInput = 4
        let birthYearInput = 2004

        let booleanDay = validateDay(birthDayInput)
        let booleanMonth = validateMonth(birthMonthInput)
        let booleanYear = validateYear(birthYearInput)
        console.log(booleanDay, booleanMonth, booleanYear)

        //set error states inside of validation
        //if validation ok, set new states
        // if (evt.target.validity.patternMismatch) {
        //     setError(currError => {
        //         currError[fieldWithError] = newValue;
        //         return {
        //             ...currError,
        //             [fieldWithError]: newValue
        //         }
        //     })
        // }

    }


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
                    style={style(errors)}
                    value={formData.birthDay}
                    onChange={handleChange}
                    ref={dayRef}
                    required
                />
                {/* //if the error exists, the paragraph will be shown */}
                {errors.birthDay && (
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
                    style={style(errors)}
                    value={formData.birthMonth}
                    onChange={handleChange}
                    ref={monthRef}
                    required
                />
                {errors.birthMonth && (
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
                    style={style(errors)}
                    value={formData.birthYear}
                    onChange={handleChange}
                    ref={yearRef}
                    required
                />
                {errors.birthYear && (
                    <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        Must be in the past
                    </p>
                )}
                <button type="submit" onClick={handleSubmit}>
                    <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
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