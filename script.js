// Query selector and functions for number buttons
zero = document.querySelector('#zero')
zero.onclick = function() {
    addnumtodisp(0);
};

one = document.querySelector('#one')
one.onclick = function() {
    addnumtodisp(1);
};

two = document.querySelector('#two')
two.onclick = function() {
    addnumtodisp(2);
};

three = document.querySelector('#three')
three.onclick = function() {
    addnumtodisp(3);
};

four = document.querySelector('#four')
four.onclick = function() {
    addnumtodisp(4);
};

five = document.querySelector('#five')
five.onclick = function() {
    addnumtodisp(5);
};

six = document.querySelector('#six')
six.onclick = function() {
    addnumtodisp(6);
};

seven = document.querySelector('#seven')
seven.onclick = function() {
    addnumtodisp(7);
};

eight = document.querySelector('#eight')
eight.onclick = function() {
    addnumtodisp(8);
};

nine = document.querySelector('#nine')
nine.onclick = function() {
    addnumtodisp(9);
};

// Adding the clicked digit to display
function addnumtodisp(n) {
    disp = document.querySelector('#input');
    
    if (disp.textContent == '0' || disp.textContent == 0) {
        disp.textContent = '';
    }
    
    disp.textContent = disp.textContent + n;
    disp.value = disp.textContent;
}

// Clear all from display (AC)
allclear = document.querySelector('#allclear')
allclear.onclick = function() {
    clearall();
}
function clearall() {
    disp = document.querySelector('#input');
    disp.textContent = '';
    disp.value = disp.textContent;
    upper = document.querySelector('#upper');
    upper.innerHTML = '&nbsp;';

}

// Clear last digit from display (C)
clear = document.querySelector('#clear')
clear.onclick = function(){
    clearlast();
}
function clearlast(){

    disp = document.querySelector('#input')
    disp.textContent = disp.textContent.slice(0,-1)
    disp.value = disp.textContent
}

// Addition (+)
add = document.querySelector('#add')
add.onclick = function(){
    addition()
    movetoupper()
}
function addition(){
    disp = document.querySelector('#input')
    if( disp.value == '' || disp.value == 0){
        return 0;

    }
    disp.textContent = disp.textContent+'+'
    disp.value = disp.textContent
}

// Subtraction (-)
sub = document.querySelector('#sub')
sub.onclick = function(){
    subtraction()
    movetoupper()
}
function subtraction() {
    disp = document.querySelector('#input');
    if (disp.value == '' || disp.value == 0) {
        return 0;
    }
    disp.textContent = disp.textContent + '-';
    disp.value = disp.textContent;
}

// Multiplication (*)


multiply = document.querySelector('#multiply');
multiply.onclick = function() {
  multiplication();
  movetoupper();
};

function multiplication() {
  disp = document.querySelector('#input');

  if (disp.value == '' || disp.value == 0) {
    return 0;
  }

  disp.textContent = disp.textContent + '*';
  disp.value = disp.textContent;
}

function movetoupper(){
    disp = document.querySelector('#input')
    upper = document.querySelector('#upper')
    upper.textContent = disp.textContent;
    disp.textContent = '';
}

equalto = document.querySelector('#equalto');
equalto.onclick = function(){
    result = equal();
    upper = document.querySelector('#upper');
    upper.textContent = '';
    upper.innerHTML = '&nbsp;';
    input = document.querySelector('#input');
    input.textContent = result;
}

function equal(){
    upper = document.querySelector('#upper');
    input = document.querySelector('#input');
    operator = upper.textContent.slice(-1);
    Operand1 = upper.textContent.slice(0,-1);
    Operand2 = input.textContent;
    switch(operator){
        case '+':
            result = parseFloat(Operand1) + parseFloat(Operand2);
            return result;
            
        case '-':
            result = parseFloat(Operand1) - parseFloat(Operand2);
            return result;
            
        case '*':
            result = parseFloat(Operand1) * parseFloat(Operand2);
            return result;
            
        case '/':
            result = parseFloat(Operand1) / parseFloat(Operand2);
            return result;
    }
}
