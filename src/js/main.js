const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (key in queue) {
            let f = queue[key];
            if (typeof f == 'function') {
                f();
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});


myObj.queue = {

    menuTarger: function name(params) {
        var currentUrl = window.location.href;

        var menuLinks = document.querySelectorAll('.header-menu__link, .footer-menu__link');

        menuLinks.forEach(function (link) {
            if (link.href === currentUrl) {
                link.classList.add('activ');
            }
        });
    },

    btnUp: function name(params) {
        window.addEventListener('scroll', function () {
            var scroll = document.querySelector('.btnup');

            scroll.classList.toggle('active', window.scrollY > 300);
        });

        const goTopBtn = document.querySelector('.btnup');

        goTopBtn.addEventListener('click', goTop);

        function goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    },

    folderMenu: function name(params) {
        var folderMenu = document.querySelector('.no-adop__folder');
        var folderArrow = document.querySelector('.folder-arrow');

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

        folderAdopBtn.addEventListener('click', function name(params) {
            folderAdopMenu.classList.toggle('active')
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

    },

    folderMainSlider: function name(params) {
        var swiper = new Swiper(".folder-slider", {
            loop: true,
            autoplay: {
                delay: 100000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    },

    prodSlider: function name(params) {
        var swiper = new Swiper(".product-wrap", {
            loop: true,
            autoplay: {
                delay: 100000,
            },
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    },

    modal: function name(params) {
        const myModal = new HystModal({
            linkAttributeName: "data-hystmodal",
        });
    },

    listBox: function name(params) {
        var items = document.querySelectorAll('.header-adop__info .adop-item');

        function updateItemMargins() {
            items.forEach(function (item) {
                item.style.marginRight = '31px';
            });

            var visibleItems = Array.from(items).filter(function (item) {
                return getComputedStyle(item).display !== 'none';
            });

            if (visibleItems.length === 0) {
                return;
            }

            visibleItems[visibleItems.length - 1].style.marginRight = '0';

            if (visibleItems.length === 2 || visibleItems.length === 3) {
                visibleItems[visibleItems.length - 1].style.marginRight = '0';
            }
        }
    }
}
