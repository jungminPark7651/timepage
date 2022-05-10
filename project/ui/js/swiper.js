var swiper = new Swiper('.swiper-container', {
    slidesPerView:1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 20, //위 slidesPerview 여백
    breakpoints: { //반응형 조건 속성
      640: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    }
});
