let flag = "none";
text[1].style.display = "none";
text[2].style.display = "none";
text[3].style.display = "none";
operator.style.display = "none"
secondryConstant.style.display = "none";
primaryConstant.style.display = "none";
secondryRowObject.style.display = "none";
secondryColObject.style.display = "none";
primaryMat.style.display = "none"
secondryMat.style.display = "none"

// =========================== Modes selection =================== 

modes.addEventListener("click", (event) => {
    if (modes.value == "Addition") {
        operator.value = "+";
        text[0].style.display = "inline";
        text[1].style.display = "none";
        text[2].style.display = "none";
        text[3].style.display = "none";
        secondryRowObject.style.display = "none";
        secondryColObject.style.display = "none";
        flag = "Addition";
    }
    if (modes.value == "Subtraction") {
        operator.value = "-";
        text[0].style.display = "inline";
        text[1].style.display = "none";
        text[2].style.display = "none";
        text[3].style.display = "none";
        secondryRowObject.style.display = "none";
        secondryColObject.style.display = "none";
        flag = "Subtraction";
    }
    if (modes.value == "Multiplication") {
        operator.value = "x";
        text[0].style.display = "none";
        text[1].style.display = "inline";
        text[2].style.display = "inline";
        text[3].style.display = "inline";
        secondryRowObject.style.display = "inline";
        secondryColObject.style.display = "inline";
        flag = "Multiplication";

    }
    if (modes.value == "Determinant") {
        text[0].style.display = "inline";
        text[1].style.display = "none";
        text[2].style.display = "none";
        text[3].style.display = "none";
        operator.style.display = "none"
        secondryConstant.style.display = "none";
        primaryConstant.style.display = "none";
        secondryRowObject.style.display = "none";
        secondryColObject.style.display = "none";
        flag = "Determinant";
    }

})

// =========================== order complete =================== 
function primRowMove() {// run when keyup on p-row ip
    if (primaryRowObject.value.length == 1) {
        primaryColObject.focus();
    }
}
function primColMove() {// run when keyup on p-col ip
    if (modes.value == "Multiplication") {
        secondryColObject.focus();
        secondryRowObject.value = primaryColObject.value;
    } else {
        inputMat.focus();
    }
}

function secondRowMove() {// run when keyup on s-row ip
    if (primaryRowObject.value.length == 1) {
        secondryColObject.focus();
    }
}
function secondColMove() {// run when keyup on s-col ip
    if (primaryRowObject.value.length == 1) {
        inputMat.focus();
    }
}

primaryRowObject.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        primaryColObject.focus();
    }
});

primaryColObject.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        inputMat.focus();
    }

    if (primaryRowObject.value.length > 1 && primaryColObject.value.length > 1) {
        alert("Enter value is high")
    }

});
inputMat.addEventListener("click", (event) => {
    text[0].style.display = "inline";
    text[1].style.display = "none";
    text[2].style.display = "none";
    text[3].style.display = "none";
    operator.style.display = "inline"
    secondryConstant.style.display = "inline";
    primaryConstant.style.display = "inline";
    primaryMat.style.display = "inline";
    secondryMat.style.display = "inline";
})
