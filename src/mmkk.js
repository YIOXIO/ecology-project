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




const cities = [
    { id: "moskva", transform: 'translate(-442px, 65px)' },
    { id: "minsk", transform: "translate(-527px, 116px)" },
    { id: "bryansk", transform: "translate(-477px, 100px)" },
    { id: "sevastopol", transform: "translate(-489px, 205px)" },
    { id: "krasnodar", transform: "translate(-439px, 199px)" },
    { id: "smolensk", transform: "translate(-495px, 67px)" },
    { id: "ivanovo", transform: "translate(-393px, 32px)" },
    { id: "tula", transform: "translate(-444px, 98px)" },
    { id: "volgograd", transform: "translate(-390px, 115px)" },
    { id: "orenburg", transform: "translate(-291px, 97px)" },
    { id: "perm", transform: "translate(-270px, 11px)" },
    { id: "voronej", transform: "translate(-440px, 113px)" },
    { id: "pyatigorsk", transform: "translate(-429px, 221px)" },
    { id: "erevan", transform: "translate(-407px, 252px)" },
    { id: "tashkent", transform: "translate(-207px, 230px)" },
    { id: "ulan-bator", transform: "translate(10px, 184px)" },
];

cities.forEach((city) => {
    const svgElement = document.getElementById(city.id);
    svgElement.addEventListener("click", changeLogoPointerTransform);
});

function changeLogoPointerTransform() {
    const logoPointer = document.querySelector(".logo-pointer");
    const cityId = this.id;
    const city = cities.find((city) => city.id === cityId);
    logoPointer.style.transform = city.transform;
}



