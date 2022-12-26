const currencyone = document.querySelector("#currency-one")
const amountone = document.querySelector("#amount-one")
const currencytwo = document.querySelector("#currency-two")
const amounttwo = document.querySelector("#amount-two")
const rate = document.querySelector("#rate")
const swap = document.querySelector("#swap")

async function calculate(){
    const currencyElone = currencyone.value;
    const currencyEltwo = currencytwo.value;

    console.log(currencyElone,currencyEltwo);
    
    try{
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyElone}`)
    
    const data = await response.json();
    const rateEl = data.rates[currencyEltwo];
    rate.innerHTML = `1 ${currencyElone} = ${rateEl} ${currencyEltwo}`

    amounttwo.value = (amountone.value * rateEl).toFixed(2)  //33.35345 = 34.43
    }

    catch(error){
        console.log(error);
    }

}
calculate()

currencyone.addEventListener("change",calculate);
currencytwo.addEventListener("change",calculate);
amountone.addEventListener("input",calculate);
amounttwo.addEventListener("input",calculate);

swap.addEventListener("click",()=>{
    const temp = currencyone.value
    currencyone.value = currencytwo.value
    currencytwo.value = temp
    calculate()
})