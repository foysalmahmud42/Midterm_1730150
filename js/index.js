document.getElementById('para1').innerText = text;

function process ()
{
    var name = document.getElementById('Name').value;
    var age = document.getElementById('Age').value;
    var salary = document.getElementById('MonthlySalary').value;
    //var total = (mid*.40) + parseInt(final);
    var totalSalary = salary*12;
    
    if(age > 25 && age<= 30 && totalSalary >= 100000){
        var percentage = (salary/100) * 20;
        h1.innerText = "Bonus Update";
        h3.innerText = name;
        p1.innerText = "Your Total Yearly Bonus amount is " + percentage*12;
    }
    else if(age > 30 && age<= 35 && totalSalary >= 200000){
        var percentage = (salary/100) * 30;
        h1.innerText = "Bonus Update";
        h3.innerText = name;
        p1.innerText = "Your Total Yearly Bonus amount is " + percentage*12;
    }
    else if(age > 35 && totalSalary >= 300000){
        var percentage = (salary/100) * 40;
        h1.innerText = "Bonus Update";
        h3.innerText = name;
        p1.innerText = "Your Total Yearly Bonus amount is " + percentage*12;
    }
    else{
        h1.innerText = "Bonus Update";
        h3.innerText = name;
        p1.innerText = "Sorry You are not eligible for bonus";
    }

    document.getElementById('Name').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('MonthlySalary').value = "";

}