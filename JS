const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// gap расстояние между блоками
//       display flex атрибутдля паположения элементов на странице
//       border-radius скругление
//        align-items выравнивание по высоте
//        height высота
//       padding-left
//       padding-right отступы 

// <h2 id="head1">О мероприятии</h2>
     
//<h2 id="head2">Партнеры</h2>
     
//<h2 id="head3">Контакты</h2>
// 1600 пикселей — для компьютеров;
// 960 пикселей — для планшетов;
// 375 пикселей — для телефонов.
//     <h2 id="head2">Партнеры</h2>
     
// <h2 id="head3">Контакты</h2>
