function function1() {
    let x = document.querySelector(".new");
    //this for clearing dom before running function
    x.innerHTML = "";
    //taking no of matrix for input
    let numberOfMatrix = document.getElementById("noOfMatrices").value;
    //for taking order input of matricex
    for (let i = 0; i < parseInt(numberOfMatrix); i++) {
        
        let text = document.createTextNode("enter the order of matrix "+(i+1)+" m x n");
        let r = document.createElement("p");
        r.appendChild(text);
        x.appendChild(r);
        x.appendChild(document.createElement("input"));
        x.appendChild(document.createElement("input"));
    }
}