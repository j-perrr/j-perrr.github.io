//part A
let farenheit = function (celsius) 
{
    farenheit = (celsius*1.8) + 32;

    return (`${celcius}°C is ${farenheit}°F`);
} 

let celsius = function (farenheit)
{
    celsius = (farenheit - 32) * 5/9;

    return (`${farenheit}°F is ${celcius}°C`);
}

//part B
 function bmi(height, weight)
{
  let  bmi = (weight / (height * height))*703;
    return bmi;
}

let bmiLucas = bmi(68,180);
console.log(bmiLucas)

let bmiJohn = bmi(69, 150);
console.log(bmiJohn);

bmiJohn > bmiLucas ? 
console.log(`John's BMI (${bmiJohn}), is higher than Lucas' BMI (${bmiLucas})`): 
console.log(`Lucas' BMI (${bmiLucas}), is higher than John's BMI (${bmiJohn})`);

console.log(typeof(5));

//part C
let guessed = false;
while(guessed !== true)
{
    let guess= Number(prompt('Please enter a number!'));
    if(typeof(guess) !== typeof(1))
    {
        console.log('PLEASE ENTER ONLY A NUMBER');
    }
    switch(guess)
    {
        case 10:
           console.log('You win 10 point');
           alert('You win 10 point');
           guessed = true;
           break;
        case 8:
            console.log('You win 8 points');
            alert('You win 8 points');
            guessed = true;
            break;
        default:
            console.log('NOT MATCHED!!');
            alert('NOT MATCHED!!');
            break;


    }  
}

