//
function myFunction(id) {
    document.skaiciuoti.rezultatas.reiksme+=id;
}

//
function clearScreen() {
    document.skaiciuoti.rezultatas.reiksme="";
}

//
function calculate() {
    try {
        var input = eval(document.skaiciuoti.rezultatas.reiksme);
        document.skaiciuoti.rezultatas.reiksme=input;
    } catch(err){
        document.skaiciuoti.rezultatas.reiksme="Error";
    }
}