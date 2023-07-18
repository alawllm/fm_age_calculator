import { useState } from 'react'
import './calculator.styles.scss'

function calculateAge(birthDay, birthMonth, birthYear) {
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()
    let ageDays, ageMonths, ageYears;
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (currentDay < birthDay) {
        currentMonth = currentMonth - 1;
        ageDays = currentDay + daysPerMonth[birthMonth - 1] - birthDay
        if (isLeapYear(currentYear) && currentMonth === 2) {
            ageDays += 1
        }
    } else {
        ageDays = currentDay - birthDay
    }

    if (currentMonth < birthMonth) {
        currentYear = currentYear - 1;
        ageMonths = currentMonth + 12 - birthMonth
    } else {
        ageMonths = currentMonth - birthMonth
    }
    ageYears = currentYear - birthYear;

    console.log(`years: ${ageYears} months: ${ageMonths} days: ${ageDays}`)

    function isLeapYear(currentYear) {
        if (currentYear % 4 === 0) return true;
        if (currentYear % 100 === 0) {
            return currentYear % 400 === 0
        }
    }
    return { ageYears, ageMonths, ageDays }
}

function Calculator({ day, month, year, isSubmitted }) {

    let birthDay = parseInt(day)
    let birthMonth = parseInt(month)
    let birthYear = parseInt(year)

    //destructuring properties from the returned object
    let { ageYears, ageMonths, ageDays } = calculateAge(birthDay, birthMonth, birthYear)

    console.log(ageYears, ageMonths, ageDays)

    return (
        <>
            {/* if the calculator is submitted show numbers */}
            {!isSubmitted &&
                (<div className="years-text"><p>- - years</p><p>- - months</p><p>- - days</p></div>)}
            {/* if the form is submitted show numbers */}
            {isSubmitted &&
                (<div className="years-text"><p>{ageYears} years</p><p>{ageMonths} months</p><p>{ageDays}days</p></div>)}

        </>
    )
}

export default Calculator;