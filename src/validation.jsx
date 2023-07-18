export const validateDay = (day, month, year) => {
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
    return false
}

export const validateMonth = (month) => {
    return month > 0 && month <= 12 ? true : false
}

export const validateYear = (year) => {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    return year > 1920 && year <= currentYear ? true : false
}

