const options = document.querySelectorAll('.option');
const totalPriceElement = document.getElementById('total-price');

//Middle box default open
function setDefaultOption() {
    const defaultOption = document.querySelector('.option.default-selected');
    if (defaultOption) {
        defaultOption.classList.add('active');
        defaultOption.querySelector('.radio-btn').checked = true;
        defaultOption.style.border = '2px solid #ff6b81';
        defaultOption.querySelector('.details').style.display = 'block';
        const price = defaultOption.querySelector('.price').textContent;
        totalPriceElement.textContent = price;
    }
}

options.forEach(option => {
    //onclick function
    option.addEventListener('click', () => {
        options.forEach(otherOption => {
            if (otherOption !== option) {
                otherOption.classList.remove('active');                
                otherOption.querySelector('.details').style.display = 'none';
                otherOption.querySelector('.radio-btn').checked = false;
                otherOption.style.border='';
            }
        });
        option.querySelector('.radio-btn').checked = true;
        option.classList.toggle('active');
        option.style.border = '2px solid #ff6b81';
        option.querySelector('.details').style.display = 'block';
        const selectedOption = document.querySelector('.option.active');
        const price = selectedOption.querySelector('.price').textContent;
        totalPriceElement.textContent = price;
    });
});

setDefaultOption();