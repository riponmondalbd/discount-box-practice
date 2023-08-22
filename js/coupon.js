document.getElementById('btn-apply').addEventListener('click', function () {
    const inputPrice = document.getElementById('price-input');
    const mainPriceString = inputPrice.value;
    const mainPrice = parseFloat(mainPriceString);


    // get coupon value from input field
    const couponValue = document.getElementById('coupon-input');
    const couponValueString = couponValue.value;

    // coupon validation
    if (couponValueString == 'DISC30') {
        const coupon = mainPrice - (mainPrice * 0.3);
        // set payable value
        const payMoneyElement = document.getElementById('payable-money');
        const payableMoneyString = payMoneyElement.innerText;

        payMoneyElement.innerText = coupon;
    }
    else {
        alert('Please type valid COUPON');
    }

})