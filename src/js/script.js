$(document).ready(function(){
  function ToggleMenu() {
    $('.page-header__burger').toggleClass('page-header__burger--active');
    $('.page-header__nav').toggleClass('page-header__nav--active');
  }
  function changeSlider(numOfSlide) {
    $('.hero__tab').removeClass('hero__tab--active');
    $('.hero__tab-button').removeClass('hero__tab-button--active');
    $('.hero__tab').eq(numOfSlide).addClass('hero__tab--active');
    $('.hero__tab-button').eq(numOfSlide).addClass('hero__tab-button--active');
  }
  function itemCardChangeValue() {
    var inputField = $('.item-card__counter-number');
    var inputValue = inputField.val();
    if ($(this).hasClass('item-card__plus')) {
      inputValue++;
    } else {
      inputValue--;
      if (inputValue < 0) {
        inputValue = 0;
      }
    }
    inputField.val(inputValue);
  }
  $('.item-card__counter-btn').on('click', '.item-card__plus, .item-card__minus', itemCardChangeValue)

  $('input, select').styler();

  $('.products__items--recommend').owlCarousel({
    items:2,
    smartSpeed: 500,
    margin: 38,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    responsive : {
      0 : {
        items:1,
        center: true
      },
      600 : {
        items: 2,
        margin: 10
      },
      1024 : {
        items: 2,
        margin: 38
      },
      1920 : {
        items: 3,
        margin: 115
      }
    }
  });

  $('.products__items--viewed').owlCarousel({
    items:3,
    smartSpeed: 500,
    margin: 38,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
     responsive : {
      0 : {
        items:1,
        center: true
      },
      600 : {
        items: 2,
        margin: 10
      },
      1024 : {
        items: 3,
        margin: 38
      },
      1920 : {
        items: 3,
        margin: 115
      }
    }
  });
  $('.products__filter').on('click', '.products__filter-item ', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  $('.hero__tab-buttons').on('click', '.hero__tab-button', function() {
    var curIndex = $(this).index();
    changeSlider(curIndex);
  })
  $('.hero__tab-controls').on('click', '.hero__tab-arrow', function() {
    var currentSlideIndex = $('.hero__tab--active').index();
    if ($(this).hasClass('hero__tab-arrow--left')) {
      if (currentSlideIndex === 0) {
        currentSlideIndex = $('.hero__tab').length - 1;
      } else {
        currentSlideIndex--;
      }
    } else {
      if (currentSlideIndex === $('.hero__tab').length - 1) {
        currentSlideIndex = 0;
      } else {
        currentSlideIndex++;
      }
    }
    changeSlider(currentSlideIndex);
  });
  $('.page-header__top').on('click', '.page-header__burger', ToggleMenu)
  $('.page-header__top').on('click', '.page-header__search-btn, .page-header__top-close-search', function(event) {
    $('.page-header__top-form').toggleClass('page-header__top-form--active');
  })
  $('body').click(function(e) {
    if (!$(e.target).closest('.page-header__nav, .page-header__burger').length){
      $('.page-header__burger').removeClass('page-header__burger--active');
      $('.page-header__nav').removeClass('page-header__nav--active');
    }
  });
  $('.filter__form').on('click', '.filter__header', function(e) {
    $(this)
    .siblings('.filter__items')
    .slideToggle()
    .parent('.filter__section')
    .toggleClass('filter__section--active')
  })
  $('.search-filters').on('click', '.search-filters__button', function(event) {
    var categoryBlock = $('.category');
    var $this = $(this);

    function removeFilters() {
      categoryBlock.removeClass('category--block category--list');
    }
    function changeFilter(filterClass) {
      removeFilters();
      if (filterClass) {
        categoryBlock.addClass(filterClass);
      }
    }
    function changeActiveButton() {
      $('.search-filters__button').removeClass('search-filters__button--active');
      $this.addClass('search-filters__button--active');
    }

    if ($this.hasClass('search-filters__button--block')) {
      changeFilter('category--block');
    } else if ($this.hasClass('search-filters__button--list')) {
      changeFilter('category--list');
    } else {
      changeFilter();
    }
    changeActiveButton();
  })
  $('.side-menu').on('click', '.side-menu__select, .side-menu__item', function(event) {
    $('.side-menu__list').toggleClass('side-menu__list--active');
    if ($(event.target).hasClass('side-menu__link')) {
      $('.side-menu__item').removeClass('side-menu__item--active');
      $(this).addClass('side-menu__item--active');
    }
  })
});





