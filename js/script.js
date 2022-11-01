let formElement = document.querySelector(".js-form");
let inputAmountElement = document.querySelector(".js-inputAmount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let pln_eur = 0.2092;
let pln_usd = 0.2041;
let pln_gbp = 0.1834;
let eur_usd = 0.9756;
let eur_gbp = 0.8765;
let usd_gbp = 0.8985;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputAmount = inputAmountElement.value;
    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;

    switch (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN")
                result = (inputAmount * 1);
            else if (outputCurrency === "EUR")
                result = (inputAmount * pln_eur);
            else if (outputCurrency === "USD")
                result = (inputAmount * pln_usd);
            else if (outputCurrency === "GBP")
                result = (inputAmount * pln_gbp);
            break;

        case "EUR":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_eur);
            else if (outputCurrency === "EUR")
                result = (inputAmount * 1);
            else if (outputCurrency === "USD")
                result = (inputAmount * eur_usd);
            else if (outputCurrency === "GBP")
                result = (inputAmount * eur_gbp);
            break;

        case "USD":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_usd);
            else if (outputCurrency === "EUR")
                result = (inputAmount / eur_usd);
            else if (outputCurrency === "USD")
                result = (inputAmount * 1);
            else if (outputCurrency === "GBP")
                result = (inputAmount * usd_gbp);
            break;

        case "GBP":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_gbp);
            else if (outputCurrency === "EUR")
                result = (inputAmount / eur_gbp);
            else if (outputCurrency === "USD")
                result = (inputAmount / usd_gbp);
            else if (outputCurrency === "GBP")
                result = (inputAmount * 1);
            break;
    }
    resultElement.innerText = result.toFixed(2);
});

