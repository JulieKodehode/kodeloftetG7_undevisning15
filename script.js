const submitValue = document.querySelector("#submitValue");
console.log(submitValue);

// Når knappen trykkes vil denne 'arrow function' hente data som er skrevet i input.
submitValue.addEventListener("click", () => {
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue);

    const displayValue = document.querySelector("#displayValue");
    console.log(displayValue);

    displayValue.textContent = inputValue;
});