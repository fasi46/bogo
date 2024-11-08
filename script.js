document.querySelectorAll('input[name="unitOption"]').forEach((option) => {
    option.addEventListener('change', updateTotal);
});

function updateTotal() {
    const selectedOption = document.querySelector('input[name="unitOption"]:checked');
    const totalPrice = document.querySelector('.total-price');
    let price = 10;

    if (selectedOption.id === 'twoUnits') price = 18;
    else if (selectedOption.id === 'threeUnits') price = 24;

    totalPrice.textContent = $$ { price.toFixed(2) }
    USD;
}