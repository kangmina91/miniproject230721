// 날짜 보여주기
date = new Date();
var wd = new Array();
wd[0] = "일요일";
wd[1] = "월요일";
wd[2] = "화요일";
wd[3] = "수요일";
wd[4] = "목요일";
wd[5] = "금요일";
wd[6] = "토요일";

year = date.getFullYear(); month = date.getMonth() + 1; day = date.getDate();
var weekday = wd[date.getDay()];
document.querySelector(".current_date").innerHTML = year + "년 " + month + "월 " + day + "일 " + weekday;



// 소개 스와이퍼
const INTRO_SLIDE_LIST = document.querySelectorAll('.intro_slider .des')
const IntroSwiper = new Swiper('.intro_slider', {
    effect: 'fade',
    loop: true,
    speed: '1200',
    slidesPerView: 1,
    slideActiveClass: 'on',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
            INTRO_SLIDE_LIST.forEach((it, idx) => it.classList.remove('on'));
            INTRO_SLIDE_LIST[this.realIndex].classList.add('on');
        },

        slideChangeTransitionStart: function () {
            INTRO_SLIDE_LIST.forEach((it, idx) => it.classList.remove('on'));
            INTRO_SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});


// JavaScript 탭 코드
const tabLinks = document.querySelectorAll('.tab_menu .tab_link li');
const tabContents = document.querySelectorAll('.tab_content .tab_itm');

tabLinks.forEach((link, idx) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        tabLinks.forEach((link) => link.classList.remove('on'));
        this.classList.add('on');

        tabContents.forEach((content) => content.classList.remove('on'));
        tabContents[idx].classList.add('on');

        console.log(event, event.target, this, idx);
    });
});

// 제이쿼리 
$(function () {

    // 모바일
    $('.Header .gnb>.main_menu>li>a').on('click', function (e) {
        if ($('.Header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_menu').slideUp();
        }
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Header .gnb').toggleClass('on');
    })


    $(window).on('resize', function () {
        $('.Header .gnb').removeClass('on');
        $('.sub_menu').removeAttr('style');
    })

});