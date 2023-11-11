let transactions = [];
let totalBalance = 0;

function addTransaction(type) {
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if (amount) {
        const transaction = {
            amount,
            description,
            type
        };

        transactions.push(transaction);
        updateTransactions();
        updateBalance();
    }
}

function resetTransactions() {
    transactions = [];
    updateTransactions();
    updateBalance();
}

function updateTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const listItem = document.createElement('li');
        const sign = transaction.type === 'income' ? '+' : '-';
        const textColor = transaction.type === 'income' ? 'green' : 'red';

        const description = transaction.type === 'income' ? `รายรับ` : `รายจ่าย`;
        const formattedDesc = `#${index + 1} ${description} - ${transaction.description}`;
        const text = `${sign} ${transaction.amount} ${formattedDesc}`;

        listItem.textContent = text;
        listItem.style.color = textColor;
        listItem.classList.add('fade-in');

        transactionList.appendChild(listItem);
    });

    showTransactionsWithFade();
}

function updateBalance() {
    totalBalance = transactions.reduce((total, transaction) => {
        return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
    }, 0);

    const balanceDisplay = document.getElementById('totalBalance');
    balanceDisplay.textContent = `ยอดคงเหลือ: ${totalBalance}`;
}
function showTransactionsWithFade() {
    const transactionList = document.getElementById('transactionList');
    const items = transactionList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        items[i].style.opacity = '0';
        items[i].style.transition = 'opacity 0.5s ease';
        items[i].style.transitionDelay = `${i * 0.1}s`;
        setTimeout(() => {
            items[i].style.opacity = '1';
        }, 50);
    }
}

function updateTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const listItem = document.createElement('li');
        const sign = transaction.type === 'income' ? '+' : '-';
        const textColor = transaction.type === 'income' ? 'green' : 'red';

        const description = transaction.type === 'income' ? `รายรับ` : `รายจ่าย`;
        const formattedDesc = `#${index + 1} ${description} - ${transaction.description}`;
        const text = `${sign} ${transaction.amount} ${formattedDesc}`;

        listItem.textContent = text;
        listItem.style.color = textColor;
        listItem.classList.add('fade-in');

        transactionList.appendChild(listItem);
    });

    showTransactionsWithFade(); 
}
function addTransaction(type) {
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if (amount) {
        const transaction = {
            amount,
            description,
            type
        };

        transactions.push(transaction);
        updateTransactions();
        updateBalance();
    }

    document.getElementById('amount').value = ''; 
    document.getElementById('description').value = ''; 
}


  
  