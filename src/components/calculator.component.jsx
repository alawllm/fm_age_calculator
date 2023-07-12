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
    return ageYears, ageMonths, ageDays
}

function Calculator({ day, month, year }) {
    console.log(day, month, year)
    let birthDay = parseInt(day)
    let birthMonth = parseInt(month)
    let birthYear = parseInt(year)
    console.log(birthDay, birthMonth, birthYear)
    calculateAge(birthDay, birthMonth, birthYear)

    return (
        <>
            {/* <p>{ageYears} years</p>
            <p>{ageMonths} months</p>
            <p>{ageDays}days</p> */}
            {/* <p>{currentDay} {currentMonth} {currentYear}</p> */}
        </>
    )
}

export default Calculator;