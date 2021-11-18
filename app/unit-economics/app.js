let unitEconomicsForm = document.getElementById('unit-economics-form'),
    cellingPriceInput = document.getElementById('celling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-margin'),
    salesMarketingInput = document.getElementById('sales-marketing'),
    operationsCostInput = document.getElementById('operations-cost'),
    netMarginInput = document.getElementById('net-margin'),
    cellingPriceValue,cogsValue,grossMarginValue,salesMarketingValue,
    operationsCostValue,netMarginValue;

function calculate(event){
    event.preventDefault();
    console.log(event);
    // Get Gross Margin value
    cellingPriceValue = cellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = cellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    // Get Net Margin value
    salesMarketingValue = salesMarketingInput.value;
    operationsCostValue = operationsCostInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue - operationsCostValue;
    netMarginInput.value = netMarginValue;
}

unitEconomicsForm.addEventListener('submit',calculate);