//A
function randomNumber(min, max) 
{ 
    return Math.floor(Math.random() * (max - min) + min);
} 
function average (arr)
{
    let average = 0;

    for(let i = 0; i < 3; i++)
    {
        arr[i] = randomNumber(90,120);
    }
    for(let i = 0; i < 3; i++)
    {
        average = average + arr[i];
    }
    average = average/3;
    return Math.floor(average);
}

let scoreKnicks = [];
avgKnicks = average(scoreKnicks);
let scoreNets = [];
avgNets = average(scoreNets);

console.log(avgKnicks, avgNets)


let winner = () =>
{
    if( avgKnicks > avgNets && avgKnicks >= 100)
    {
        console.log('Knicks win the trophy!!!!');
    } else if( avgNets > avgKnicks && avgNets > 100)
    {
        console.log('Nets win the trophy!!!!');
    }else if (avgNets === avgKnicks && avgKnicks > 100 && avgNets > 100)
    {
        console.log('it is a draw!!!');
    }else{
        console.log('no team wins the trophy');
    } 
}

winner();

//B

tipCalculator= (cost) => {
    let totalBill = 0;
    cost < 30 || cost > 100 ? totalBill = (cost * .20)+cost : totalBill = (cost*.15)+cost;
    let billString = `The bill was ${cost}, `
    let endOfString =  `the tip was ${totalBill - cost}, and the total ${totalBill}`
    console.log(billString+endOfString);
} 
tipCalculator(20);
tipCalculator(100)
tipCalculator(275)
//C

let ConvertCelsiusToFarenheit = (celsius) => 
{
    farenheit = Math.floor((celsius*1.8) + 32);

    console.log((`${celsius}°C is ${farenheit}°F`));
} 

let ConvertFarenheitToCelsius = (farenheit) =>
{
    celsius = Math.floor((farenheit - 32) * 5/9);

    console.log((`${farenheit}°F is ${celsius}°C`));
}

ConvertCelsiusToFarenheit(100);
ConvertCelsiusToFarenheit(0)
ConvertCelsiusToFarenheit(10)

ConvertFarenheitToCelsius(32)
ConvertFarenheitToCelsius(10)
ConvertFarenheitToCelsius(102)