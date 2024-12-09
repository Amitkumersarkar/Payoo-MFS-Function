document.getElementById('btn-Cash-Out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');

    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');


    console.log('inside the click handler', cashOut, pinNumber);
})