document.addEventListener('DOMContentLoaded', function () {

/********** Rozwijane menu ****************/

const firstListEl = document.querySelector('.page-nav-list-el:first-child');
const subList = document.querySelector('.page-nav-sublist');

firstListEl.addEventListener('mouseover', function () {
    subList.style.display = 'block';
});

firstListEl.addEventListener('mouseout', function () {
    subList.style.display = 'none';
});

/************* Znikanie nazwy produktu po najechaniu (i ponowne pojawianie się po zjechaniu)****************/

const productsTitleBg = document.querySelectorAll('.products-title-backg');
const productsImg = document.querySelectorAll('[class^="products-img-"]');

for (let i=0; i<productsImg.length; i++) {

    productsImg[i].addEventListener('mouseover', function () {
            productsTitleBg[i].style.display = 'none';
    });
    productsImg[i].addEventListener('mouseout', function () {
        productsTitleBg[i].style.display = 'block';
    });
}

/************* Slider ****************/

const slideImg = document.querySelectorAll('.banner-chair li');
const bannerPrev = document.querySelector('.banner-prev');
const bannerNext = document.querySelector('.banner-next');
let pictureIndex = 0;

slideImg[pictureIndex].style.display = 'block';


    bannerNext.addEventListener('click', function () {
        slideImg[pictureIndex].style.display = 'none';
        pictureIndex++;
        if (pictureIndex >= slideImg.length) {
            pictureIndex = 0;
        }
        slideImg[pictureIndex].style.display = 'block';
    });

    bannerPrev.addEventListener('click', function () {
        slideImg[pictureIndex].style.display = 'none';
        pictureIndex--;
        if (pictureIndex < 0) {
            pictureIndex = slideImg.length-1;
        }
        slideImg[pictureIndex].style.display = 'block';
    });

    const listArrows = document.querySelectorAll('.list_arrow');
    const listPanels = document.querySelectorAll('.list_panel');

    for (let i=0; i<listArrows.length; i++) {
        listArrows[i].addEventListener('click', function () {
            if (listPanels[i].style.display === 'block') {
                listPanels[i].style.display = 'none';
            }
            else {
                listPanels[i].style.display = 'block';
            }
        })
    }

/************** Kalkulator ******************/

    /*Elementy z kodu HTML*/
    //Formularz z lewej strony
    const panelElements = document.querySelectorAll('.list_panel li');
    const checkboxTransport = document.querySelector('#transport');
    // Tabelka - lewy panel (nazwy)
    const title = document.querySelector('.panel_left .title');
    const color = document.querySelector('.panel_left .color');
    const pattern = document.querySelector('.panel_left .pattern');
    const transport = document.querySelector('.panel_left .transport');
    // Tabelka - prawy panel (ceny)
    const titleValue = document.querySelector('.panel_right .title');
    const colorValue = document.querySelector('.panel_right .color');
    const patternValue = document.querySelector('.panel_right .pattern');
    const transportValue = document.querySelector('.panel_right .transport');
    // Tabelka -suma (cena całkowita)
    const sum = document.querySelector('.sum strong');
    /*Zmienne pomocnicze*/
    let sumValue = 0;
    let titleValueNumber = 0;
    let colorValueNumber = 0;
    let patternValueNumber = 0;
    let transportValueNumber = 0;

    for (let i=0; i<panelElements.length; i++) {
        panelElements[i].addEventListener('click', function () {
            if (i > -1 && i < 3) { //Nazwa fotela
                title.innerText = this.innerText;
                titleValue.innerText = this.dataset.price;
                titleValueNumber = Number(this.dataset.price);
            }
            else if (i > 2 && i < 6) { //Kolor fotela
                color.innerText = this.innerText;
                colorValue.innerText = this.dataset.price;
                colorValueNumber = Number(this.dataset.price);
            }
            else { //Materiał
                pattern.innerText = this.innerText;
                patternValue.innerText = this.dataset.price;
                patternValueNumber = Number(this.dataset.price);
            }
            sumValue = titleValueNumber + colorValueNumber + patternValueNumber;
            sum.innerText = sumValue + transportValueNumber + ' zł';
        })
    }

    checkboxTransport.addEventListener('click', function () {
        if (this.checked) {
            transport.innerText = 'Transport';
            transportValue.innerText = this.dataset.transportPrice;
            transportValueNumber = Number(this.dataset.transportPrice);
            sum.innerText = sumValue + transportValueNumber + ' zł';
        }
        if (!this.checked) {
            transport.innerText = '';
            transportValue.innerText = '';
            sum.innerText = sumValue + ' zł';

        }

    });

/************* Wyróżnianie planu ****************/

    const pricelistBoxes = document.querySelectorAll('.pricelist-box');

    for (let i=0; i<pricelistBoxes.length; i++) {
        pricelistBoxes[i].addEventListener('mouseover', function () {
            this.classList.add('pricelist-box-highlighted');
        });
        pricelistBoxes[i].addEventListener('mouseout', function () {
            this.classList.remove('pricelist-box-highlighted');
        })
    }










});