import { flags } from "./flags.js";

const $formConverter = document.querySelector('.сonverter__body'),
$choisesItem = document.querySelectorAll('.choices__item');
const $converterInput = document.getElementById('input'),
    $converterRezalt = document.getElementById('rezalt');
const $converterSelectInput = document.getElementById('converter-insert');
const choicesInput = new Choices($converterSelectInput, {
    searchEnabled: false,
    itemSelectText: '',
    editItems: false,
    shouldSort: false,
    choices: [
        {value: 'RUR',
        label: '<span class="label-text">Российский рубль</span><span class="label-value">RUR</span>',
        id: 1},
        {value: 'USD',
        label: '<span class="label-text">Доллар США</span><span class="label-value">USD</span>',
        id: 2},
        {value: 'EUR',
        label: '<span class="label-text">Евро</span><span class="label-value">EUR</span>',       
        id: 3},
        {value: 'GBP',
        label: '<span class="label-text">Фунт стерлингов</span><span class="label-value">GBR</span>',
        id: 4},
        {value: 'AUD',
        label: '<span class="label-text">Австралийский доллар</span><span class="label-value">AUD</span>',        
        id: 5},
        {value: 'AZN',
        label: '<span class="label-text">Азербайджанский манат</span><span class="label-value">AZN</span>',
        id: 6},
        {value: 'AMD',
        label: '<span class="label-text">Армянский драм</span><span class="label-value">AMD</span>',        
        id: 7},
        {value: 'BYN',
        label: '<span class="label-text">Белорусский рубль</span><span class="label-value">BYN</span>',
        id: 8},
        {value: 'BGN',
        label: '<span class="label-text">Болгарский лев</span><span class="label-value">BGN</span>',        
        id: 9},
        {value: 'BRL',
        label: '<span class="label-text">Бразильский реал</span><span class="label-value">BLR</span>',
        id: 10},
        {value: 'HUF',
        label: '<span class="label-text">Венгерский форинт</span><span class="label-value">HUF</span>',       
        id: 11},
        {value: 'KRW',
        label: '<span class="label-text">Вона Республики Корея</span><span class="label-value">KRN</span>',
        id: 12},
        {value: 'DKK',
        label: '<span class="label-text">Датская крона</span><span class="label-value">DKK</span>',
        id: 13},
        {value: 'INR',
        label: '<span class="label-text">Индийская рупия</span><span class="label-value">INR</span>',
        id: 14},
        {value: 'KZT',
        label: '<span class="label-text">Казахстанский тенге</span><span class="label-value">KZT</span>',
        id: 15},
        {value: 'CAD',
        label: '<span class="label-text">Канадский доллар</span><span class="label-value">CAD</span>',
        id: 16},
        {value: 'KGS',
        label: '<span class="label-text">Киргизский сом</span><span class="label-value">KGS</span>',
        id: 17},
        {value: 'CNY',
        label: '<span class="label-text">Китайский юань</span><span class="label-value">CNY</span>',
        id: 18},
        {value: 'MDL',
        label: '<span class="label-text">Молдавский лей</span><span class="label-value">MDL</span>',
        id: 19},
        {value: 'RON',
        label: '<span class="label-text">Новый румынский лей</span><span class="label-value">RON</span>',
        id: 20},
        {value: 'TMT',
        label: '<span class="label-text">Новый туркменский манат</span><span class="label-value">TMT</span>',
        id: 21},
        {value: 'NOK',
        label: '<span class="label-text">Норвежская крона</span><span class="label-value">NOK</span>',
        id: 22},
        {value: 'PLN',
        label: '<span class="label-text">Польский злотый</span><span class="label-value">PLN</span>',
        id: 23},
        {value: 'SGD',
        label: '<span class="label-text">Сингапурский доллар</span><span class="label-value">SGD</span>',
        id: 2},
        {value: 'TJS',
        label: '<span class="label-text">Таджикский сомони</span><span class="label-value">TJS</span>',
        id: 25},
        {value: 'TRY',
        label: '<span class="label-text">Турецкая лира</span><span class="label-value">TRY</span>',
        id: 26},
        {value: 'UZS',
        label: '<span class="label-text">Узбекский сум</span><span class="label-value">UZS</span>',
        id: 27},
        {value: 'UAH',
        label: '<span class="label-text">Украинская гривна</span><span class="label-value">UAN</span>',
        id: 28},
        {value: 'CZK',
        label: '<span class="label-text">Чешская крона</span><span class="label-value">CZK</span>',
        id: 29},
        {value: 'SEK',
        label: '<span class="label-text">Шведская крона</span><span class="label-value">SEK</span>',
        id: 30},
        {value: 'CHF',
        label: '<span class="label-text">Швейцарский франк</span><span class="label-value">CHF</span>',
        id: 31},
        {value: 'ZAR',
        label: '<span class="label-text">Южноафриканский рэнд</span><span class="label-value">ZAR</span>',
        id: 32},
        {value: 'JPY',
        label: '<span class="label-text">Японская иена</span><span class="label-value">JPY</span>',
        id: 33},
        {value: 'XDR',
        label: '<span class="label-text">(специальные права заимствования)</span><span class="label-value">XDR</span>',
        id: 34},
    ],
});

const $converterSelectRezalt = document.getElementById('converter-rezalt');
const choicesRezalt = new Choices($converterSelectRezalt, {
    searchEnabled: false,
    itemSelectText: '',
    editItems: false,
    shouldSort: false,
    choices: [
        {value: 'USD',
        label: '<span class="label-text">Доллар США</span><span class="label-value">USD</span>',
        id: 1},
        {value: 'RUR',
        label: '<span class="label-text">Российский рубль</span><span class="label-value">RUR</span>',
        id: 2},        
        {value: 'EUR',
        label: '<span class="label-text">Евро</span><span class="label-value">EUR</span>',       
        id: 3},
        {value: 'GBP',
        label: '<span class="label-text">Фунт стерлингов</span><span class="label-value">GBR</span>',
        id: 4},
        {value: 'AUD',
        label: '<span class="label-text">Австралийский доллар</span><span class="label-value">AUD</span>',        
        id: 5},
        {value: 'AZN',
        label: '<span class="label-text">Азербайджанский манат</span><span class="label-value">AZN</span>',
        id: 6},
        {value: 'AMD',
        label: '<span class="label-text">Армянский драм</span><span class="label-value">AMD</span>',        
        id: 7},
        {value: 'BYN',
        label: '<span class="label-text">Белорусский рубль</span><span class="label-value">BYN</span>',
        id: 8},
        {value: 'BGN',
        label: '<span class="label-text">Болгарский лев</span><span class="label-value">BGN</span>',        
        id: 9},
        {value: 'BRL',
        label: '<span class="label-text">Бразильский реал</span><span class="label-value">BLR</span>',
        id: 10},
        {value: 'HUF',
        label: '<span class="label-text">Венгерский форинт</span><span class="label-value">HUF</span>',       
        id: 11},
        {value: 'KRW',
        label: '<span class="label-text">Вона Республики Корея</span><span class="label-value">KRN</span>',
        id: 12},
        {value: 'DKK',
        label: '<span class="label-text">Датская крона</span><span class="label-value">DKK</span>',
        id: 13},
        {value: 'INR',
        label: '<span class="label-text">Индийская рупия</span><span class="label-value">INR</span>',
        id: 14},
        {value: 'KZT',
        label: '<span class="label-text">Казахстанский тенге</span><span class="label-value">KZT</span>',
        id: 15},
        {value: 'CAD',
        label: '<span class="label-text">Канадский доллар</span><span class="label-value">CAD</span>',
        id: 16},
        {value: 'KGS',
        label: '<span class="label-text">Киргизский сом</span><span class="label-value">KGS</span>',
        id: 17},
        {value: 'CNY',
        label: '<span class="label-text">Китайский юань</span><span class="label-value">CNY</span>',
        id: 18},
        {value: 'MDL',
        label: '<span class="label-text">Молдавский лей</span><span class="label-value">MDL</span>',
        id: 19},
        {value: 'RON',
        label: '<span class="label-text">Новый румынский лей</span><span class="label-value">RON</span>',
        id: 20},
        {value: 'TMT',
        label: '<span class="label-text">Новый туркменский манат</span><span class="label-value">TMT</span>',
        id: 21},
        {value: 'NOK',
        label: '<span class="label-text">Норвежская крона</span><span class="label-value">NOK</span>',
        id: 22},
        {value: 'PLN',
        label: '<span class="label-text">Польский злотый</span><span class="label-value">PLN</span>',
        id: 23},
        {value: 'SGD',
        label: '<span class="label-text">Сингапурский доллар</span><span class="label-value">SGD</span>',
        id: 2},
        {value: 'TJS',
        label: '<span class="label-text">Таджикский сомони</span><span class="label-value">TJS</span>',
        id: 25},
        {value: 'TRY',
        label: '<span class="label-text">Турецкая лира</span><span class="label-value">TRY</span>',
        id: 26},
        {value: 'UZS',
        label: '<span class="label-text">Узбекский сум</span><span class="label-value">UZS</span>',
        id: 27},
        {value: 'UAH',
        label: '<span class="label-text">Украинская гривна</span><span class="label-value">UAN</span>',
        id: 28},
        {value: 'CZK',
        label: '<span class="label-text">Чешская крона</span><span class="label-value">CZK</span>',
        id: 29},
        {value: 'SEK',
        label: '<span class="label-text">Шведская крона</span><span class="label-value">SEK</span>',
        id: 30},
        {value: 'CHF',
        label: '<span class="label-text">Швейцарский франк</span><span class="label-value">CHF</span>',
        id: 31},
        {value: 'ZAR',
        label: '<span class="label-text">Южноафриканский рэнд</span><span class="label-value">ZAR</span>',
        id: 32},
        {value: 'JPY',
        label: '<span class="label-text">Японская иена</span><span class="label-value">JPY</span>',
        id: 33},
        {value: 'XDR',
        label: '<span class="label-text">(специальные права заимствования)</span><span class="label-value">XDR</span>',
        id: 34},
    ],
});

$formConverter.addEventListener('submit', (event) => {
    event.preventDefault();    
});

//Получение данных с сервера
async function getData() {
    let res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let data = await res.json();  

    return data;
};

//конвертация введенной суммы
async function converter() {    
    const currentCourses = await getData();

    let inputSum = $converterInput.value,
        codeStateInsert = choicesInput.getValue().value,
        codeStateRezalt = choicesRezalt.getValue().value,
        cours, nominal, currentSum, rezaltSumm;
       
    if (codeStateRezalt != 'RUR') {
        for (const item in currentCourses.Valute) {
            cours = currentCourses.Valute[codeStateRezalt].Value;        
            nominal = currentCourses.Valute[codeStateRezalt].Nominal;

            if (codeStateInsert == 'RUR') {
                rezaltSumm = ((inputSum / cours) * nominal).toFixed(4);
                $converterRezalt.value = rezaltSumm;             
            } else {
                currentSum = ((inputSum * currentCourses.Valute[codeStateInsert].Value) / currentCourses.Valute[codeStateInsert].Nominal).toFixed(4);
                rezaltSumm = ((currentSum / cours) * nominal).toFixed(4);
                $converterRezalt.value = rezaltSumm;
            };
        }; 
    } else {
        $converterRezalt.value = ((inputSum * currentCourses.Valute[codeStateInsert].Value) / currentCourses.Valute[codeStateInsert].Nominal).toFixed(4);
    };   
};

// Конвертация при вводе суммы
$converterInput.oninput = function() {    
    converter();
};

// Конвертация при изменении валюты-результата
$converterSelectRezalt.onchange = function() {    
    converter();
};

// Конвертация при изменении исходной валюты
$converterSelectInput.onchange = function() {
    converter();
}

// Конвертация при смене полей селекта
document.querySelector('.сonverter__btn').addEventListener('click', () => {
    let codeInsert = choicesInput.getValue(),
        codeRezalt = choicesRezalt.getValue(),
        summ = $converterInput.value;

    choicesInput.setValue([codeRezalt]);
    choicesRezalt.setValue([codeInsert]);
console.log('2', choicesInput.getValue());
    converter();
});

//Добавление текущей даты в заголовок Таблицы курсов
async function currentDate() {
    const currentCourses = await getData();
    let currentDate = currentCourses.Date;
    const $currentDate = document.querySelector('.curses__date');

    $currentDate.textContent = currentDate.split('T')[0].split('-').reverse().join('.');
};

// Отрисовка строки таблицы курсов
async function coursesTableRender() {
    const $table = document.querySelector('.courses__table');    
    const currentCourses = await getData();
    
    const  coursesData = currentCourses.Valute;
    
    document.querySelectorAll('.table__rows-item').forEach((el) => {
        if (coursesData[`${el.dataset.code}`])
        el.append(coursesRowRender(coursesData[`${el.dataset.code}`]));
    });       
};

// Создание строки таблицы курсов
function coursesRowRender(state = {}) {
    const $tableRow = document.createElement('ul');
    const $tableItemRowCode = document.createElement('li'),
        $tableItemRowNominal = document.createElement('li'),
        $tableItemRowName = document.createElement('li'),
        $tableItemRowValue = document.createElement('li'),
        $flagIcon = document.createElement('img'),
        $tableItemCode = document.createElement('span'),
        $valueCode = document.createElement('span'),
        $textCode = document.createElement('span'),
        $valueNom = document.createElement('span'),
        $textNom = document.createElement('span'),
        $valueName = document.createElement('span'),
        $textName = document.createElement('span'),
        $valueValue = document.createElement('span'),
        $textValue = document.createElement('span'); 
             

    $textCode.textContent = 'Код';
    $textCode.classList.add('table__item-text');
    $valueCode.classList.add('table__item-value', 'table__code');

    $tableItemRowCode.classList.add('table__row-item', 'table__item');  
    $tableItemCode.textContent = state.CharCode;

    for (const item in flags) {        
       if (flags[item][`${state.CharCode}`])
         $flagIcon.src = flags[item][`${state.CharCode}`];
    }

    $flagIcon.classList.add('table__row-img')
    $valueCode.append($flagIcon, $tableItemCode);
    $tableItemRowCode.append($textCode, $valueCode);

    $textNom.textContent = 'Единица'
    $textNom.classList.add('table__item-text');
    $valueNom.textContent = state.Nominal;
    $valueNom.classList.add('table__item-value');
    $tableItemRowNominal.classList.add('table__row-item', 'table__item');
    $tableItemRowNominal.append($textNom, $valueNom);

    $textName.textContent = 'Валюта'
    $textName.classList.add('table__item-text');
    $valueName.textContent = state.Name;;
    $valueName.classList.add('table__item-value');
    $tableItemRowName.classList.add('table__row-item', 'table__item');
    $tableItemRowName.append($textName, $valueName);

    $textValue.textContent = 'Курс базовой валюты'
    $textValue.classList.add('table__item-text');
    $valueValue.textContent = state.Value;
    $valueValue.classList.add('table__item-value');
    $tableItemRowValue.classList.add('table__row-item', 'table__item');
    $tableItemRowValue.append($textValue, $valueValue);

    $tableRow.append($tableItemRowCode, $tableItemRowNominal, $tableItemRowName, $tableItemRowValue);

    $tableRow.classList.add('table__row');

    return $tableRow;   
};

currentDate();
coursesTableRender();
