document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы бургера и меню
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbarToggler = document.querySelector('.navbar-toggler'); // Кнопка-бургер

    // Слушатель события раскрытия меню
    navbarCollapse.addEventListener('show.bs.collapse', function () {
      console.log('Меню раскрыто');
      mobileMenu.classList.add('menu-open'); // Добавляем класс при раскрытии
      navbarToggler.classList.add('toggler-icon-close'); // Меняем иконку на крестик
      navbarToggler.classList.remove('toggler-icon-open'); // Убираем иконку бургера
      console.log(mobileMenu.classList); // Проверяем, добавился ли класс
    });

    // Слушатель события закрытия меню
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      console.log('Меню закрыто');
      mobileMenu.classList.remove('menu-open'); // Удаляем класс при закрытии
      navbarToggler.classList.remove('toggler-icon-close'); // Убираем иконку крестика
      navbarToggler.classList.add('toggler-icon-open'); // Возвращаем иконку бургера
      console.log(mobileMenu.classList); // Проверяем, удалился ли класс
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})