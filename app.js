function getDetail(){
    let english = document.querySelector("#english").value;
    let hindi = document.querySelector("#hindi").value;
    let physics = document.querySelector("#physics").value;
    let chemistry = document.querySelector("#chemistry").value;
    let maths = document.querySelector("#maths").value;

    return {english, hindi, physics, chemistry, maths}
}

function show() {
    let {english, hindi, physics, chemistry, maths} = getDetail();
    let total = Number(english) + Number(hindi) + Number(physics) + Number(chemistry) + Number(maths);
    let grade = (total*100)/500;

    if(90< grade && grade<=100){
    alert("your grade is A+")    
    }
    else if(80<grade && grade<=90){
    alert("Your grade is A")
    }
    else if(70<grade && grade<=80){
    alert("Your grade is B+")
    }
    else if (60<grade && grade<=70){
        alert("Your grade is B")
    }
    else if(50<grade && grade<=60){
        alert ("Your grade is C")
    }
    else if(33<grade && grade<=50){
        alert ("your grade is D")
    }
    else{
        alert("you are fail")
    }
}


let submit = document.querySelector("#submit");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    show();
});


