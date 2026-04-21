import {getUniqueTransactionTypes,calculateTotalAmount,calculateTotalAmountByDate,getTransactionByType,getTransactionsInDateRange,getTransactionsByMerchant,calculateAverageTransactionAmount,getTransactionsByAmountRange,findMostTransactionsMonth,findMostDebitTransactionMonth,mostTransactionTypes,getTransactionsBeforeDate
,calculateTotalDebitAmount,mapTransactionDescriptions,findTransactionById} from './Functions.js'

const arrTrans = [
    {
        transaction_id: '12214',
        transaction_date: '2023-10-01',
        transaction_amount: 1500.00,
        transaction_type: 'debit',
        transaction_description: 'Grocery shopping for the week', 
        merchant_name: 'SuperMarket',
        card_type: 'Visa Platinum',
    },

    {
        transaction_id: '12215',
        transaction_date: '2023-10-02',
        transaction_amount: 45.50,
        transaction_type: 'credit',
        transaction_description: 'Morning coffee and pastry', 
        merchant_name: 'Coffee',
        card_type: 'MasterCard World',
    },

    {
        transaction_id: '12216',
        transaction_date: '2023-10-03',
        transaction_amount: 200.00,
        transaction_type: 'credit',
        transaction_description: 'Returned defective headphones', 
        merchant_name: 'TechStore',
        card_type: 'Visa Platinum',
    },

    {
        transaction_id: '12217',
        transaction_date: '2023-10-05',
        transaction_amount: 120.00,
        transaction_type: 'debit',
        transaction_description: 'Monthly streaming service', 
        merchant_name: 'SuperMarket',
        card_type: 'American Express',
    },

    {
        transaction_id: '12218',
        transaction_date: '2026-10-07',
        transaction_amount: 3500.00,
        transaction_type: 'credit',
        transaction_description: 'Rent payment', 
        merchant_name: 'SuperMarket',
        card_type: 'Debit Mastercard',
    }
];

//Проверка
console.log(getUniqueTransactionTypes(arrTrans));
console.log(calculateTotalAmount(arrTrans));
console.log(calculateTotalAmountByDate(arrTrans, 2023, 10, 3));
console.log(getTransactionByType(arrTrans,"debit"));
console.log(getTransactionsInDateRange(arrTrans, '2026-10-01','2026-10-07'));
console.log(getTransactionsByMerchant(arrTrans,'SuperMarket'));
console.log(calculateAverageTransactionAmount(arrTrans));
console.log(getTransactionsByAmountRange(arrTrans,100,1000));
console.log(findMostTransactionsMonth(arrTrans));
console.log(findMostDebitTransactionMonth(arrTrans));
console.log(mostTransactionTypes(arrTrans));
console.log(getTransactionsBeforeDate(arrTrans, '2026-10-01'));
console.log(calculateTotalDebitAmount(arrTrans));
console.log(findTransactionById(arrTrans, 12215));
console.log(mapTransactionDescriptions(arrTrans));