let balance = 200; // Boshlang'ich balans

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('result');
    const balanceElement = document.getElementById('balance');

    if (isNaN(amount)) {
        resultElement.textContent = "Iltimos, to'g'ri summa kiriting.";
    } else if (amount < 20) {
        resultElement.textContent = "Minimal depozit summasi 20$.";
    } else if (amount > 1000) {
        resultElement.textContent = "Maksimal depozit summasi 1000$.";
    } else {
        balance += amount; // Balansga depozit summasini qo'shamiz
        resultElement.textContent = `${amount}$ muvaffaqiyatli depozit qo'yildi.`;
        balanceElement.textContent = `Joriy balans: ${balance}$`; // Yangi balansni ko'rsatamiz
    }
}

// Sahifa yuklanganda boshlang'ich balansni ko'rsatish
window.onload = function() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `Joriy balans: ${balance}$`;
};
