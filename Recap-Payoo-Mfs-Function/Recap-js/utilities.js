// common shared function we used
// function getInputFieldValueById() {
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     // return value into main file
//     return addMoney;
// };

// create new function

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}