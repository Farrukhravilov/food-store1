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
        const paginationBlock = document.querySelector('.shop-pagelist__body');

        if (!folderProductList || !thumbsButton || !simpleButton || !listButton || !paginationBlock) {
            console.error('One or more required elements are not found in the DOM.');
            return;
        }

        const setCookie = (name, value, days) => {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        };

        const getCookie = (name) => {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        const changeClass = (newClass) => {
            folderProductList.className = 'folder-product__list';
            if (window.innerWidth > 660 || newClass === 'thumbs') {
                folderProductList.classList.add(newClass);
            } else {
                folderProductList.classList.add('thumbs');
            }
            setCookie('folderViewMode', newClass, 7);
        };

        const setActiveButton = (activeButton) => {
            [thumbsButton, simpleButton, listButton].forEach(button => {
                button.classList.remove('active');
            });
            activeButton.classList.add('active');
        };

        const handleResize = () => {
            if (window.innerWidth <= 479) {
                simpleButton.style.display = 'none';
                listButton.style.display = 'none';
                changeClass('thumbs');
                setActiveButton(thumbsButton);
            } else {
                simpleButton.style.display = 'inline-block';
                listButton.style.display = 'inline-block';
                const savedViewMode = getCookie('folderViewMode');
                if (savedViewMode && savedViewMode !== 'thumbs') {
                    changeClass(savedViewMode);
                    if (savedViewMode === 'simple') {
                        setActiveButton(simpleButton);
                    } else if (savedViewMode === 'list') {
                        setActiveButton(listButton);
                    }
                }
            }
        };

        const savedViewMode = getCookie('folderViewMode');

        if (savedViewMode && (window.innerWidth > 479 || savedViewMode === 'thumbs')) {
            changeClass(savedViewMode);
            if (savedViewMode === 'thumbs') {
                setActiveButton(thumbsButton);
            } else if (savedViewMode === 'simple') {
                setActiveButton(simpleButton);
            } else if (savedViewMode === 'list') {
                setActiveButton(listButton);
            }
        } else {
            changeClass('thumbs');
            setActiveButton(thumbsButton);
        }

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

        window.addEventListener('resize', handleResize);

        handleResize();

        const manageProductDisplay = () => {
            const products = [...folderProductList.children];
            const maxDisplayCount = 8;
            const totalPages = Math.ceil(products.length / maxDisplayCount);

            if (products.length > maxDisplayCount) {
                document.querySelector('.shop-pagelist').classList.remove('hide');
            } else {
                document.querySelector('.shop-pagelist').classList.add('hide');
            }

            updateProductDisplay(1, products, maxDisplayCount);
            createPagination(totalPages);
            addPaginationEventListeners(totalPages, products, maxDisplayCount);
        };

        const createPagination = (totalPages) => {
            const pagePrev = paginationBlock.querySelector('.page-prev');
            const pageNext = paginationBlock.querySelector('.page-next');

            let paginationHTML = [];
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML.push(`
            <li class="page-num ${i === 1 ? 'active' : ''}">
                ${i === 1 ? `<span>${i}</span>` : `<a href="?page=${i}" data-page="${i}">${i}</a>`}
            </li>
        `);
            }

            paginationBlock.innerHTML = '';
            paginationBlock.appendChild(pagePrev);
            paginationBlock.innerHTML += paginationHTML.join('');
            paginationBlock.appendChild(pageNext);
        };

        const addPaginationEventListeners = (totalPages, products, maxDisplayCount) => {
            const paginationLinks = paginationBlock.querySelectorAll('a[data-page]');
            paginationLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const page = parseInt(event.target.dataset.page, 10);
                    updateProductDisplay(page, products, maxDisplayCount);
                    updatePagination(page, totalPages);
                    updateURL(page);
                });
            });

            const prevLink = paginationBlock.querySelector('.page-prev a');
            if (prevLink) {
                prevLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    const currentPage = parseInt(paginationBlock.querySelector('.page-num.active span').innerText, 10);
                    if (currentPage > 1) {
                        updateProductDisplay(currentPage - 1, products, maxDisplayCount);
                        updatePagination(currentPage - 1, totalPages);
                        updateURL(currentPage - 1);
                    }
                });
            }

            const nextLink = paginationBlock.querySelector('.page-next a');
            if (nextLink) {
                nextLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    const currentPage = parseInt(paginationBlock.querySelector('.page-num.active span').innerText, 10);
                    if (currentPage < totalPages) {
                        updateProductDisplay(currentPage + 1, products, maxDisplayCount);
                        updatePagination(currentPage + 1, totalPages);
                        updateURL(currentPage + 1);
                    }
                });
            }
        };

        const updateProductDisplay = (activePage, products, maxDisplayCount) => {
            const start = (activePage - 1) * maxDisplayCount;
            const end = start + maxDisplayCount;

            // Remove all children
            while (folderProductList.firstChild) {
                folderProductList.removeChild(folderProductList.firstChild);
            }

            // Append only the products for the active page
            for (let i = start; i < end && i < products.length; i++) {
                folderProductList.appendChild(products[i]);
            }
        };

        const updatePagination = (activePage, totalPages) => {
            const paginationItems = paginationBlock.querySelectorAll('.page-num');
            paginationItems.forEach(item => {
                if (item.classList.contains('active')) {
                    const pageNum = item.querySelector('span').innerText;
                    item.innerHTML = `<a href="?page=${pageNum}" data-page="${pageNum}">${pageNum}</a>`;
                    item.classList.remove('active');
                }
            });

            const activeItem = paginationBlock.querySelector(`.page-num a[data-page="${activePage}"]`).parentElement;
            activeItem.innerHTML = `<span>${activePage}</span>`;
            activeItem.classList.add('active');

            const prevButton = paginationBlock.querySelector('.page-prev');
            const nextButton = paginationBlock.querySelector('.page-next');

            prevButton.classList.toggle('no-link', activePage === 1);
            nextButton.classList.toggle('no-link', activePage === totalPages);
        };

        const updateURL = (page) => {
            const newURL = `${window.location.pathname}?page=${page}`;
            window.history.pushState({ path: newURL }, '', newURL);
        };

        manageProductDisplay();
    },

    sortingPanel: function name(params) {
        const sortingBtn = document.querySelector('.folder-compare__btn');
        const sortingPopap = document.querySelector('.folder-compare__popap');

        if (!sortingBtn || !sortingPopap) {
            console.error('Required elements are not found in the DOM.');
            return;
        }

        sortingBtn.addEventListener('click', () => {
            sortingBtn.classList.toggle("active");
            sortingPopap.classList.toggle("active");
        });

        const closeSortingPopap = () => {
            sortingBtn.classList.remove("active");
            sortingPopap.classList.remove("active");
        };

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeSortingPopap();
            }
        });

        document.addEventListener('click', (event) => {
            if (!sortingPopap.contains(event.target) && !sortingBtn.contains(event.target)) {
                closeSortingPopap();
            }
        });
    }
};
