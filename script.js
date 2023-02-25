let tableData = [];
let addRow = document.querySelector(".createRow");
let tbl = document.querySelector("tbody");
let id = 1;

function addElement() {
    // alert("Action");
    let tr = document.createElement("tr");

    
     // create input fields for each cell in the row


    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));
    let td6 = tr.appendChild(document.createElement('td'));
    let td7 = tr.appendChild(document.createElement('td'));

    let btn = document.createElement("button")
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    btn.style.padding = '5px'
    btn.innerText = "save";

    let inp2 = document.createElement("input")
    inp2.type = 'text'
    inp2.required = 'true'

    inp2.classList.add('adjust')

    let inp3 = document.createElement("input")
    inp3.type = 'text'
    inp3.required = 'true'
    inp3.classList.add('adjust')

    let inp4 = document.createElement("input")
    inp4.type = 'text'
    inp4.required = 'true'
    inp4.classList.add('adjust')

    let inp5 = document.createElement("input")
    inp5.type = 'number'
    inp5.required = 'true'
    inp5.classList.add('adjust')

    let inp6 = document.createElement("input")
    inp6.type = 'email'
    inp6.classList.add('adjust')
    
    // function updateTableData() {
    //     const tbody = document.querySelector("#myTable tbody");
    //     const rows = Array.from(tbody.querySelectorAll("tr"));
    //     tableData = rows.map(row => {
    //       return {


    //         id: parseInt(row.querySelector("td:first-child").textContent),
    //         student_name: row.querySelector("td:nth-child(2) input").value,
    //         student_roll: row.querySelector("td:nth-child(3) input").value,
    //         subject: row.querySelector("td:nth-child(4) input").value,

    
    //         marks: row.querySelector("td:nth-child(5) input").value,
    //         markedBy: row.querySelector("td:nth-child(6) input").value
    //       };
    //     });


     // append the input fields to the cells

    td1.innerHTML = id;
    td2.appendChild(inp2)
    td3.appendChild(inp3)
    td4.appendChild(inp4)
    td5.appendChild(inp5)
    td6.appendChild(inp6)
    td7.appendChild(btn)

    tbl.append(tr);

    id++


    // Define a function to generate a unique ID for each row

    function saveOPtion() {

        if (inp2.value == "" || inp3.value == "" || inp4.value == "" || inp5.value == "" || inp6.value == "") {
            alert("Please fill in all fields before saving.")
        } else if (inp6.value.includes("@") == false) {
            alert("Please Enter valid Emailid")
        } else {
            inp2.readOnly = 'true'
            inp3.readOnly = 'true'
            inp4.readOnly = 'true'
            inp5.readOnly = 'true'
            inp6.readOnly = 'true'

            let obj = { id: td1.innerText, student_name: inp2.value, student_roll: inp3.value, subject: inp4.value, marks: inp5.value, markedBy: inp6.value };

            tableData.push(obj);
            console.log("new row :", obj);

            console.log("tableData array :", tableData);

            td7.innerHTML = null

        }


    }
    btn.addEventListener('click', saveOPtion)

}
addRow.addEventListener("click", addElement);