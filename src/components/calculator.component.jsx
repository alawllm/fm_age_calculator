import { useState } from "react"

function calculateAge(birthDay, birthMonth, birthYear) {
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()
    //subtract given birth day from the current date
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay

    console.log(`years: ${ageYears} months: ${ageMonths} days: ${ageDays}`)

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
            {!isSubmitted &&
                (<><p>- - years</p><p>- - months</p><p>- - days</p></>)}
            {isSubmitted &&
                (<><p>{ageYears} years</p><p>{ageMonths} months</p><p>{ageDays}days</p></>)}

        </>
    )
}

export default Calculator;