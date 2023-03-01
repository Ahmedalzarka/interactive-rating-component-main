window.onload = function(){
    const mainContainer = document.querySelector(".container")
    const thanksContainer = document.querySelector(".thanks-section")
    const submitButton = document.getElementById("submit-rating")
    const rating = document.getElementById("rating")
    const rates = document.querySelectorAll(".rate-btn")
    //submit button event listener
    submitButton.addEventListener("click", () => {
        mainContainer.style.display = "none"
        thanksContainer.classList.remove("hidden")});

    rates.forEach((rate) => {
        rate.addEventListener("click", () => {
            rating.innerHTML = rate.innerHTML
        })
    })

}