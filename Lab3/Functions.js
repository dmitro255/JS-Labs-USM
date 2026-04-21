//Function module 

/**
 * Returns unique transaction types
 * @param {Array} arrTrans
 * @returns {Array<string>}
 */
export function getUniqueTransactionTypes(arrTrans) { 
    const uniqueTrans = [...new Set(arrTrans.map(t => t.transaction_type))];
    return uniqueTrans;
}

/**
 * Calculates total amount of all transactions
 * @param {Array} arrTrans
 * @returns {number}
 */
export function calculateTotalAmount(arrTrans) {
    return arrTrans.reduce((totalAmount,trans) =>{
        return totalAmount += trans.transaction_amount;
    },0);
}

/**
 * Calculates total amount filtered by date parts
 * @param {Array} arrTrans
 * @param {number} [year]
 * @param {number} [month]
 * @param {number} [day]
 * @returns {number}
 */
export function calculateTotalAmountByDate(arrTrans, year, month, day) {
    return arrTrans
        .filter(trans => {
            const [y, m, d] = trans.transaction_date.split('-');

            if (year !== undefined && y !== String(year)) return false;
            if (month !== undefined && m !== String(month).padStart(2, '0')) return false;
            if (day !== undefined && d !== String(day).padStart(2, '0')) return false;

            return true;
        })
        .reduce((total, trans) => total + trans.transaction_amount, 0);
}

/**
 * Returns transactions by type
 * @param {Array} arrTrans
 * @param {string} type
 * @returns {Array}
 */
export function getTransactionByType(arrTrans, type) {
    return arrTrans.filter(trans => trans.transaction_type == type)
}

/**
 * Returns transactions within date range
 * @param {Array} arrTrans
 * @param {string} startDate
 * @param {string} endDate
 * @returns {Array}
 */
export function getTransactionsInDateRange(arrTrans, startDate, endDate) {
    return arrTrans.filter(trans => {
        return trans.transaction_date >= startDate &&  trans.transaction_date <= endDate ;
    })
}

/**
 * Returns transactions by merchant
 * @param {Array} arrTrans
 * @param {string} merchant
 * @returns {Array}
 */
export function getTransactionsByMerchant(arrTrans, merchant) {
    return arrTrans.filter(trans => {
        return trans.merchant_name === merchant;
    });
}

/**
 * Calculates average transaction amount
 * @param {Array} arrTrans
 * @returns {number}
 */
export function calculateAverageTransactionAmount(arrTrans) {
    if (arrTrans.length === 0) return 0;

    const total = arrTrans.reduce((sum, t) => sum + t.transaction_amount, 0);
    return total / arrTrans.length;
}

/**
 * Returns transactions within amount range
 * @param {Array} arrTrans
 * @param {number} minAmount
 * @param {number} maxAmount
 * @returns {Array}
 */
export function getTransactionsByAmountRange(arrTrans, minAmount, maxAmount) {
    return arrTrans.filter((trans) => {
        return trans.transaction_amount >= minAmount && trans.transaction_amount <= maxAmount;
    });
}

/**
 * Finds month with most transactions
 * @param {Array} arrTrans
 * @returns {string|null}
 */
export function findMostTransactionsMonth(arrTrans) {
    const months = {};
    arrTrans.forEach(trans => {
        const month = trans.transaction_date.slice(0, 7);
        months[month] = (months[month] || 0) + 1;
    });

    let maxMonth = null;
    let maxCount = 0;

    for (const month in months) {
        if (months[month] > maxCount) {
            maxCount = months[month];
            maxMonth = month;
        }
    }
    return maxMonth;
}

/**
 * Finds month with most debit transactions
 * @param {Array} arrTrans
 * @returns {string|null}
 */
export function findMostDebitTransactionMonth(arrTrans) {
    const months = {};

    arrTrans.forEach(trans => {
        if (trans.transaction_type === "debit") {

            const month = trans.transaction_date.slice(0, 7);

            months[month] = (months[month] || 0) + 1;
        }
    });

    let maxMonth = null;
    let maxCount = 0;

    for (const month in months) {
        if (months[month] > maxCount) {
            maxCount = months[month];
            maxMonth = month;
        }
    }

    return maxMonth;
}

/**
 * Determines which transaction type is more frequent
 * @param {Array} arrTrans
 * @returns {string} 'debit' | 'credit' | 'equal'
 */
export function mostTransactionTypes(arrTrans) {
        let debit = 0 ;
        let credit = 0;
    arrTrans.forEach(trans => {

        if( trans.transaction_type === 'debit' ){
            debit++;
        }
        
        if( trans.transaction_type === 'credit' ) {
            credit++;
        } 

    });

    if(debit > credit ) {
            return 'debit'; 
        } else if( credit > debit){
            return 'credit';
        } else if( credit === debit) {
            return 'equal'
        }
}

/**
 * Returns transactions before given date
 * @param {Array} arrTrans
 * @param {string} date
 * @returns {Array}
 */
export function getTransactionsBeforeDate(arrTrans, date) {
    return arrTrans.filter(trans => trans.transaction_date < date);
}

/**
 * Calculates total debit amount
 * @param {Array} arrTrans
 * @returns {number}
 */
export function calculateTotalDebitAmount(arrTrans) {
    return arrTrans
        .filter(trans => trans.transaction_type === 'debit')
        .reduce((sum, trans) => sum + trans.transaction_amount, 0);
}

/**
 * Finds transaction by ID
 * @param {Array} arrTrans
 * @param {string} id
 * @returns {Object|undefined}
 */
export function findTransactionById(arrTrans, id) {
    return arrTrans.find(trans => trans.transaction_id === id);
}

/**
 * Maps transaction descriptions into array
 * @param {Array} arrTrans
 * @returns {Array<string>}
 */
export function mapTransactionDescriptions(arrTrans) {
    return arrTrans.map(trans => trans.transaction_description);
}