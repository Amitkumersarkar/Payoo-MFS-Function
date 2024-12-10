document.getElementById('btn-Cash-Out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');

    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');

    // console.log('inside the click handler', cashOut, pinNumber);
    //  validation
    if (isNaN(cashOut)) {
        alert('failed to cash out');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        //  validation
        if (cashOut > balance) {
            alert('You don not have enough money');
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history and make it dynamic
        const div = document.createElement('div');
        div.classList.add('bg-green-500');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold"> Cash Out </h4>
        <p>${cashOut} money withdraw. new balance ${newBalance} </p>

        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('No Money Found..!');

    }
});