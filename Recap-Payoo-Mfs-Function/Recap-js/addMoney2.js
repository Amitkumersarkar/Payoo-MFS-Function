document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber = getInputFieldValueById('input-pin-number');

    // console.log('add money inside addMoney2js', addMoney, pinNumber);
    if (isNaN(addMoney)) {
        alert('Failed to add Money');
        return;
    }
    // wrong way to verify pin number
    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        // console.log(balance, addMoney);

        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        // add to transaction history and make it dynamic
        const paragraph = document.createElement('paragraph');
        paragraph.innerText = `added : ${addMoney} tk.new balance : ${newBalance}`;
        console.log(paragraph);
        // should be a common function
        document.getElementById('transaction-container').appendChild(paragraph);
    }
    else {
        alert('failed to add money');
    }

});