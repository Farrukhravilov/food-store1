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

    searchOpen: function name(params) {
        document.addEventListener('DOMContentLoaded', function () {
            const inputField = document.querySelector('.site-search__panel');
            const searchButton = document.getElementById('searchBtn');

            function toggleButtonState() {
                if (inputField.value.trim() === '') {
                    searchButton.classList.add('disabled');
                } else {
                    searchButton.classList.remove('disabled');
                }
            }

            function addActivClass() {
                inputField.classList.add('activ');
            }

            searchButton.addEventListener('click', addActivClass);
            inputField.addEventListener('input', toggleButtonState);
            toggleButtonState(); // Initial state check
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
    }
}