const inputUser = document.querySelectorAll(".input-user");
const btnSubmit = document.querySelector("#btn-submit");
const outputelement = document.querySelector("#output");

btnSubmit.addEventListener("click", function calculate() {

    if (Number(inputUser[0].value) === 0 || Number(inputUser[1].value) === 0 || Number(inputUser[2].value) === 0) {
        outputelement.innerText = "Please enter Valid input";
    } else {

        const prevalue = Number(inputUser[0].value) * Number(inputUser[1].value);

        const currvalue = Number(inputUser[2].value) * Number(inputUser[1].value);

        const result = currvalue - prevalue;
        const percent = result / Number(inputUser[1].value)

        if (result > 0) {
            outputelement.innerText = "Yippee!! You gained profit of Rs." + result + " and your profit percentage is " + percent + "%";
        } else {
            outputelement.innerText = "Oops!! You gained loss of Rs." + Math.abs(result) + " and your loss percentage is " + Math.abs(percent) + "%";
        }

    }


});