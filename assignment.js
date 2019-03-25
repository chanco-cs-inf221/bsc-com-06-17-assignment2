    

 /*function check_info(){

    var Project_name = document.getElementById('Pro').value;
    var Project_Details = document.getElementById('message').value;
    var Date = document.getElementById('dat').value;

    if(Project_name == "" || Project_Details == "" || Date == ""){
            alert('please fill in all fields')
            return false;
    }
    else{
            return true;
    }
           courseArray = JSON.parse(localStorage.getItem("Details") )
            || [];
            courseArray.push(Details);
            localStorage.setItem("Details",JSON.stringify(courseArray));
            courseArray = localStorage.getItem("Details");
            courseArray = JSON.parse(courseArray);

            for(i = 0; i < courseArray.length; i++){
                var row = Pro.insertRow(1);
                var cell1 = Pro.insertRow(0);
                var cell2 = Pro.insertRow(1);
                var cell3 = Pro.insertRow(2);
            
                cell1.innerHTML = courseArray[i].Project_name;
                cell2.innerHTML = courseArray[i].Project_Details;
                cell3.innerHTML = courseArray[i].Date;
            }
            window.location.reload(true);*/
/*
}
function clearData(){
var secretpassword = prompt(
 "you need a password to clear form", "password"
);
if(secretpassword == "password"){
 localStorage.clear();
 window.location.reload(true);
}
}
var ProjectArray = [];
window.onload = init;

function ClearData(){
    var secretpassword = prompt("you need a password to clear form", "password");
    if(secretpassword == "password"){
     localStorage.clear();
     window.location.reload(true);
    }
    }
*/

function localstorage() {
    var Details = {
        Project_name: document.getElementById("Pro").value,
        Project_Details: document.getElementById("message").value,
        Date: document.getElementById("dat").value
    };
    if (Details.Project_name !== "" && Details.Project_Details !== "" && Details.Date !== "") {
        DetailsArray = JSON.parse(localStorage.getItem("Details")) || [];
        DetailsArray.push(Details);
        localStorage.setItem("Details", JSON.stringify(DetailsArray));
        DetailsArray = localStorage.getItem("Details");
        DetailsArray = JSON.parse(DetailsArray);
        for (i = 0; i < DetailsArray.length; i++) {
            var row = ProjeD.insertRow(1);
            var cell1 = row.insertRow(0);
            var cell2 = row.insertRow(1);
            var cell3 = row.insertRow(2);
            cell1.innerHTML = DetailsArray[i].Project_name;
            cell2.innerHTML = DetailsArray[i].Project_Details;
            cell3.innerHTML = DetailsArray[i].Date;
        }
        window.location.reload(true);
    }
    
}

function getDetailsArray(){
      return JSON.parse(localStorage.getItem ("Details"));
} 

function init(){
    var DetailsArray  = getDetailsArray();

    for(i = 0; i < DetailsArray.length; i++){

     var Details = DetailsArray[i];
     createDetails(Details);
    }
}


    
    
































   function createDetails(Details){
       var table = document.getElementById("ProjeD ");
       var row = document.createElement("tr");  
       var cell1 = document.createElement("td");
       var cell2 = document.createElement("td");
       var cell3 = document.createElement("td");

       cell1.innerHTML = Details.Project_name;
       cell2.innerHTML = Details.Project_Details;
       cell3.innerHTML = Details.Date;

       row.appendChild(cell1);
       row.appendChild(cell2);
       row.appendChild(cell3);

       table.appendChild(row);

 
   function getDetailsArray(){
         return JSON.parse(localStorage.getItem ("Details"));
   } 
   
   function init(){
       var DetailsArray  = getDetailsArray();

       for(i = 0; i < DetailsArray.length; i++){

        var Details = DetailsArray[i];
        createDetails(Details);
       }
   }
}