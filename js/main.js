window.onload = function () {
  let quantityBlock = document.getElementById('clients-number')
  let mounthCost = document.getElementById('calc-mounth-cost')
  let dayCostBlock = document.getElementsByClassName('cost-day')[0]
  let dayCost = document.getElementById('calc-day-cost')
  let tariffClients = document.getElementById('tariff__clients-number')
  let moreCost = document.getElementById('more-cost__cost')
  let higherWrapper = document.getElementsByClassName('higher-wrapper')[0]
  let calcMain = document.getElementsByClassName('calc-info')[0]
  quantityBlock.oninput = function () {
    let quantity = quantityBlock.value
    if (quantity <= 200) {
      mounthCost.textContent = 'Бесплатно'
      tariffClients.textContent = 'до 200 клиентов'
      moreCost.textContent = '0 ₽ в день'
      if (dayCostBlock.classList.contains('cost-day_active')) {
        dayCostBlock.classList.remove('cost-day_active')
      }
    } else if ((quantity >= 201) && (quantity <= 500)) {
      mounthCost.textContent = '590 ₽'
      dayCost.textContent = '19,67 ₽'
      tariffClients.textContent = 'от 201 до 500 клиентов'
      moreCost.textContent = '3,4 ₽ в день'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 501) && (quantity <= 1000)) {
      mounthCost.textContent = '612 ₽'
      dayCost.textContent = '20,4 ₽'
      tariffClients.textContent = 'от 501 до 1 000 клиентов'
      moreCost.textContent = '3,4 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 1001) && (quantity <= 2000)) {
      mounthCost.textContent = '1 056 ₽'
      dayCost.textContent = '35,2 ₽'
      tariffClients.textContent = 'от 1 001 до 2 000 клиентов'
      moreCost.textContent = '3,2 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 2001) && (quantity <= 4000)) {
      mounthCost.textContent = '1 890 ₽'
      dayCost.textContent = '63 ₽'
      tariffClients.textContent = 'от 2 001 до 4 000 клиентов'
      moreCost.textContent = '3 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 4001) && (quantity <= 8000)) {
      mounthCost.textContent = '3 444 ₽'
      dayCost.textContent = '114,8 ₽'
      tariffClients.textContent = 'от 4 001 до 8 000 клиентов'
      moreCost.textContent = '2,8 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 8001) && (quantity <= 16000)) {
      mounthCost.textContent = '6 318 ₽'
      dayCost.textContent = '210,6 ₽'
      tariffClients.textContent = 'от 8 001 до 16 000 клиентов'
      moreCost.textContent = '2,6 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 16001) && (quantity <= 32000)) {
      mounthCost.textContent = '11 592 ₽'
      dayCost.textContent = '386,4 ₽'
      tariffClients.textContent = 'от 16 001 до 32 000 клиентов'
      moreCost.textContent = '2,4 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if ((quantity >= 32001) && (quantity <= 64000)) {
      mounthCost.textContent = '21 186 ₽'
      dayCost.textContent = '706,2 ₽'
      tariffClients.textContent = 'от 32 001 до 64 000 клиентов'
      moreCost.textContent = '2,2 ₽/день за каждые 100 клиентов'
      if (!(dayCostBlock.classList.contains('cost-day_active'))) {
        dayCostBlock.classList.add('cost-day_active')
      }
    } else if (quantity >= 64001) {
      if (!(higherWrapper.classList.contains('higher-wrapper_active'))) {
        higherWrapper.classList.add('higher-wrapper_active')
        calcMain.classList.add('calc-info_disabled')
      }
    }
    if (quantity <= 64000) {
      higherWrapper.classList.remove('higher-wrapper_active')
      calcMain.classList.remove('calc-info_disabled')
    }
  }

  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
  let body = document.getElementsByTagName('body')[0]

  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
      body.setAttribute('style', 'overflow: hidden;')
    })
  });

  closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    body.setAttribute('style', 'overflow: scroll;')
  });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
      body.setAttribute('style', 'overflow: scroll;')
    }
  });

}