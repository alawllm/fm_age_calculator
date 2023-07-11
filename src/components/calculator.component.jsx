function calculateAge(birthDay, birthMonth, birthYear) {
    //current date
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()
    //subtract given birth day from the current date

    let ageYears = currentYear - birthYear;
    console.log(birthDay, birthMonth, birthYear)
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