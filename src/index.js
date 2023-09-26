import './pages/index.css';

const burgerBtn = document.querySelector('.ham');
const burgerMenu = document.querySelector('.hamburger');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('hamburger_active');
});


// Анимация счётчика цифр при загрузке страницы
window.onload = function () {
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
}





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

const button = document.querySelector('.news__button');
button.addEventListener('click', function () {
    const template = document.querySelector('.template');
    const newCard = document.importNode(template.content, true);
    const firstCard = document.querySelector('.news__card.news__card_big');
    const secondCard = document.querySelector('.news__card.news__card_big:nth-child(2)');
    const newsList = document.querySelector('.news__list');
    newsList.insertBefore(newCard, firstCard);
    secondCard.classList.remove('news__card_big');
    const lastCard = newsList.lastElementChild;
    newsList.removeChild(lastCard);
});


// function add_new_card_on_post_save($post_id) {
//     // Проверяем, что это новая запись
//     if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
//         return;
//     }

//     // Получаем необходимые элементы
//     $newCard = array(
//         'class' => 'news__card news__card_big',
//         'content' => '',
//     );

//     $firstCard = get_field('news__card.news__card_big', $post_id)[0];
//     $secondCard = get_field('news__card.news__card_big:nth-child(2)', $post_id)[0];
//     $newsList = get_field('.news__list', $post_id);

//     // Вставляем новую карточку перед первой карточкой
//     array_splice($newsList, array_search($firstCard, $newsList), 0, $newCard);

//     // Удаляем класс news__card_big у второй карточки
//     $secondCardKey = array_search($secondCard, $newsList);
//     $newsList[$secondCardKey]['class'] = str_replace('news__card_big', '', $newsList[$secondCardKey]['class']);

//     // Удаляем последнюю карточку из списка
//     array_pop($newsList);

//     // Обновляем поле с новым списком карточек
//     update_field('.news__list', $newsList, $post_id);
// }

// add_action('save_post', 'add_new_card_on_post_save');