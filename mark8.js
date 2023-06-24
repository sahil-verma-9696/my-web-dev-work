// =================   creating obects globaly =============
let primaryRowObject = document.querySelector("#p-row");
let primaryColObject = document.querySelector("#p-column");
let secondryRowObject = document.querySelector("#s-row");
let secondryColObject = document.querySelector("#s-column");
let primaryMat = document.querySelector("#primaryMat");
let secondryMat = document.querySelector("#secondryMat");
let answerMatObj = document.querySelector("#answerMat");
let modes = document.querySelector("#mode");
let operator = document.querySelector("#operator");
let text = document.querySelectorAll(".secMat-text");
let primaryConstant = document.querySelector("#p-constant");
let secondryConstant = document.querySelector("#s-constant");
let inputMat = document.querySelector("#inputMat");



// =========================== inputMatForm =================== 
function inputMatForm() {

    // =========================== parsing value =================== 

    let row = parseInt(primaryRowObject.value);
    let col = parseInt(primaryColObject.value);

    let secondryRow = parseInt(secondryRowObject.value);
    let secondryCol = parseInt(secondryColObject.value);

    // =============== input forgot case =================== 
    if (!row) {
        row = 1;
    }
    if (!col) {
        col = 1;
    }

    // feeding matrix in primary mat
    for (let i = 0; i < row; i++) {

        for (let j = 0; j < col; j++) {

            // creating new Matrix for input 
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = 0;

            // assigning class to new matrix
            newMat.classList = 'p-row-col_' + i + "" + j;
            primaryMat.appendChild(newMat);
        }

        // adding break line tag
        let br = document.createElement("br");
        primaryMat.appendChild(br);

    }

    // feeding matrix in secondry mat
    let m = row;
    let n = col;

    if (modes.value == "Multiplication") {
        m = secondryRow;
        n = secondryCol;
    }
    if (modes.value == "Determinant") {
        m = 0;
        n = 0;
    }
    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            // creating new Matrix for input 
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = 0;

            // assigning class to new matrix
            newMat.classList = 's-row-col_' + i + "" + j;
            secondryMat.appendChild(newMat);
        }

        // adding break line tag
        let br = document.createElement("br");
        secondryMat.appendChild(br);

    }

}

// =========================== answer =================== 
function answer() {
    console.log("answer funciton execute")
    // =========================== parsing value =================== 
    let row = parseInt(primaryRowObject.value);
    let col = parseInt(primaryColObject.value);
    let pConstant = parseInt(document.querySelector("#p-constant").value);
    let sConstant = parseInt(document.querySelector("#s-constant").value);

    let resultNul = new Array(row);
    let a = new Array(row);
    let b = new Array(row);
    for (let i = 0; i < row; i++) {

        resultNul[i] = new Array(col);
        a[i] = new Array(col);
        b[i] = new Array(col);

    }

    if (modes.value == "Addition") {
        addition()
    }
    if (modes.value == "Subtraction") {
        subtraction()
    }

    if (modes.value == "Multiplication") {
        multiplication()
    }

}

// ===================== Matrix Operation functions  ===================
function multiplication() {
    console.log("multiplication function executing");
    // =========================== parsing value =================== 
    let row = parseInt(primaryRowObject.value);
    let col = parseInt(primaryColObject.value);

    //let secondryRow = parseInt(secondryRowObject.value);
    let secondryCol = parseInt(secondryColObject.value);

    let pConstant = parseInt(document.querySelector("#p-constant").value);
    let sConstant = parseInt(document.querySelector("#s-constant").value);

    let resultNul = new Array(row);
    let a = new Array(row);
    let b = new Array(row);
    for (let i = 0; i < row; i++) {

        resultNul[i] = new Array(secondryCol);
        a[i] = new Array(col);
        b[i] = new Array(secondryCol);

    }

    // =============== input forgot case =================== 
    if (!row) {
        row = 1;
    }
    if (!col) {
        col = 1;
    }
    if (!sConstant) {
        sConstant = 1;
    }
    if (!pConstant) {
        pConstant = 1;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            //variable matrix feed by user input
            a[i][j] = parseInt(document.querySelector(".p-row-col_" + i + "" + j).value);
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < secondryCol; j++) {
            //variable matrix feed by user inpuut
            b[i][j] = parseInt(document.querySelector(".s-row-col_" + i + "" + j).value);
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < secondryCol; j++) {
            let x = 0;
            for (let k = 0; k < col; k++) {
                x += ((pConstant * a[i][k]) * (sConstant * b[k][j]))
            }
            resultNul[i][j] = x;
            //console.log(x);
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = resultNul[i][j];

            // assigning class to new matrix
            newMat.classList = 'ans-row-col_' + i + "" + j;
            answerMatObj.appendChild(newMat);

        }
        // adding break line tag
        let br = document.createElement("br");
        answerMatObj.appendChild(br);
    }
}
function addition() {
    console.log("addition function executing");
    // =========================== parsing value =================== 
    let row = parseInt(primaryRowObject.value);
    let col = parseInt(primaryColObject.value);
    let pConstant = parseInt(document.querySelector("#p-constant").value);
    let sConstant = parseInt(document.querySelector("#s-constant").value);

    let resultNul = new Array(row);
    let a = new Array(row);
    let b = new Array(row);
    for (let i = 0; i < row; i++) {

        resultNul[i] = new Array(col);
        a[i] = new Array(col);
        b[i] = new Array(col);

    }
    // =============== input forgot case =================== 

    if (!row) {
        row = 1;
    }
    if (!col) {
        col = 1;
    }
    if (!sConstant) {
        sConstant = 1;
    }
    if (!pConstant) {
        pConstant = 1;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            // calculating result
            a[i][j] = parseInt(document.querySelector(".p-row-col_" + i + "" + j).value);
            b[i][j] = parseInt(document.querySelector(".s-row-col_" + i + "" + j).value);

            // console.log("concept part")
            resultNul[i][j] = (pConstant * a[i][j]) + (sConstant * b[i][j]);

            // feeding result in answerMat
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = resultNul[i][j];

            // assigning class to new matrix
            newMat.classList = 'ans-row-col_' + i + "" + j;
            answerMatObj.appendChild(newMat);

        }
        // adding break line tag
        let br = document.createElement("br");
        answerMatObj.appendChild(br);
    }
}
function subtraction() {
    console.log("subtraction function executing");
    // =========================== parsing value =================== 
    let row = parseInt(primaryRowObject.value);
    let col = parseInt(primaryColObject.value);
    let pConstant = parseInt(document.querySelector("#p-constant").value);
    let sConstant = parseInt(document.querySelector("#s-constant").value);

    let resultNul = new Array(row);
    let a = new Array(row);
    let b = new Array(row);
    for (let i = 0; i < row; i++) {

        resultNul[i] = new Array(col);
        a[i] = new Array(col);
        b[i] = new Array(col);

    }

    // =============== input forgot case =================== 
    if (!row) {
        row = 1;
    }
    if (!col) {
        col = 1;
    }
    if (!sConstant) {
        sConstant = 1;
    }
    if (!pConstant) {
        pConstant = 1;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            // calculating result
            a[i][j] = parseInt(document.querySelector(".p-row-col_" + i + "" + j).value);
            b[i][j] = parseInt(document.querySelector(".s-row-col_" + i + "" + j).value);

            // console.log("concept part")
            resultNul[i][j] = (pConstant * a[i][j]) - (sConstant * b[i][j]);

            // feeding result in answerMat
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = resultNul[i][j];

            // assigning class to new matrix
            newMat.classList = 'ans-row-col_' + i + "" + j;
            answerMatObj.appendChild(newMat);

        }
        // adding break line tag
        let br = document.createElement("br");
        answerMatObj.appendChild(br);
    }
}
function determinant(){

}
