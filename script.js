/*
Alternativ måte å skrive opp kommentarer for å sette ut hvert steg for forståelse:

const er erklært variabel
submitValue er variabel navn
= er en erklæring
document er HTML dokumentet
.querySelector() er hva skal jeg hente
#submitValue er spesifikt hva jeg vil ha
console viser til inspect tool
 .log viser til at noe skal logges ut
*/

// Variabel som lagrer at vi henter et element fra HTML på navnet submitValue
const submitValue = document.querySelector("#submitValue");
console.log(submitValue);

// Når knappen trykkes vil denne 'arrow function' hente data som er skrevet i input.
// Vi lager en hendelse til variablen submitValue som gjør denne 'arrow function' når trykket på
submitValue.addEventListener("click", () => {

    // Variabel som lagrer at vi henter informasjon fra et element fra HTML på navnet inputValue
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue);

    // Variabel som lagrer at vi henter et element fra HTML på navnet displayValue
    const displayValue = document.querySelector("#displayValue");
    console.log(displayValue);

    // Vi setter tekst innholdet til displayValue til å være verdien som kommer fra variablen inputValue
    displayValue.textContent = inputValue;

    // Variabel som lagrer at vi henter informasjon fra et element fra HTML på navnet fromValue
    const fromValue = document.querySelector("#fromValue").value;
    console.log(fromValue);

    // Variabel som lagrer at vi henter informasjon fra et element fra HTML på navnet toValue
    const toValue = document.querySelector("#toValue").value;
    console.log(toValue);

    let result;

    if (fromValue === "CM" & toValue === "M") {
        // Kalkulering
        result = inputValue / 100;
    } 
    else if (fromValue === "CM" & toValue === "KM") {
        // Kalkulering
        result = inputValue / 100000;
    } 
    else if (fromValue === "M" & toValue === "CM") {
        // Kalkulering
        result = inputValue * 100;
    }
    else if (fromValue === "M" & toValue === "KM") {
        // Kalkulering
        result = inputValue / 1000;
    }
    else if (fromValue === "KM" & toValue === "CM") {
        // Kalkulering
        result = inputValue * 100000;
    }
    else if (fromValue === "KM" & toValue === "M") {
        // Kalkulering
        result = inputValue * 1000;
    } else {
        console.log("Choose two different options!");
    }

      // Vi setter tekst innholdet til displayValue til å være verdien som kommer fra regnestykkene vi gjorde i if/else og viser resultat.
    displayValue.textContent = result;
    console.log(result)
});