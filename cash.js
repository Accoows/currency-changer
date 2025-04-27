// Valeur de chaque devise
const money = {
    dollar: 0.84,
    euro: 1,
    livre: 1.14,
    bitcoin: 40000
};

// Variable pour stocker le montant total
let selectedEntryCurrency = 'dollar';
let selectedResultCurrency = 'euro';

// Variable pour mettre à jour le montant total quand on sort de l'input
const entryInput = document.getElementById('entry');

// Fonction pour actualiser le montant total en sortant de l'input
entryInput.addEventListener('change', function() {
    convertMoney();
});

// Fonction qui récupère la valeur de la devise sélectionnée en entrée
function selectEntryCurrency(element_money) {
    selectedEntryCurrency = element_money.dataset.devise;
    updateActiveButton('entry_div', element_money);
    convertMoney();
}

// Fonction qui récupère la valeur de la devise sélectionnée en sortie
function selectResultCurrency(element_money) {
    selectedResultCurrency = element_money.dataset.devise;
    updateActiveButton('output_div', element_money);
    convertMoney();
}

// Mise à jour de la classe active sur le bouton sélectionné pour garder le bouton sélectionné
function updateActiveButton(divId, element_money) {
    const buttons = document.querySelectorAll(`#${divId} .butt`);
    buttons.forEach(button => button.classList.remove('active'));
    element_money.classList.add('active');
}

// Fonction pour convertir la valeur de la devise sélectionnée en entrée vers la devise sélectionnée en sortie
function convertMoney() {
    const entryValue = parseFloat(entryInput.value);

    if (isNaN(entryValue)) {
        return;
    }

    const inputEntryCurrency = money[selectedEntryCurrency];
    const outputResultCurrency = money[selectedResultCurrency];

    const convertedValue = (inputEntryCurrency * entryValue) / outputResultCurrency;

    const resultElement = document.getElementById('result');
    resultElement.value = convertedValue
};