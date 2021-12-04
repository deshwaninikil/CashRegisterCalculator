
var calculateButton = document.querySelector("#calc-btn")
calculateButton.addEventListener("click", calculateNotes)

var nextButton= document.querySelector("#next-btn")
nextButton.addEventListener("click",nextButtonHandler)

var bill= document.getElementById("bill-input");
var cash = document.getElementById("cash-input");
var message = document.getElementById("text-message");

function nextButtonHandler(){
    var billInput = parseInt(bill.value);
    if(Number.isInteger(billInput) && billInput>0){
      const cashGiven=document.querySelector(".cashGiven")
       cashGiven.style.display='block';
       message.innerHTML=""
       nextButton.style.display='none';
    }
    else{
        message.innerHTML="Please enter valid bill value"
        cashGiven.style.display='none';
    }
}

const notes = [2000, 500, 100, 20, 10, 5, 1];
var noteList = {};

var cashtable = document.getElementById("cashTable");

function calculateNotes() {
    var billInput = parseInt(bill.value);
    // console.log("billInput" + billInput)

    var cashInput = parseInt(cash.value);
    // console.log("cashInput" + cashInput)

    var returnAmount = cashInput - billInput
    // console.log("returnAmount" + returnAmount)

    var text;
    var message = document.getElementById("text-message");

    cashtable.innerHTML="";  // emptying the table everytime calculate button is clicked

    if ( !(Number.isInteger(billInput)) || !(Number.isInteger(cashInput))) {
        text = "Please enter the valid bill amount & cash given by customer."
        message.innerHTML = text;
        
    }

    else if(returnAmount < 0 ){
        text = "Cash is less than bill, please enter right amount."
        message.innerHTML = text;
    }

    else if (returnAmount == 0) {
        text = "Nothing to be returned as customer has paid the compelete amount!"
        message.innerHTML = text;
       
    }
    else {
        text = "Rs." + returnAmount + " to be paid to customer"
        message.innerHTML = text;
      
        var count;

        for (let i = 0; i < notes.length; i++) {
            if (returnAmount / notes[i] >= 1) {
                count = Math.floor(returnAmount / notes[i])
                returnAmount = returnAmount % notes[i]
                noteList[notes[i]] = count;
            }
        }

        // for (var i in noteList) {
        //     console.log(i + ":" + noteList[i])
        // }

        displayCashTable();
    }


}

//Code to display the notes table 
function displayCashTable() {
    var x;
  
    var tbl = document.createElement("table");
    tbl.setAttribute("border", "2");

    var row = document.createElement("tr");

    var th1 = document.createElement("th");

    x = document.createTextNode("Notes")
    th1.appendChild(x);
    row.appendChild(th1)

    var th2 = document.createElement("th");
    x = document.createTextNode("No. of Notes")
    th2.appendChild(x);
    row.appendChild(th2)

    tbl.appendChild(row)

    //creating all the columns for notes
    for (var i in noteList) {
        var row = document.createElement("tr");

        var col1 = document.createElement("td");
        x = document.createTextNode(i)
        col1.appendChild(x)
        row.appendChild(col1)

        var col2 = document.createElement("td");
        x = document.createTextNode(noteList[i])
        col2.appendChild(x)
        row.appendChild(col2)

        tbl.appendChild(row)

    }
    cashtable.appendChild(tbl)

}