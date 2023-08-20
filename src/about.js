import './pages/about.less';

// // Получаем элементы хлебных крошек
// const breadcrumb = document.querySelector('.breadcrumb');
// const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');

// // Создаем функцию для обновления хлебных крошек
// function updateBreadcrumb(activeItem) {
//     // Очищаем отображение хлебных крошек
//     breadcrumb.innerHTML = '';

//     // Создаем элемент дома для активного элемента
//     const activeItemElement = document.createElement('li');
//     activeItemElement.classList.add('breadcrumb-item');
//     activeItemElement.textContent = activeItem;
//     breadcrumb.appendChild(activeItemElement);

//     // Создаем разделительную черту
//     const separatorElement = document.createElement('li');
//     separatorElement.classList.add('breadcrumb-separator');
//     separatorElement.textContent = '/';
//     breadcrumb.appendChild(separatorElement);

//     // Создаем элементы дома для остальных элементов
//     breadcrumbItems.forEach(item => {
//         const itemElement = document.createElement('li');

//         // Если текущий элемент является активным, добавляем класс "active"
//         if (item.innerHTML === activeItem) {
//             itemElement.classList.add('breadcrumb-item', 'active');
//         } else {
//             itemElement.classList.add('breadcrumb-item');
//         }

//         itemElement.textContent = item.innerHTML;
//         breadcrumb.appendChild(itemElement);

//         // Если текущий элемент не является последним, добавляем разделительную черту
//         if (item !== breadcrumbItems[breadcrumbItems.length - 1]) {
//             const separatorElement = document.createElement('li');
//             separatorElement.classList.add('breadcrumb-separator');
//             separatorElement.textContent = 'Главная';
//             breadcrumb.appendChild(separatorElement);
//         }
//     });
// }

// // Пример использования
// updateBreadcrumb('О нас');

const burgerBtn = document.querySelector('.ham');
const burgerMenu = document.querySelector('.hamburger');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('hamburger_active');
});