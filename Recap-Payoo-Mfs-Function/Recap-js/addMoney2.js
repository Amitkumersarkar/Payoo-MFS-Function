document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber = getInputFieldValueById('input-pin-number');

    console.log('add money inside addMoney2js', addMoney, pinNumber);

    // wrong way to verify pin number
    if (pinNumber === 1234) {

    }
    else {
        alert('failed to add money');
    }

});