let LightBulb = function() {
    this.get = function(){
        this.power = +prompt('Введите мощность лампочки в Вт: ');
        this.costPower = +prompt('Введите стоимость электроэнергии в рублях: ');

        this.bulbWork();
    };
    this.bulbWork = function(){
        this.bulbStart();
        this.bulbEnd();
        this.resultTime = this.timeEnd - this.timeStart;
        this.resultCoast = (this.resultTime / 1000) * this.costPower * this.power;
        console.log('Время работы лампочки в мс: ' + this.resultTime + '\n'+'Расход за горение лампочки в рублях: '+ this.resultCoast);
    };
    this.bulbStart = function(){
        this.bulbEnable = confirm('Чтобы включить лампочку нажмите "ок"');
        if (this.bulbEnable){
            this.timeStart = new Date();
        }
    };
    this.bulbEnd = function(){
        this.bulbDisable = confirm('Чтобы выключить лампочку нажмите "ok"');
        if(this.bulbDisable){
            this.timeEnd = new Date();
        }
    };    
};

let ColorLightBulb = function() {
    LightBulb.apply(this, arguments);
    this.get = function(color) {
        this.color = color;
    };
};

let colorLightBulb = new ColorLightBulb();
colorLightBulb.get('red');
console.log(colorLightBulb);


let  ConstructDom = function() {
    this.create = function(parentElement, element) {
        let newParentEl = document.querySelector(parentElement);
        let newElement = document.createElement(element);
        newParentEl.appendChild(newElement);
    };
    // this.attr = function(element, attrs) {
    //     let searchElement = document.querySelector(attrs);
    //     let parentSearch = document.querySelector(element);
    //     searchElement.forEach(attr => {
    //         parentSearch.setAttribute(attr.name, attr.value);
    //     });
    // };

    this.html = function (element,value) {
        let serchElement = document.querySelector(element);
        return serchElement.innerHTML = value;
    };

    this.search = function(selector) {
       let searchSelec =  document.querySelector(selector);
        console.log(searchSelec);
    };

    this.addClass = function(element, className) {
        let searchElement = document.querySelector(element);
        searchElement.classList.add(className);
    };

    this.removeClass = function(element, className) {
        let searchElement = document.querySelector(element);
        searchElement.classList.remove(className);
    };

    this.toggleClass = function(element, className) {
        let searchElement = document.querySelector(element);
        searchElement.classList.toggle(className);
    };

    this.hasClass = function (element, className){
        let searchElement = document.querySelector(element + '.' + className);
        if(searchElement !==null ){
            console.log('element with class found:' + true);
        } else {
            console.log('element with class found:' + false);
        }
    };

    this.append = function (element, newElement, beforeElement) {
        let searchElement = document.querySelector(element);
        let newElem = document.createElement(newElement);
        let searchBeforeElement = document.querySelector(beforeElement);
        if(!element || !newElement) return false;

        if(!beforeElement) {
            searchElement.appendChild(newElem);
        } else {
            searchElement.insertBefore(newElem, searchBeforeElement);
        }
    };

    // let alertProv = function(){
    //     alert('привет!');
    // };

    // this.on = function(element, eventName, funcName) {
    //     let serchElement = document.querySelector(element);                
    //     serchElement.addEventListenner(eventName, funcName);            
        
    // };
};

let constructDom = new ConstructDom();

constructDom.create('body', 'span');
constructDom.create('body', 'div');
constructDom.create('div', 'p');

// constructDom.attr('span', 'span');
constructDom.html('span', 'hi!');
constructDom.search('body');
// constructDom.addClass('span', 'new-class');
// constructDom.removeClass('span', 'new-class');
constructDom.toggleClass('span', 'new-class');
constructDom.hasClass('span', 'new-class');
constructDom.append('div', 'h1');

// constructDom.on('div', 'click', alertProv());


console.log(constructDom);