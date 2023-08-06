import './pages/index.less';



const numbers = document.querySelectorAll('.hero__number');

numbers.forEach(number => {
    let stop = parseInt(number.getAttribute('data-stop'));
    let count = 0;
    let increment = stop / 100;

    let timer = setInterval(() => {
        count += increment;
        number.textContent = Math.floor(count);

        if (count >= stop) {
            clearInterval(timer);
            number.textContent = stop;
        }
    }, 15);
});