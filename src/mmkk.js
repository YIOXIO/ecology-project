import './pages/mmkk.css';

const rusMap = document.querySelector('#rus-map');
if (rusMap !== null) {
    const cityGroups = [...rusMap.getElementsByClassName('city-group')];
    cityGroups.forEach(function (cityGroup) {
        const circle = cityGroup.querySelector('.city');
        const text = cityGroup.querySelector('.city-name');
        const tabs = document.querySelector('.mmkk-o-tabs');
        const tabsBtn = document.querySelectorAll('.mmkk-o__link');
        const tabsContent = document.querySelectorAll('.mmkk-o__content');

        cityGroup.addEventListener("click", () => {
            if (tabs) {
                tabs.addEventListener('click', (e) => {
                    if (e.target.classList.contains('mmkk-o__link')) {
                        const tabsPath = e.target.dataset.tabsPath;
                        tabsBtn.forEach(el => el.classList.remove('mmkk-o__link_active'));
                        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('mmkk-o__link_active');
                        tabsHandler(tabsPath);
                    }
                });
            }
        });

        const tabsHandler = (path) => {
            tabsContent.forEach(el => el.classList.remove('mmkk-o__content_active'));
            document.querySelector(`[data-tabs-target="${path}"]`).classList.add('mmkk-o__content_active');
        };

        cityGroup.addEventListener('mouseover', function () {
            circle.classList.add('city_hover');
            text.classList.add('city-name_hover');
        });

        cityGroup.addEventListener('mouseout', function () {
            circle.classList.remove('city_hover');
            text.classList.remove('city-name_hover');
        });
    });
}


var circles = document.querySelectorAll('g ');
const pointer = document.getElementById('pointer');

var offsetX = 11;
var offsetY = 43;

function handleCircleClick(event) {
  var gElement = event.currentTarget;
  
  var circleX = gElement.querySelector('circle').getAttribute('cx');
  var circleY = gElement.querySelector('circle').getAttribute('cy');
  
  var pointerX = circleX - offsetX;
  var pointerY = circleY - offsetY;
  
  pointer.setAttribute('x', pointerX);
  pointer.setAttribute('y', pointerY);
}

circles.forEach(function(gElement) {
  gElement.addEventListener('click', handleCircleClick);
});