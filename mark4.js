// =================   creating obects globaly =============
let robj = document.querySelector("#row");
let cobj = document.querySelector("#column");
let primary = document.querySelector("#primaryMat");
let secondry = document.querySelector("#secondryMat");
let answerMatObj = document.querySelector("#answerMat");
let modes = document.querySelector("#mode");
let operator =  document.querySelector("#operator");
let operatorDiv =  document.querySelector("#operator-div");

// =========================== Modes selection =================== 

modes.addEventListener("click",()=>{
    if(modes.value == "Addition"){
        operator.value = "+";
    }
    if(modes.value == "Subtraction"){
        operator.value = "-";
    }
    if(modes.value == "Multiplication"){
        operator.value = "x";
    }
})

// =========================== order complete =================== 
function rmove() {
    if (robj.value.length == 1) {
        cobj.focus();
    }
}
function cmove() {
    if (robj.value.length == 1) {
        inputMat.focus();
    }
}

robj.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        cobj.focus();
    }
});

cobj.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        inputMat.focus();
    }

    if (robj.value.length > 1 && cobj.value.length > 1) {
        alert("Enter value is high")
    }

});


// =========================== inputMatForm =================== 

function inputMatForm() {

    // =========================== parsing value =================== 

    let row = parseInt(robj.value);
    let col = parseInt(cobj.value);

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
            primary.appendChild(newMat);
        }

        // adding break line tag
        let br = document.createElement("br");
        primary.appendChild(br);

    }

    // feeding matrix in primary mat
    for (let i = 0; i < row; i++) {

        for (let j = 0; j < col; j++) {

            // creating new Matrix for input 
            let newMat = document.createElement("input");
            newMat.type = 'number';
            newMat.value = 0;

            // assigning class to new matrix
            newMat.classList = 's-row-col_' + i + "" + j;
            secondry.appendChild(newMat);
        }

        // adding break line tag
        let br = document.createElement("br");
        secondry.appendChild(br);

    }

}

// =========================== answer =================== 
function answer() {

    // =========================== parsing value =================== 
    let row = parseInt(robj.value);
    let col = parseInt(cobj.value);
    let pConstant = parseInt(document.querySelector("#p-constant").value);
    let sConstant = parseInt(document.querySelector("#s-constant").value);



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

    let resultNul = new Array(row);
    let a = new Array(row);
    let b = new Array(row);
    for (let i = 0; i < row; i++) {

        resultNul[i] = new Array(col);
        a[i] = new Array(col);
        b[i] = new Array(col);

    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            // calculating result
            a[i][j] = parseInt(document.querySelector(".p-row-col_" + i + "" + j).value);
            b[i][j] = parseInt(document.querySelector(".s-row-col_" + i + "" + j).value);

            // for additon mode 
            if (modes.value == "Addition") {
                resultNul[i][j] = (pConstant * a[i][j]) + (sConstant * b[i][j]);
            }
            // for subtraciton mode
            if (modes.value == "Subtraction") {
                resultNul[i][j] = (pConstant * a[i][j]) - (sConstant * b[i][j]);
            }
            

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
    
    
    //multiplication
    if (modes.value == "Multiplication"){
    
    for(let i=0; i<row; i++){
    
        for(let j=0; j<row; j++){
            let x =0;
            for(let k=0; k<col; k++){
                x+=(a[i][k]*b[k][j])
            }
            resultNul[i][j] =x;
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
  
}
