import './pages/index.less';


// Анимация счётчика цифр при загрузке страницы
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




// Отображение цифры соответсвуещему филиалу
const branchesLinks = document.querySelectorAll('.branches__link');
const branchesNumber = document.querySelector('.branches__number');


branchesLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const number = (index + 1).toString().padStart(2, '0');
        branchesNumber.textContent = number;

    });
});

document.getElementById("bryansk").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(0)"; });
document.getElementById("volgograd").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(22.5deg)"; });
document.getElementById("voronej").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(45deg)"; });
document.getElementById("erevan").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(65deg)"; });
document.getElementById("ivanovo").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(90deg)"; });
document.getElementById("krasnodar").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(112.5deg)"; });
document.getElementById("minsk").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(135deg)"; });
document.getElementById("orenburg").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(157.5deg)"; });
document.getElementById("perm").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(202deg)"; });
document.getElementById("pyatigorsk").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(224.5deg)"; });
document.getElementById("sevastopol").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(247deg)"; });
document.getElementById("smolensk").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(270deg)"; });
document.getElementById("tashkent").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(292.5deg)"; });
document.getElementById("tula").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(315deg)"; });
document.getElementById("ulan-bator").addEventListener("click", function () { document.querySelector(".round").style.transform = "rotate(338.5deg)"; });



// Переключение табов

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.branches__container');
    const tabsBtn = document.querySelectorAll('.branches__link');
    const tabsContent = document.querySelectorAll('.branches__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('branches__link')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => { el.classList.remove('branches__link_active') });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('branches__link_active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => { el.classList.remove('branches__content_active') });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('branches__content_active');
    };
});

