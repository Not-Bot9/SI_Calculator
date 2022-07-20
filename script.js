function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result= document.getElementById("result");

    var interest=principal*years*rate/100; // Calculation of interest rates

    var actualYear=2022+parseFloat(years); // Calculates actual year

    if(principal<=0){ // Alert condition
        alert("Enter a positive number");
        setTimeout(function() { // Enables focusing principal input area after alert
            document.getElementById("principal").focus();
        }, 0);
    }
    else{ // Calculation report
        result.innerHTML=
        `
        If you deposit <mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}</mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${actualYear}</mark>
        `
    }
}