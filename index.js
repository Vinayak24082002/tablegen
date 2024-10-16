function generateTable(){
    let rows=prompt("Enter the number of rows");
    let columns=prompt("Enter the number of columns");
    const tableContainer = document.getElementById("tableContainer");
    
    const table=document.createElement("table");
    table.style.border = "1px solid red";  
    
   
    for(let i=0;i<rows;i++){
        const tr= document.createElement("tr");
        tr.style.border="3px solid black";

        for(let j=0;j<columns;j++){
            const td=document.createElement("td");

            
            td.textContent="Explorin";
            td.style.border="2px  solid gray";
            td.style.padding="4px";
            tr.appendChild(td);
           
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);

    document.getElementById('btnn').onclick =  function() {
        location.reload(); 
    };
   


}
