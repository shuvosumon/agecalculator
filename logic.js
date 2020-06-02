
// Calculating the difference of two dates
function calculateDiff(){
    
    var date01 = document.getElementById('birthdate').value;   
    var date02 = document.getElementById('currentdate').value;
     
    var dateOfBirth = new Date(date01);
    var dateCurrent = new Date(date02);

    var diff = new Date(dateCurrent.getTime() - dateOfBirth.getTime());
    
    var output = document.getElementById('showAge');
    output.id = "showAge";
    
    output.innerHTML = "Age: "+"<br><br>" + Number(diff.getUTCFullYear() - 1970) +  " Years " +"<br>"+ 
     diff.getUTCMonth() + " Months " + "<br>" + Number(diff.getUTCDate() - 1) + " Days";
   
   
} 


function showTheMaker(){
    var appMaker = document.getElementById('ShowTheMaker');
    appMaker.innerHTML = "<p>Mady by <a href='https://shuvongkor-barman.github.io'>Shuvongkor</a><p>";
}
