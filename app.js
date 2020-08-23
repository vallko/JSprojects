var rowNum = 1;
var name1 = document.createElement("textarea");
name1.setAttribute("type", "text");

var age = document.createElement('textarea');
age.setAttribute("type", "text");


var optionsButton = document.createElement('button');
optionsButton.innerText = 'Опции';
document.getElementById('dropDownButton').appendChild(optionsButton);
document.getElementById('dropDownButton').innerText = optionsButton.outerHTML;

var imgForm = document.createElement('INPUT')
imgForm.setAttribute("type", "file"); 

function addRow(){

    var table = document.getElementById( 'tablica' );
    row = table.insertRow(rowNum);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);

    cell1.innerHTML = rowNum;
    cell2.appendChild(name1);
    cell3.appendChild(age);
    cell4.appendChild(imgForm);
    cell5.appendChild(optionsButton);
    rowNum++;
}

document.getElementById("save").addEventListener("click", function Save ()
    {
        var user = document.getElementById("name1").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("user", user) ;
        alert("Запазено") ;
        console.log("Запазено")
    } , true);