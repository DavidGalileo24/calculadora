'use strict'

const inputInfo = document.getElementById('inputInfo');
const nums = document.getElementsByName('nums');
const ops = document.getElementsByName('ops');
const igual = document.getElementsByName('igual')[0];
const drop = document.getElementsByName('drop')[0];
let opToday = '';
let opNew = '';
let operationResult = undefined;


//Captura de números
let btnInfoNums = nums.forEach((btn) => {
    btn.addEventListener('click', function(){
        addNums(btn.innerText);        
    })
});

//Captura de operaciones
let btnOps = ops.forEach((btn) => {
    btn.addEventListener('click', function(){
        addOps(btn.innerText);
    })
});

 
//Captura de btn igual
igual.addEventListener('click', () => {
    result();
    updateInfo();
});


//Captura de btn igual
drop.addEventListener('click', () =>{
    clearInfo();
    updateInfo();
});


//Funcion que evalua la operacion
const addOps = (op) => {
    if(opToday === '') return false;
    if(opNew !== ''){
        result();
    }
    operationResult = op.toString();
    opNew = opToday;
    opToday = '';
}


//Funcion que realiza las operaciones
const result = () => {
    let resultCalc = 0;
    let anterior = parseFloat(opNew);
    let actual = parseFloat(opToday);
    if(isNaN(anterior) || isNaN(actual)) return;

    switch(operationResult){
        case '+':
            resultCalc = (anterior + actual);
            break;
            
        case '-':
            resultCalc = (anterior - actual);
            break;

        case 'x':
            resultCalc = (anterior * actual);
            break;
        case '/':
            resultCalc = (anterior / actual);
            break;
        default:
            return;
    }
    opToday = resultCalc;
    operationResult = undefined;
    opNew = '';
};

//Function de resultado de datos
const addNums = (num) => {
    opToday = opToday.toString() + num.toString();
    updateInfo();
}

const updateInfo = () => {
    inputInfo.value = opToday;
}

const clearInfo = () => {
    opToday = '';
    opNew = '';
    operationResult = undefined;
}
clearInfo();



