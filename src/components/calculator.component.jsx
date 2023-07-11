function calculateAge(birthDay, birthMonth, birthYear) {
    //current date
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()
    //subtract given birth day from the current date
    let ageYears = currentYear - parseFloat(birthYear);
    let ageMonths = currentMonth - parseFloat(birthMonth);
    let ageDays = currentDay - parseFloat(birthDay)
    console.log(birthYear, birthMonth, birthDay)
    console.log(ageYears, ageMonths, ageDays)
    return ageYears, ageMonths, ageDays
}

function Calculator({ birthDay, birthMonth, birthYear }) {
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