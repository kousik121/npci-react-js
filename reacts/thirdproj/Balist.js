import BankAccount from "./BankAccount";

function baList() {
    let arr = [];
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = ['Indus', 'ICICI', 'HDFC', 'SBI', 'HSBC'];
    let arr3 = ['Suraj', 'Ranjit', 'Rakesh', 'Reena', 'Rinku'];
    for(let i = 0; i < arr1.length; i++) {
        let obj = new BankAccount(arr1[i], arr2[i], arr3[i]);
        arr.push(obj);
    }

    return arr;
}

export default baList;