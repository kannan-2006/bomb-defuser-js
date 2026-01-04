let timerElement = document.getElementById("timer");
let defuserElement = document.getElementById("defuser");
let timerCount = 10;
let uniqueId = setInterval(function() {
    timerCount -= 1;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
        timerElement.textContent = "BOOM";
        clearInterval(uniqueId);
    }
}, 1000);

defuserElement.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserElement.value;
    if (bombDefuserText === "defuse" && event.key === "Enter" && timerCount !== 0) {
        clearInterval(uniqueId);
        timerElement.textContent = "YOU DID IT";
    }
});