import flags from './model/flags.js';

const main = document.querySelector('main.row');

for (const country of flags) { 
    const view = `<div class="flag col-2 my-2 text-center">
    <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${country.id}.svg" alt="${country.name}">
    <p>${country.name}</p>
    </div>`;

    main.insertAdjacentHTML ('beforeend', view);
}


//src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ar.svg" esse é o link do site, basta alterar o id e o name de cada bandeira dentro do for 

