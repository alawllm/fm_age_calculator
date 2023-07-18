# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- 
### Links

- Solution URL: [GitHub](https://github.com/alawllm/fm_age_calculator_app)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- [React](https://reactjs.org/) - JS library
- App build React Vite

### What I learned

I have learned a lot on this project, especially building input validation from scratch and working with date / time in JS / React. 

However, the design demanded separating day, month and year fields and showing separate error messages for them. As the day depends on a months and on a year, it will be prone to mistakes. When the month/year is invalid, the day will be invalid as well.

I have built the validation without solving every edge case, as well as built the age calculator in pure JS.

It was a good learning experience, however I have decided not to continue with the project as it would be mostly solving validation edge cases from now and I did not want to leave solved edge cases.

Another good solution would be using a validation library, such as React Hook Form. However, it is also a good experience to try to build it yourself.

### Useful resources

- [MDN - getting time out of a data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime?retiredLocale=de)
- [Freecodecamp - how to build forms in React](https://www.freecodecamp.org/news/how-to-build-forms-in-react/) 
- [How to handle invalid user inputs in React](https://medium.com/web-dev-survey-from-kyoto/how-to-handle-invalid-user-inputs-in-react-forms-for-ux-design-best-practices-e3108ef8a793)
-[Use React Refs for individual field validation with auto-focused inputs](https://levelup.gitconnected.com/add-individual-field-validation-with-auto-focused-input-to-login-form-3267bd27d67c)
- ChatGPT for answering some CSS questions. However, it is important to remember that as of 17.07.23 the last update of ChatGPT was in 2021 so it doesn't have knowledge about newer CSS features. 

## Author

- GitHub - [@yourusername](https://github.com/alawllm)




