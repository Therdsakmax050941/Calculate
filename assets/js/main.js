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

        // สร้างปุ่มลบ
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
        deleteButton.onclick = function() {
            deleteTransaction(index); // เรียกใช้ฟังก์ชัน deleteTransaction เมื่อปุ่มถูกคลิก
        };
        listItem.appendChild(deleteButton);

        transactionList.appendChild(listItem);
    });

    showTransactionsWithFade(); 
}
function deleteTransaction(index) {
    transactions.splice(index, 1); // ลบรายการที่ถูกกดปุ่มลบออกจากอาเรย์ transactions
    updateTransactions(); // อัพเดทรายการหลังการลบ
    updateBalance(); // อัพเดทยอดเงินคงเหลือ
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
        showGif();
    }

    document.getElementById('amount').value = ''; 
    document.getElementById('description').value = ''; 
}

function showGif() {
    const totalBalance = parseInt(document.getElementById('totalBalance').textContent.split(': ')[1]);
    const gifElement = document.getElementById('gif');

    if (totalBalance <= 0) {
        gifElement.src = ''; 
    } else if (totalBalance < 3000) {
        gifElement.src = './assets/imgs/plshelp.gif'; 
    } else if (totalBalance < 8000) {
        gifElement.src = './assets/imgs/im-fine.gif'; 
    } else if (totalBalance > 10000) {
        gifElement.src = './assets/imgs/Rich.gif'; 
    }
}


  
  