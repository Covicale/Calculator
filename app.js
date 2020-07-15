const currentText = document.getElementById('currentText');
const beforeText = document.getElementById("beforeText");

let resultado = 0;
let lastOp = "";
let equaled = false;

function addNum(number){

    if (number == '.'){
        if (!currentText.textContent.includes('.')){
            currentText.innerHTML += '.';
        }
    }

    else if (currentText.textContent == '0' || equaled == true){
        equaled = false;
        currentText.innerHTML = number;
    }
    else{
        currentText.innerHTML += number;
    }
};


function getNumber(lastOp, currNum, resultado){
    if (lastOp == "") return currNum;
    else{
        switch(lastOp){
            case "+":
                return resultado + currNum;

            case "-":
                return resultado - currNum;

            case "/":
                return resultado / currNum;

            case "*":
                return resultado * currNum;

        }
    }
}

function operator(op){

    let stringDel = currentText.textContent.substr(0, currentText.textContent.length - 1);
    
    let currNum = parseFloat(currentText.textContent);

    switch(op){

        case "clear":
            currentText.innerHTML = "0";
            beforeText.innerHTML = "0";
            resultado = 0;
            currNum = 0;
            break;
        
        case "del":
            if (currentText.textContent.length > 1){
                currentText.innerHTML = stringDel;
            }else{
                currentText.innerHTML = "0";
            }
            break;

        case "add":
            
            resultado = getNumber(lastOp, currNum, resultado);
            lastOp = "+";
            beforeText.innerHTML = resultado + " " + lastOp;
            currentText.innerHTML = "0";
     
            break;

        case "mult":
            
            resultado = getNumber(lastOp, currNum, resultado);
            lastOp = "*";
            beforeText.innerHTML = resultado + " " + lastOp;
            currentText.innerHTML = "0";
     
            break;

        case "div":
            
            resultado = getNumber(lastOp, currNum, resultado);
            lastOp = "/";
            beforeText.innerHTML = resultado + " " + lastOp;
            currentText.innerHTML = "0";
     
            break;

        case "minus":
            
            resultado = getNumber(lastOp, currNum, resultado);
            lastOp = "-";
            beforeText.innerHTML = resultado + " " + lastOp;
            currentText.innerHTML = "0";
     
            break;

        case "equal":
            
            resultado = getNumber(lastOp, currNum, resultado)
            lastOp = "";
            beforeText.innerHTML = "0";
            currentText.innerHTML = resultado.toFixed(3).toString();
            equaled = true;

            break;
    }

}
