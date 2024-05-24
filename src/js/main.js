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
        var folderMenu = document.querySelector('.folder-menu__list');
        var folderArrow = document.querySelector('.folder-arrow');

        var hiddenItems = Array.from(folderMenu.children).slice(7);
            hiddenItems.forEach(function(item) {
            item.style.display = 'none';
        });

        if (folderMenu.children.length > 7) {
            folderArrow.classList.add('activ');
        };

        folderArrow.addEventListener('click', function() {
        hiddenItems.forEach(function(item) {
            item.style.display = item.style.display === 'none' ? 'block' : 'none';
        });

        var buttonText = folderArrow.textContent.trim();
            folderArrow.textContent = buttonText === 'Еще категории' ? 'Скрыть категории' : 'Еще категории';
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
    }
}
