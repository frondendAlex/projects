<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Кофе машина</title>
    
    <link rel="stylesheet" href="style/css.css">
</head>
<body>

    <!-- Section-coffee -->
    <section class="section section-coffee hidden">
        <div class="container">
            <div class="coffee">
                <h1 class="coffee__title">Кофемашина</h1>
                <div class="coffee__wrap">
                    <div class="coffee__content">

                        <div class="coffee__content-item active">
                            <div class="coffee__content-img">
                                <button class="coffee__content-btn" data-name="Латте" data-price="50">
                                    <img class="coffee__name-img" src="image/img/coffe/coffe-latte.jpg" alt="Кофе латте">
                                </button>
                            </div>
                            <div class="coffee__content-text">
                                <p class="coffee__name-text">Латте - <span class="coffee__name-price">50 ₽</span></p>
                            </div>
                        </div>

                        <div class="coffee__content-item">
                            <div class="coffee__content-img">
                                <button class="coffee__content-btn" data-name="Капучино" data-price="68">
                                    <img class="coffee__name-img" src="image/img/kofe-latte_4.jpg" alt="Кофе">
                                </button>
                            </div>
                            <div class="coffee__content-text">
                                <p class="coffee__name-text">Капучино - <span class="coffee__name-price">68 ₽</span></p>
                            </div>
                        </div>

                        <div class="coffee__content-item">
                            <div class="coffee__content-img">
                                <button class="coffee__content-btn" data-name="Американо" data-price="54">
                                    <img class="coffee__name-img" src="image/img/coffe/coffe-americano.jpeg" alt="Кофе">
                                </button>
                            </div>
                            <div class="coffee__content-text">
                                <p class="coffee__name-text">Американо - <span class="coffee__name-price">54 ₽</span></p>
                            </div>
                        </div>

                    </div>
                    
                    <div class="coffee__center">
                        <div class="coffee__center-block">
                            <div class="coffee__center-block-item">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="coffee__center-block-item">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="coffee__center-get">
                            <div class="coffee__center-get-img">
                                <!-- <img src="image/img/cup3.png" alt="Стакан"> -->
                            </div>
                            
                        </div>
                    </div>

                    <div class="coffee__payment">
                        <div class="coffee__payment-wrap">
                            <div class="coffee__payment-display coffe__display">
                                <div class="coffe__display-body">
                                    <span class="coffe__display-date"></span>
                                </div>
                                <p class="coffee__display-text">Выбрано: 
                                    <span></span>
                                </p>

                                <div class="coffee__display-error">
                                    <span>Не хватает средств</span>
                                </div>

                                <input class="coffee__payment-price" type="number" placeholder="Внесите сумму">
                            </div>
                            <div class="cofee__payment-receiver">
                                <img src="image/img/bill_acc.png" alt="Купюра приемник">
                            </div>
                            <div class="coffee__payment-block">
                                <button class="coffee__payment-cook" go="1">
                                    <span class="coffee__payment-cook-btn">Добавьте свое Кофе</span>
                                </button>
                                <div class="coffee__payment-info">
                                    <span class="coffee__payment-info-text">Добавьте кофе</span>
                                    <img class="coffee__payment-info-img" src="image/img/arrow.png" alt="arrow">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- // Section-coffee -->

    <!-- greeting -->
    <div class="greeting">
        <div class="greeting__overlow"></div>
        <div class="greeting__wrap">
            <div class="greeting__icon">
                <img src="image/img/preloader.gif" alt="">
            </div>
            <div class="greeting__content">
                <span class="greeting__content-name"></span>
                <h3 class="greeting__content-title"></h3>
            </div>
        </div>
    </div>
    <!-- // greeting -->

     <!-- Preloader -->
     <div class="progress">
        <div class="progress__row">
          <div class="progress__content">
            <h2 class="progress__content-title">Ваше кофе готовиться...</h2>
          </div>
          <div class="progress__info">
            <div class="progress__coffee">
                <div class="progress__bar"><span>0%</span></div>
            </div>
          </div>
        </div>
      </div>
    <!-- // Preloader -->

    <!-- Modal -->
    <div class="modal">
        <div class="modal__overlow"></div>
        <div class="modal__wrap">

            <div class="modal__count">
                <div class="modal__count-text">Окно закроется через<span>5</span></div>
            </div>

            <div class="modal__content">
                <h2 class="modal__title">Чек</h2>
                <div class="modal__content-info">
                    <p class="modal__content-date">Дата покупки: <span>00:00:00</span></p>
                    <div class="modal__content-coffe">
                        <div class="modal__coffe-title">Кофе выбрано: <span></span></div>
                    </div>
                    <div class="modal__cost">
                        <div class="modal__content-title">Ваша сумма: <span class="modal__content-cost"></span></div>
                    </div>
                    <div class="modal__change">
                        <div class="modal__content-title">Ваша сдача: <span class="modal__content-change"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- // Modal -->

    <!-- addcoffee -->
    <div class="addcoffee">
        <div class="addcoffee__overlow"></div>
        <div class="addcoffee__wrap">
            <div class="addcoffee__content">
                <div class="addcoffee__close">+</div>
                <form class="addcoffee__form">
                    <h3 class="addcoffee__form-title">Добавить свое кофе</h3>
                    <div class="addcoffee__form-wrap">

                        <div class="addcoffee__form-left">

                            <div class="addcoffee__form-item">
                                <div class="addcoffee__form-field">
                                    <input class="addcoffee__form-input addcoffee__form-input-file" accept="image/png, image/jpeg" id="input__file" type="file">
                                    <label class="addcoffee__form-file-label" for="input__file">
                                        <span>Прикрепить файл</span>
                                    </label>
                                </div>
                            </div>
                           
                            <div class="addcoffee__form-item">
                                <div class="addcoffee__form-field">
                                    <input class="addcoffee__form-input addcoffee__form-input-name" type="text">
                                    <label class="addcoffee__form-text">Введите название кофе</label>
                                </div>
                            </div>
    
                            <div class="addcoffee__form-item">
                                <div class="addcoffee__form-field">
                                    <input class="addcoffee__form-input addcoffee__form-input-cena" type="number">
                                    <label class="addcoffee__form-text">Введите цену</label>
                                </div>
                            </div>
    
                            <button class="addcoffee__form-btn" type="button">Добавить</button>
                        </div>
                        <div class="addcoffee__form-right">
                            <div class="addcoffee__form-right-wrap">
                                <div class="addcoffee__form-right-img">
                                    <img class="addcoffee__form-right-images" src="" alt="Картинка">
                                </div>
                                <span class="addcoffee__form-right-text">Формат PNG и JPEG</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- // addcoffee -->

    <!-- modalname -->
    <div class="modalname">
        <div class="modalname__overlow"></div>
        <div class="modalname__wrap">
            <div class="modalname__content">
                <label class="modalname__text">Напишите свое имя</label>
                <span class="modalname__text-error">Вы не ввели имя</span>
                <input class="modalname__text-input" type="text" placeholder="Ваше имя">
                <button class="modalname__btn">Дальше</button>
            </div>
        </div>
    </div>

    <audio class="audio" src="image/img/audi/zzz.mp3"></audio>
    <audio class="audio1" src="image/img/audi/aaa.mp3"></audio>
    

    <script src="js/main.js"></script>
    <script src="js/proba.js"></script>
</body>
</html>
