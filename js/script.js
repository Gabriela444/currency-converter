{
    const welcome = () => {
        console.log("Hello! Have a nice day. :)")
    }

    const chosenCurrency = () => {
        const pln_eur = 0.2213;
        const pln_usd = 0.2401;
        const pln_gbp = 0.1927;
        const eur_usd = 1.0938;
        const eur_gbp = 0.8778;
        const usd_gbp = 0.8026;
    }

    const formInput = () => {

        const inputAmountElement = document.querySelector(".js-inputAmount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const resultElement = document.querySelector(".js-result");

        const inputAmount = inputAmountElement.value;
        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;


        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN")
                    return inputAmount * 1;
                else if (outputCurrency === "EUR")
                    return inputAmount * pln_eur;
                else if (outputCurrency === "USD")
                    return inputAmount * pln_usd;
                else if (outputCurrency === "GBP")
                    return inputAmount * pln_gbp;

            case "EUR":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_eur;
                else if (outputCurrency === "EUR")
                    return inputAmount * 1;
                else if (outputCurrency === "USD")
                    return inputAmount * eur_usd;
                else if (outputCurrency === "GBP")
                    return inputAmount * eur_gbp;

            case "USD":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_usd;
                else if (outputCurrency === "EUR")
                    return inputAmount / eur_usd;
                else if (outputCurrency === "USD")
                    return inputAmount * 1;
                else if (outputCurrency === "GBP")
                    return inputAmount * usd_gbp;

            case "GBP":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_gbp;
                else if (outputCurrency === "EUR")
                    return inputAmount / eur_gbp;
                else if (outputCurrency === "USD")
                    return inputAmount / usd_gbp;
                else if (outputCurrency === "GBP")
                    return inputAmount * 1;
        }


        const resultTextElement = (inputAmount, inputCurrency, outputCurrency, pln_eur, pln_usd, pln_gbp, eur_usd, eur_gbp, usd_gbp, resultElement) => {
            resultElement.innerText = `<i>${inputAmount} ${inputCurrency} ${outputCurrency} ${pln_eur} ${pln_usd} ${pln_gbp} ${eur_usd} ${eur_gbp} ${usd_gbp} = </i>${result.toFixed(2)}`;
        }
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

    }

    init();

}
