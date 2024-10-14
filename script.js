function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('result');

    if (isNaN(amount)) {
        resultElement.textContent = "Iltimos, to'g'ri summa kiriting.";
    } else if (amount < 20) {
        resultElement.textContent = "Minimal depozit summasi 20$.";
    } else if (amount > 1000) {
        resultElement.textContent = "Maksimal depozit summasi 1000$.";
    } else {
        resultElement.textContent = `${amount}$ muvaffaqiyatli depozit qo'yildi.`;
    }
}