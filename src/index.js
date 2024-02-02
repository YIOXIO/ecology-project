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


function getElementByIdSafe(id) {
    return document.getElementById(id) || null;
}

var a = document.querySelector(".round");
[{ id: "bryansk", degrees: "0" },
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
{ id: "ulan-bator", degrees: "338.5" }].forEach(function (e) {
    var element = getElementByIdSafe(e.id);
    if (element) {
        element.addEventListener("click", function () {
            a.style.transform = "rotate(" + e.degrees + "deg)";
        });
    }
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



const ulElement = document.querySelector('.news__list');
if (ulElement) {
    const liElements = ulElement.querySelectorAll('.news__card');
    if (liElements.length > 2) {
        for (let i = 2; i < liElements.length; i++) {
            const liElement = liElements[i];
            const imgElement = liElement.querySelector('.news__image');

            if (liElement && imgElement) {
                liElement.classList.remove('news__card_big');
                imgElement.classList.remove('news__image_big');
            }
        }
    }

    if (liElements.length > 8) {
        for (let i = 8; i < liElements.length; i++) {
            const liElement = liElements[i];
            const imgElement = liElement.querySelector('.news__image');

            if (liElement && imgElement) {
                liElement.classList.remove('news__card_big');
                imgElement.classList.remove('news__image_big');
                ulElement.removeChild(liElement);
            }
        }
    }
}

// Получаем элементы
var subscribe = document.querySelector('.subscribe');

// Флаг, указывающий, находится ли элемент в режиме перетаскивания
var isDragging = false;

// Координаты смещения элемента при перетаскивании
var offsetX = 0;
var offsetY = 0;

// Обработчик события нажатия на элемент
subscribe.addEventListener('mousedown', function(event) {
  // Запоминаем начальные координаты мыши и смещение элемента
  offsetX = event.clientX - subscribe.offsetLeft;
  offsetY = event.clientY - subscribe.offsetTop;
  
  // Устанавливаем флаг перетаскивания в true
  isDragging = true;
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var newLeft = event.clientX - offsetX;
      var newTop = event.clientY - offsetY;
      
      // Получаем размеры экрана viewport
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;
      
      // Ограничиваем новые координаты элемента
      newLeft = Math.max(newLeft, 0);
      newLeft = Math.min(newLeft, viewportWidth - subscribe.offsetWidth);
      newTop = Math.max(newTop, 0);
      newTop = Math.min(newTop, viewportHeight - subscribe.offsetHeight);
      
      // Устанавливаем новые координаты элемента
      subscribe.style.left = newLeft + 'px';
      subscribe.style.top = newTop + 'px';
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    var subscribe = document.querySelector('.subscribe');
    
    setTimeout(function() {
      subscribe.classList.add('subscribe_appear');
    }, 3000);
  });
// Обработчик события отпускания кнопки мыши
document.addEventListener('mouseup', function() {
  // Сбрасываем флаг перетаскивания в false
  isDragging = false;
});

const subscribeCloseButton = document.querySelector('.close-button');

subscribeCloseButton.addEventListener('click', () => {
    subscribe.classList.remove('subscribe_appear');
})