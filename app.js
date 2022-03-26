document.querySelector('#tip-form').onchange = function(){
    const totalBill = Number(document.querySelector('#totalBill').value)
    const tipInput = document.querySelector('#tipInput').value
    const tipOutput = document.querySelector('#tipOutput')
    const tipAmount = document.querySelector('#tipAmount')
    const totalBillWithTip = document.querySelector('#totalBillWithTip')
    const result = document.querySelector('#results')

    const tip = totalBill * (tipInput / 100)
    const totalValue = totalBill + tip


    tipAmount.value = tip.toFixed(2)
    totalBillWithTip.value = totalValue.toFixed(2)

    tipOutput.innerHTML = `${tipInput}%`
    result.style.display = 'block'
    
}