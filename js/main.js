var siteData = [
    {
        key: 'popular-cities',
        target: 'popCity',
        itemData: [
            {
                title: 'Istanbul',
                price: 899.99,
                imgSrc: 'img/unsplash_3-QB-YKxTKY.jpg',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            },
            {
                title: 'London',
                price: 1199.99,
                imgSrc: 'img/unsplash_EXdXLrZXS9Q.jpg',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            },
            {
                title: 'Beijing',
                price: 2399.99,
                imgSrc: 'img/unsplash_9v_Nork6P1w.jpg',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            },
            {
                title: 'Seoul',
                price: 2199.99,
                imgSrc: 'img/sava-bobov-eVa2FK83K6w-unsplash.jpg',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            },
            {
                title: 'Tokyo',
                price: 2299.99,
                imgSrc: 'img/jezael-melgoza-7H77FWkK_x4-unsplash.jpg',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
            }
        ]
    },
    {
        key: 'bestselling-airlines',
        target: 'bestsellingAirlines',
        itemData: [
            {
                title: 'British Airways',
                priceFrom: 899.99,
                imgSrc: 'img/unsplash__dYoARMMtQw.jpg',
                text: 'London Heathrow to Dubai'
            },
            {
                title: 'Virgin Atlantic',
                priceFrom: 1899.99,
                imgSrc: 'img/unsplash_lUGWwDAWpEk.jpg',
                text: 'London Heathrow to NEW YORK'
            },
            {
                title: 'Emirates',
                priceFrom: 2899.99,
                imgSrc: 'img/unsplash_CdlhHc3nEkk.jpg',
                text: 'London Gatwick to Dubai'
            },
            {
                title: 'Air Canada',
                priceFrom: 2599.99,
                imgSrc: 'img/john-mcarthur-X_MOr6oa4-k-unsplash.jpg',
                text: 'Toronto to London'
            }
        ]
    },
    {
        key: 'travel-tips',
        target: 'travelTips',
        itemData: [
            {
                title: 'Traveling during Covid',
                imgSrc: 'img/unsplash_11QO8GRxcPU.jpg'
            },
            {
                title: 'New York airport guide',
                imgSrc: 'img/unsplash_6_741dg4VwY.jpg'
            },
            {
                title: '10 films that will inspire you to visit the USA',
                imgSrc: 'img/unsplash_PeFk7fzxTdk.jpg'
            },
            {
                title: 'Top cultural attractions in Abu Dhabi',
                imgSrc: 'img/unsplash_0LdLEfxzG1k.jpg'
            },
        ]
    }
];

$(function(){

    // Enable date range
    $('input[name="selectDateRange"]').daterangepicker({
        opens: 'left',
        timePicker: true,
        singleDatePicker: false,
        locale: {
            format: 'YYYY-MM-DD',
            
        }
    });
    $('input[name="selectDateRange"]').val('Select departure and returning dates..');
    $('input[name="selectDateArrivingHotel"]').daterangepicker({
        opens: 'left',
        timePicker: true,
        singleDatePicker: true,
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    $('input[name="selectDateArrivingHotel"]').val('Arriving on..');
    $('input[name="selectDateLeavingHotel"]').daterangepicker({
        opens: 'left',
        timePicker: true,
        singleDatePicker: true,
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    $('input[name="selectDateLeavingHotel"]').val('Leaving on..');
    

    // Enable checked label color
    $('label').each(function(){

        if(this.hasAttribute('is-checked')){

            this.addEventListener('click', function(){
                var isChecked = this.getAttribute('is-checked');
                if(isChecked=="false"){
                    $('label[is-checked="true"').each(function(){
                        this.setAttribute('is-checked', 'false');
                    });
                    this.setAttribute('is-checked', 'true');
                    if(this.getAttribute('for')=="oneWay"){
                        
                    
                        $('input[name="selectDateRange"]').daterangepicker({
                            opens: 'left',
                            timePicker: true,
                            singleDatePicker: true,
                            locale: {
                                format: 'YYYY-MM-DD'
                            }
                        });
                        $('input[name="selectDateRange"]').val('Select departure date..');

                    } else {
                        
                        // Enable date range
                        $('input[name="selectDateRange"]').daterangepicker({
                            opens: 'left',
                            timePicker: true,
                            singleDatePicker: false,
                            locale: {
                                format: 'YYYY-MM-DD'
                            }
                        });
                        $('input[name="selectDateRange"]').val('Select departure and returning dates..');
                    }
                }
            });
        }
    });

    // Apply width wrapper on section elements
    sectionWidthWrapper();

    // Initialize selection options
    changeLang();
    changeCurrency();

    // Render components
    createComponent('popular-cities');
    createComponent('bestselling-airlines');
    createComponent('travel-tips');

    // Initialize dropdown button arrow flip
    dropdownArrowFlip();

    // Initialize draggable functionality for all carousels
    enableDraggableCarousel();

    // Stepper Input---------------------------------------


    // <div class="amount main-item">
    //     <button onclick="deductItem(${i}); this.parentNode.querySelector('input[type=number]').stepDown()" id="btn-dn" class="deduct-${i}">
    //         <i class="fas fa-minus"></i>
    //     </button>
    //     <input id="quantity-${i}" class="qty-list qty quantity-${i}" min="0" name="quantity-${i}" value="${arrMenu[i].incart}" type="number" onchange="inputItem(this, ${i})">
    //     <button onclick="addItems(${i}); this.parentNode.querySelector('input[type=number]').stepUp()" id="btn-up" class="add-${i}">
    //         <i class="fas fa-plus"></i>
    //     </button>
    // </div>
                                        
    enableStepperInput();

    // $('.stepper-input').each(function(){
    //     var subBtn = $(this).find('.btn-left');
    //     var inputBox = $(this).find('input.input-box');
    //     var addBtn = $(this).find('.btn-right');
    //     console.log(inputBox);
    //     subBtn.on('click', function(){
    //         inputBox.val(parseInt(inputBox.val()-1));
    //     });
    //     addBtn.on('click', function(){
    //         inputBox.val(parseInt(inputBox.val()+1));
    //     });
    // });
    // $(".btn-left").on("click", function() {
    //     $(".input-box").val(parseInt($(".input-box").val())-1);
    //  }); 
    //  $(".btn-right").on("click", function() {
    //     $(".input-box").val(parseInt($(".input-box").val())+1);
    //  }); 

});

function enableStepperInput(){
    document.querySelectorAll('.stepper-input').forEach(stepper=>function(){
        console.log(stepper.length);
        var subBtn = stepper.querySelector('.btn-left');
        console.log(subBtn);
        var inputBox = stepper.querySelector('.input-box');
        console.log(inputBox);
        var addBtn = stepper.querySelector('.btn-right');
        console.log(addBtn);
        console.log(inputBox.value);
        subBtn.addEventListener('click', function(){
            inputBox.value = parseInt(inputBox.value) - 1;
        });
        addBtn.addEventListener('click', function(){
            inputBox.value = parseInt(inputBox.value) + 1;
        });
    });
}

// Restrict section div width
function sectionWidthWrapper(){
    var widthWrapper = '1332px';
    var sectionDivList = document.querySelectorAll('section.container, .siteFooter nav');
    sectionDivList.forEach(section=>{
        section.style.maxWidth = widthWrapper;
        section.classList.add('mx-auto');
    });
}

// Change language
function changeLang(){
    var currLang = document.getElementById('dropdownLang');
    var langList = document.querySelectorAll('[aria-labelledby="dropdownLang"] .dropdown-item');
    langList.forEach(lang=>{
        lang.addEventListener('click', function(){
            var newFlag = lang.getAttribute('data-content');
            var newLang = lang.innerText;
            var replacedFlag = currLang.getAttribute('data-content');
            var replacedLang = currLang.innerText;
            currLang.querySelector('.flag-icon').classList.remove(`flag-icon-${replacedFlag}`);
            currLang.querySelector('.flag-icon').classList.add(`flag-icon-${newFlag}`);
            currLang.setAttribute('data-content', `${newFlag}`);
            currLang.innerHTML = `<span class="flag-icon flag-icon-${newFlag}"></span>${newLang}`;
            lang.querySelector('.flag-icon').classList.remove(`flag-icon-${newFlag}`);
            lang.querySelector('.flag-icon').classList.add(`flag-icon-${replacedFlag}`);
            lang.setAttribute('data-content', `${replacedFlag}`);
            lang.innerHTML = `<span class="flag-icon flag-icon-${replacedFlag}"></span>${replacedLang}`;
        });
    });
}

// Change Currency
function changeCurrency(){
    var currCurrency = document.getElementById('dropdownCurrency');
    var currencyList = document.querySelectorAll('[aria-labelledby="dropdownCurrency"] .dropdown-item');
    currencyList.forEach(currency=>{
        currency.addEventListener('click', function(){
            var replacedCurrency = currCurrency.getAttribute('data-content').toUpperCase();
            currCurrency.innerHTML = currency.getAttribute('data-content').toUpperCase();
            currency.innerHTML = replacedCurrency;
        });
    });
}

// Create component by case
function createComponent(key){

    siteData.forEach(list => {
        if(list.key==key){
            list.itemData.forEach(item => {
                var textString = '';
                switch (key){
                    case 'popular-cities':
                        textString =
                            `<div class="carousel-cell">
                                <div class="card container">
                                    <div class="img-container">
                                        <img src="${item.imgSrc}" class="card-img" alt="${item.title}">
                                    </div>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-center">
                                            <h5 class="card-title mx-auto">Cheap flights to <span>${item.title}</span></h5>
                                        </div>
                                        <p class="d-flex flex-column">
                                            <span>Price starts from</span>
                                            <span class="price">${item.price}</span>
                                        </p>
                                        <p class="card-text">${item.description}</p>
                                    </div>
                                </div>
                            </div>`;
                        break;
                    case 'bestselling-airlines':
                        textString =
                            `<div class="carousel-cell">
                                <div class="card container">
                                    <div class="img-container">
                                        <img src="${item.imgSrc}" class="card-img" alt="${item.title}">
                                    </div>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">${item.title.toUpperCase()}</h5>
                                        <p class="card-text prices">Prices from ${item.priceFrom}</p>
                                        <p class="card-text route">${item.text}</p>
                                    </div>
                                </div>
                            </div>`;
                        break;
                    case 'travel-tips':
                        textString =
                            `<div class="card p-0">
                                <div class="card-img-overlay p-0 d-flex justify-content-center align-items-center">
                                    <h5 class="card-title">${item.title}</h5>
                                </div>
                                <div class="img-container">
                                    <img src="${item.imgSrc}" class="card-img" alt="${item.title}">
                                </div>
                            </div>`;
                        break;
                }
                
                var cardElem = createElementFromString('div', textString);
                document.getElementById(list.target).appendChild(
                    cardElem
                );
            });
        }
    });
}

// Create a HTML element from a string
function createElementFromString(type, string){
    var elem = document.createElement(type);
    elem.innerHTML = string.trim();
    //console.log(elem.firstChild);
    return elem.firstChild;
}

// Enable Flickity Carousel on all image carousels
function enableDraggableCarousel(){
    var carouselList = document.querySelectorAll('.imageCarousel');
    carouselList.forEach(carousel=>{
        //CAROUSEL SETTINGS
        var $imagesCarousel = new Flickity( carousel, {
            /* options, defaults listed */
        
            accessibility: false,
            /* enable keyboard navigation, pressing left & right keys */
        
            autoPlay: false,
            pauseAutoPlayOnHover: false,
            /* advances to the next cell
            if true, default is 3 seconds
            or set time between advances in milliseconds
            i.e. `autoPlay: 1000` will advance every 1 second */
        
            cellAlign: 0,
            /* alignment of cells, 'center', 'left', or 'right'
            or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) */
        
            // cellSelector: '.topic-switcher__item',
            /* specify selector for cell elements */
        
            contain: true,
            /* will contain cells to container
            so no excess scroll at beginning or end
            has no effect if wrapAround is enabled */
        
            draggable: true,
            /* enables dragging & flickin
            freeScroll: false,
            enables content to be freely scrolled and flicked
            without aligning cells */
            freeScroll: true,
        
            friction: 0.2,
            /* smaller number = easier to flick farther */
        
            initialIndex: 0,
            /* zero-based index of the initial selected cell */
        
            lazyLoad: false,
            /* enable lazy-loading images
            set img data-flickity-lazyload="src.jpg"
            set to number to load images adjacent cells */
        
            percentPosition: false,
            /* sets positioning in percent values, rather than pixels
            Enable if items have percent widths
            Disable if items have pixel widths, like images */
        
            prevNextButtons: false,
            /* creates and enables buttons to click to previous & next cells */
        
            pageDots: false,
            /* create and enable page dots */
        
            resize: false,
            /* listens to window resize events to adjust size & positions */
        
            rightToLeft: false,
            /* enables right-to-left layout */
        
            setGallerySize: true,
            /* sets the height of gallery
            disable if gallery already has height set with CSS */
        
            watchCSS: false,
            /* watches the content of :after of the element
            activates if #element:after { content: 'flickity' }
            IE8 and Android 2.3 do not support watching :after
            set watch: 'fallbackOn' to enable for these browsers */
        
            wrapAround: false
            /* at end of cells, wraps-around to first for infinite scrolling */
        });
    });
}

// Dropdown arrow flip event listener
function dropdownArrowFlip(){
    document.querySelectorAll('.dropdown-toggle').forEach(dropdownBtn =>{
        console.log(dropdownBtn);
        dropdownBtn.addEventListener('click', () => {
            if(dropdownBtn.classList.contains('active')){
                dropdownBtn.classList.remove('active');
            } else {
                dropdownBtn.classList.add('active');
            }
        });
    });
}