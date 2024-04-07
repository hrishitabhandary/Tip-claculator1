const totalBillAmount = `25`;
const percentageTip = `5`;

function calculateTip(totalBillAmount,percentageTip){
    const tipAmount = (totalBillAmount)*(percentageTip/100);
    return parseFloat(tipAmount).toFixed(1);
    }
const button = document.querySelector('button');
button.addEventListener('click',()=>{
const finalTipAmount = calculateTip(totalBillAmount,percentageTip);
const tipAmountDisplay = document.querySelector('#tipAmount');
tipAmountDisplay.textContent = `The total tip amount is $${finalTipAmount}`;
});