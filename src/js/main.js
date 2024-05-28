const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (let key in queue) {
            let f = queue[key];
            if (typeof f === 'function') {
                f();
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});

myObj.queue = {

    burgerMenu: function () {
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerWrap = document.querySelector('.burger-container');
        const burgerBody = document.querySelector('body');
        const headerMenuList = document.querySelector('.header-menu__list');
        const folderMenuList = document.querySelector('.folder-menu__list');
        const mainMenu = document.querySelector('.main-menu');
        const mainFolder = document.querySelector('.main-folder');

        if (burgerBtn && burgerWrap && burgerBody) {
            burgerBtn.addEventListener('click', function () {
                burgerBtn.classList.toggle('active');
                burgerWrap.classList.toggle('active');
                burgerBody.classList.toggle('overflo');
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    burgerBtn.classList.remove('active');
                    burgerWrap.classList.remove('active');
                    burgerBody.classList.remove('overflo');
                }
            });

            document.addEventListener('click', (e) => {
                if (!burgerWrap.contains(e.target) && !burgerBtn.contains(e.target)) {
                    burgerBtn.classList.remove('active');
                    burgerWrap.classList.remove('active');
                    burgerBody.classList.remove('overflo');
                }
            });
        }

        function moveMenus() {
            if (window.innerWidth <= 660) {
                if (mainMenu && headerMenuList && !mainMenu.contains(headerMenuList)) {
                    mainMenu.appendChild(headerMenuList);
                }
                if (mainFolder && folderMenuList && !mainFolder.contains(folderMenuList)) {
                    mainFolder.appendChild(folderMenuList);
                }
            } else {
                if (mainMenu && headerMenuList && mainMenu.contains(headerMenuList)) {
                    const headerMenu = document.querySelector('.header-menu');
                    if (headerMenu) {
                        headerMenu.appendChild(headerMenuList);
                    }
                }
                if (mainFolder && folderMenuList && mainFolder.contains(folderMenuList)) {
                    const folderMenu = document.querySelector('.folder-menu');
                    if (folderMenu) {
                        folderMenu.appendChild(folderMenuList);
                    }
                }
            }
        }

        moveMenus();
        window.addEventListener('resize', moveMenus);
    },

    menuTarger: function () {
        var currentUrl = window.location.href;
        var menuLinks = document.querySelectorAll('.header-menu__link, .footer-menu__link');

        menuLinks.forEach(function (link) {
            if (link.href === currentUrl) {
                link.classList.add('activ');
            }
        });
    },

    btnUp: function () {
        window.addEventListener('scroll', function () {
            var scroll = document.querySelector('.btnup');
            if (scroll) {
                scroll.classList.toggle('active', window.scrollY > 300);
            }
        });

        const goTopBtn = document.querySelector('.btnup');
        if (goTopBtn) {
            goTopBtn.addEventListener('click', goTop);
        }

        function goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },

    folderMenu: function () {
        var folderMenu = document.querySelector('.page-main__folder');
        var folderArrow = document.querySelector('.folder-arrow');

        if (folderMenu && folderArrow) {
            var hiddenItems = Array.from(folderMenu.children).slice(7);
            hiddenItems.forEach(function (item) {
                item.style.display = 'none';
            });

            if (folderMenu.children.length > 7) {
                folderArrow.classList.add('active');
            }

            folderArrow.addEventListener('click', function () {
                hiddenItems.forEach(function (item) {
                    item.style.display = item.style.display === 'none' ? 'list-item' : 'none';
                });

                var buttonText = folderArrow.textContent.trim();
                folderArrow.textContent = buttonText === 'Еще категории' ? 'Скрыть категории' : 'Еще категории';
            });

            const folderAdopBtn = document.querySelector('.folder-adop__menu');
            const folderAdopMenu = document.querySelector('.folder-menu');

            if (folderAdopBtn && folderAdopMenu) {
                folderAdopBtn.addEventListener('click', function () {
                    folderAdopMenu.classList.toggle('active');
                });

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape' && folderAdopMenu.classList.contains('active')) {
                        folderAdopMenu.classList.remove('active');
                    }
                });

                document.addEventListener('click', function (event) {
                    if (!folderAdopMenu.contains(event.target) && !folderAdopBtn.contains(event.target) && folderAdopMenu.classList.contains('active')) {
                        folderAdopMenu.classList.remove('active');
                    }
                });
            }
        }
    },

    folderMainSlider: function () {
        new Swiper(".folder-slider", {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    },

    prodSlider: function () {
        new Swiper(".product-wrap", {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                660: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    },

    modal: function () {
        new HystModal({
            linkAttributeName: "data-hystmodal",
        });
    },

    listBox: function () {
        var items = document.querySelectorAll('.header-adop__info .adop-item');

        if (items.length > 0) {
            function updateItemMargins() {
                items.forEach(function (item) {
                    item.style.marginRight = '31px';
                });

                var visibleItems = Array.from(items).filter(function (item) {
                    return getComputedStyle(item).display !== 'none';
                });

                if (visibleItems.length > 0) {
                    visibleItems[visibleItems.length - 1].style.marginRight = '0';

                    if (visibleItems.length === 2 || visibleItems.length === 3) {
                        visibleItems[visibleItems.length - 1].style.marginRight = '0';
                    }
                }
            }

            updateItemMargins();
            window.addEventListener('resize', updateItemMargins);
        }
    },

    folderFunck: function name(params) {
        const folderProductList = document.querySelector('.folder-product__list');
        const thumbsButton = document.querySelector('.folder-change__item.thumbs-in');
        const simpleButton = document.querySelector('.folder-change__item.simple-in');
        const listButton = document.querySelector('.folder-change__item.list-in');

        if (!folderProductList || !thumbsButton || !simpleButton || !listButton) {
            console.error('One or more required elements are not found in the DOM.');
            return;
        }

        const changeClass = (newClass) => {
            folderProductList.className = 'folder-product__list';
            folderProductList.classList.add(newClass);
        };

        const setActiveButton = (activeButton) => {
            [thumbsButton, simpleButton, listButton].forEach(button => {
                button.classList.remove('active');
            });
            activeButton.classList.add('active');
        };

        // Устанавливаем начальный класс и активную кнопку
        changeClass('thumbs');
        setActiveButton(thumbsButton);

        // Добавление обработчиков кликов для каждой кнопки
        thumbsButton.addEventListener('click', () => {
            changeClass('thumbs');
            setActiveButton(thumbsButton);
        });

        simpleButton.addEventListener('click', () => {
            changeClass('simple');
            setActiveButton(simpleButton);
        });

        listButton.addEventListener('click', () => {
            changeClass('list');
            setActiveButton(listButton);
        });
    },

    sortingPanel: function name(params) {
        const sortingBtn = document.querySelector('.folder-compare__btn');
        const sortingPopap = document.querySelector('.folder-compare__popap');

        sortingBtn.addEventListener('click', function name(params) {
            sortingBtn.classList.toggle("active");
            sortingPopap.classList.toggle("active");
        })
    }
};
