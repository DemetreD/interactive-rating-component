const submitBtn = document.getElementById('submit');
const text = document.getElementById('span');
const buttons = document.querySelectorAll('#selected');

submitBtn.addEventListener('click', function () {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    card1.style.display = 'none';
    card2.style.display = 'block';  
});


buttons.forEach((rate) => {
    rate.addEventListener('click', () => {
        text.innerHTML = rate.innerHTML;
    })
})















