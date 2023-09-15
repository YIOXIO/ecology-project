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

// Координаты для стрелки на циферблате
const cities = [
    { id: "bryansk", degrees: "0" },
    { id: "volgograd", degrees: "22.5" },
    { id: "voronej", degrees: "45" },
    { id: "erevan", degrees: "65" },
    { id: "ivanovo", degrees: "90" },
    { id: "krasnodar", degrees: "112.5" },
    { id: "minsk", degrees: "135" },
    { id: "orenburg", degrees: "157.5" },
    { id: "perm", degrees: "202" },
    { id: "pyatigorsk", degrees: "224.5" },
    { id: "sevastopol", degrees: "247" },
    { id: "smolensk", degrees: "270" },
    { id: "tashkent", degrees: "292.5" },
    { id: "tula", degrees: "315" },
    { id: "ulan-bator", degrees: "338.5" }
];




const roundElement = document.querySelector(".round");
cities.forEach(city => {
    const linkElement = document.getElementById(city.id);
    linkElement.addEventListener("click", function () {
        roundElement.style.transform = `rotate(${city.degrees}deg)`;
    });
});

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

const burgerBtn = document.querySelector('.ham');
const burgerMenu = document.querySelector('.hamburger');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('hamburger_active');
});

