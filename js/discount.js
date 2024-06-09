document.getElementById('btn-apply').addEventListener('click', function () {
    const priceField = document.getElementById('input-field');
    const newPriceFieldString = priceField.value;
    const newPriceField = parseFloat(newPriceFieldString);
    const payField = document.getElementById('pay-field');
    const couponField = document.getElementById('input-field-coupon');
    const couponFieldValue = couponField.value;

    if (couponFieldValue === 'DISC30') {
        const discount = newPriceField - (newPriceField * 0.3);
        payField.innerText = discount;

        // clear input field value
        priceField.value = '';
        couponField.value = '';
    }
    else {
        alert('Please provide a valid Coupon');
    }

})