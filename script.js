(function() {
    'use strict';

    let dropDownButton = document.querySelector('.repair-brands__read-more');
    let repairBrandsSwiper = document.querySelector('.repair-brands__swiper');
    let repairBrands = document.querySelector('.repair-brands');
    let dropdownText = document.querySelector('.dropdown__text');

    dropDownButton.onclick = function () {
        let isDropped = this.classList.toggle('dropped');
        if (isDropped) {
            repairBrandsSwiper.style.height = '296px';
            repairBrands.style.paddingBottom = '14px';
            dropdownText.textContent = 'Скрыть';
        } else {
            repairBrandsSwiper.style.height = '200px';
            repairBrands.style.paddingBottom = '34px';
            dropdownText.textContent = 'Показать все';
        }
    };

    const breakpoint = window.matchMedia( '(max-width:767px)' );
    let mySwiper;
    const breakpointChecker = function() {
        if ( breakpoint.matches === false ) {
            repairBrandsSwiper.style.height = '200px';
            repairBrands.style.paddingBottom = '34px';
            dropdownText.textContent = 'Показать все';
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === true ) {
            dropDownButton.classList.remove('dropped');
            repairBrandsSwiper.style.height = '154px';
            repairBrands.style.paddingBottom = '0px';
            return enableSwiper();
        }
    };
    const enableSwiper = function() {
        mySwiper = new Swiper ('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();