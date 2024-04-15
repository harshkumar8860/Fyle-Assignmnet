let submitButton = document.getElementById("Submit");
let popup = document.getElementById('popup');
let ansVar = document.getElementById('answer');
submitButton.addEventListener('click', function () {


    // get grossincome
    const grossInput = document.getElementById("grossIncome").value;
    //get extraincome
    const getExtraIncome = document.getElementById("extraIncome").value;
    // get applicable
    const getApplicableDeductions = document.getElementById("applicableDeductions").value;
    // get age   
    const getAge = document.getElementById("selectAge");
    const getIndex = getAge.selectedIndex;
    const getOption = getAge.options[getIndex];
    const getValue = Number(getOption.value);

    if (grossInput === "") {
        alert("Please Enter Gross Income");
        return;
    }

    if (getValue === 0) {
        alert("Please Select Age Group");
        return;
    }

    // console.log(grossInput);
    // console.log(getExtraIncome);
    // console.log(getValue);
    // console.log(getApplicableDeductions);

    let tax;
    let allIncome = (Number(grossInput) + Number(getExtraIncome) - Number(getApplicableDeductions));
    let afterTax;
    console.log(allIncome);

    // calculation
    if (allIncome <= 800000) {
        afterTax = allIncome;
        console.log(afterTax);
    } else {
        if (Number(getValue) === 1) {
            tax = 0.3 * (allIncome - 800000);
            // afterTax = allIncome - tax;
            // console.log(afterTax);
        } else if (Number(getValue) === 2) {
            tax = 0.4 * (allIncome - 800000);
            // afterTax = allIncome - tax;
            // console.log(afterTax);
        } else if (Number(getValue) === 3) {
            tax = 0.1 * (allIncome - 800000);
            // afterTax = allIncome - tax;
            // console.log(afterTax);
        }
        console.log(tax);
        afterTax = allIncome - tax;
        console.log(afterTax);
    }

    // poping up the div container after clicking submit button
    console.log('vishal');
    popup.style.visibility = 'visible';
    ansVar.innerHTML = `${afterTax}`;
})


//closing popup div and clearing input fields
let close = document.getElementById('close');
let firstInput = document.getElementById('grossIncome');
let secondInput = document.getElementById('extraIncome');
let thirdInput = document.getElementById('applicableDeductions')
let ageGroup = document.getElementById('selectAge')
close.addEventListener('click', function () {
    console.log(firstInput);
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";
    ageGroup.value = "";
    popup.style.visibility = 'hidden';
})



// // allowing only numbers
// let grossIncomeInput = document.getElementById('grossIncome');
// var tooltip = document.querySelector('.numbersonly');
// let secondNumberInput = document.getElementById('extraIncome');
// let thirdNumberInput = document.getElementById('applicableDeductions');

// grossIncomeInput.addEventListener('input',function(){
//     const inputValue = this.value.trim();
//     const numbersOnly = /^\d+$/;

//     if (!numbersOnly.test(inputValue)) {
//         tooltip.style.visibility = 'visible';
//     }else{
//         tooltip.style.visibility = 'hidden';
//     }
// })



// let firstNumberInput = document.getElementsByClassName('text');
// let tooltip = document.getElementsByClassName('numbersonly');

// firstNumberInput.addEventListener('input', function () {
//     let inputValue = this.value.trim();
//     let numbersOnly = /^\d+$/;

//     if (!numbersOnly.test(inputValue)) {
//         tooltip.classList.add('show');
//     } else {
//         tooltip.classList.remove('show');
//     }
// })




// var tooltip = document.querySelector('.numbersonly');


let textInputs = document.querySelectorAll('.input');
var tooltips = document.querySelectorAll('.numbersonly');
// let secondNumberInput = document.getElementById('extraIncome');
// let thirdNumberInput = document.getElementById('applicableDeductions');

textInputs.forEach((input,index) =>{

    input.addEventListener('input',function(){
        var inputValue = this.value.trim();
        var numbersOnly = /^\d+$/;
        
        if (!numbersOnly.test(inputValue)) {
            tooltips[index].style.visibility = 'visible';
        }else{
            tooltips[index].style.visibility = 'hidden';
        }
    });
    
});

