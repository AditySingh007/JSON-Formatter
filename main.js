const inputArea = document.querySelector(".area-input");
const outputArea = document.querySelector(".area-output");
const btnFormat = document.querySelector(".button-format");
const btnClear = document.querySelector(".button-clear");

btnFormat.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(inputArea.value) , null , 4);

    outputArea.value = formatted;
    
});


btnClear.addEventListener("click", () => {
    const clear = JSON.stringify(JSON.parse(inputArea.value) );

    inputArea.value = " ";
    outputArea.value = " ";
});