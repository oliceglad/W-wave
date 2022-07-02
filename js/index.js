window.addEventListener('DOMContentLoaded', function () {

  // Кнопка плеера

  document.querySelector(".podcast__item__play").addEventListener("click", function () {
    document.querySelector(".podcast__item__pause").classList.remove("off")
    document.querySelector(".podcast__item__play").classList.add("off")
  })

  document.querySelector(".podcast__item__pause").addEventListener("click", function () {
    document.querySelector(".podcast__item__play").classList.remove("off")
    document.querySelector(".podcast__item__pause").classList.add("off")
  })

  // Кнопка плеера

  // Бургер меню

  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.add("menu-active");
    document.querySelector("#list-5").classList.add("menu-active");
  })

  document.querySelector("#point").addEventListener("click", function () {
    document.querySelector("#menu").classList.remove("menu-active")
    document.querySelector("#list-5").classList.remove("menu-active");
  })

  // Бургер меню

  // Поиск

  document.querySelector("#btn__open").addEventListener("click", function () {
    document.querySelector(".header__last__form-input").classList.toggle("form-active");
  })

  // Поиск

  // Дропдаун

  var spisok = document.getElementById("myDropdown");
  document.querySelector('#opened').addEventListener('click', function () {
    spisok.style.display = "flex"
  })

  // Дропдаун

  // Селект

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    placeholderValue: 1,
    duplicateItemsAllowed: false,
  });

  // Селект

  // Валидация формы

  new JustValidate('.about__form', {

    colorWrong: '#FF5C00',

    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Минимум должно быть 2 символа',
        value: 'Ошибка',
      },

      mail: {
        required: 'Укажите ваш e-mail',
        email: 'Неправильная почта',
      },

      what: {
        required: 'Напишите ваше мнение',
      },
    },

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxNumber: 0,
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
      },

      mail: {
        required: true,
        email: true,
      },

      what: {
        required: true,
      }
    },
  })

  new JustValidate('.modal__form', {

    colorWrong: '#FF5C00',

    messages: {
      login: {
        required: 'Укажите ваш логин',
        minLength: 'Минимум должно быть 2 символа',
        value: 'Ошибка',
      },

      password: {
        required: 'Укажите ваш пароль',
        password: 'Неправильный пароль',
      }
    },

    rules: {
      login: {
        required: true,
        minLength: 2,
        maxNumber: 0,
      },

      password: {
        required: true,
        password: true,
      },
    },
  })

  // Валидация формы

  // Модальные окна

  window.onload = function () {
    var modal = document.getElementById("MyModal");
    var modal1 = document.getElementById("MyModal1");
    var closeModal = document.getElementById("closeModal")
    var closeModal1 = document.getElementById("closeModal1")
    var btn = document.getElementsByClassName("header__ent");
    var body = document.getElementById("body");
    var buy = document.getElementById("buy")


    for (var i = 0; i < btn.length; i++) {
      btn[i].onclick = function () {
        modal.style.overflow = "scroll";
        modal.style.display = "block";
        body.style.overflow = "hidden";
        modalContent.classList.add("modal__show");
      }
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal1.style.display = "none";
        body.style.overflow = "scroll"
        modalContent.classList.remove("modal__show")
      }

      if (event.target == modal1) {
        modal1.style.display = "none";
        body.style.overflow = "scroll"
      }
    }

    closeModal.onclick = function () {
      modal.style.display = "none";
      body.style.overflow = "scroll"
      modalContent.classList.remove("modal__show")
    }

    closeModal1.onclick = function () {
      modal1.style.display = "none";
      body.style.overflow = "scroll"
    }

    buy.onclick = function () {
      modal1.style.overflow = "scroll";
      modal1.style.display = "block";
      body.style.overflow = "hidden";
    }

  };

  // Модальные окна

  // Кнопка "Попробовать еще"

  var link = document.getElementsByClassName("podcast__link__about")
  var block = document.getElementsByClassName("podcast__list-item");
  var mediaQuery = window.matchMedia('(max-width: 446px)')

  for (var i = 0; i < link.length; i++) {
    link[i].onclick = function () {
      for (var k = 0; k < block.length; k++) {
        block[k].classList.remove("off-list-1")
      }
    }

    if (mediaQuery.matches) {
      link[i].onclick = function () {
        for (var k = 0; k < block.length; k++) {
          block[k].classList.remove("off-list")
        }
      }
    }
  }

  // Кнопка "Попробовать еще"

  // Табы

  document.querySelectorAll('.guest__list__item__human').forEach(function (workLink) {

    workLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.guest__who').forEach(function (WorkContent) {
        WorkContent.classList.remove('guest__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('guest__active')

    })
  })

  // Табы
})

// Jquery код

// Навигация по хедеру

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

// Навигация по хедеру

// Аккордеон

$(function () {
  $("#accordion").accordion({
    header: ".guest__list__link",
    heightStyle: "content",
  });
});

// Аккордион

// Лист дропдаун

$(document).mouseup(function (e) {
  var container = $("#myDropdown");
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});

// Лист дропдаун
