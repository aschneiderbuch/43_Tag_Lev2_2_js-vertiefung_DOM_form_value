console.log("test");

// werte in console schreiben

/*  
getElementById
.value
 */

const btn = document.querySelector(`input[type="submit"]`);
console.log(btn);

// button click
btn.addEventListener("click", werteZiehen )


// function
function werteZiehen() {
    console.log("in function werteZiehen");
    const vorNameValue = document.querySelector("#vorname").value;
    console.log(vorNameValue); // geht

    const nachNameValue = document.querySelector("#nachname").value;
    console.log(nachNameValue); // geht

    const selectValue = document.querySelector("#land").value;
    console.log(selectValue); // geht

    const ergebnis = `Vorname: ${vorNameValue} Nachname: ${nachNameValue} kommt aus dem Land:  ${selectValue}`;
    console.log(ergebnis); // geht
    document.querySelector("body").innerHTML += ergebnis;
}