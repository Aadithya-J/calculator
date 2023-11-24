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

// Clear all from displat (AC)
allclear = document.querySelector('#allclear')
function clearall() {
    disp = document.querySelector('#input');
    disp.textContent = '0';
    disp.value = disp.textContent;
}