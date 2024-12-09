document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('add money button click');
    // here we call function from utilities 
    // function call from separated file
    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);

    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);

    // call utilities function

    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber = getInputFieldValueById('input-pin-number');

    console.log('add money with parameter', addMoney, pinNumber);

})