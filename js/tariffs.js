class Tariff {
    constructor(tariffName, price, icons, details, resources, buttonText) {
        this.tariffName = tariffName;
        this.price = price;
        this.icons = icons;
        this.details = details;
        this.resources = resources;
        this.buttonText = buttonText;
    }
}

const minecraftTab = [
    new Tariff('План на месяц', '4.99 $', [], ['Оплата $4.99 каждый месяц'], [], 'Купить'),
    new Tariff('План на 6 месяцев', '4.49 $', [], ['Оплата $4.49 каждый месяц'], [], 'Купить'),
    new Tariff('План на 12 месяцев', '3.99 $', [], ['Оплата $3.99 каждый месяц'], [], 'Купить'),
];

function renderTariffs(tariffs) {
    const tariffContainer = document.querySelector('.tariffs');
    tariffContainer.innerHTML = '';

    tariffs.forEach(tariff => {
        const tariffElement = document.createElement('div');
        tariffElement.classList.add('plan', 'default-plan');

        const titleElement = document.createElement('h3');
        titleElement.classList.add('plan-title');
        titleElement.textContent = tariff.tariffName;
        tariffElement.appendChild(titleElement);

        const priceContainer = document.createElement('div');
        const priceElement = document.createElement('p');
        priceElement.classList.add('plan-price');
        priceElement.textContent = tariff.price;

        const monthText = document.createElement('span');
        monthText.classList.add('month-text');
        monthText.textContent = ' / месяц';

        priceContainer.appendChild(priceElement);
        priceContainer.appendChild(monthText);
        tariffElement.appendChild(priceContainer);

        const dividerElement = document.createElement('div');
        dividerElement.classList.add('plan-divider');
        tariffElement.appendChild(dividerElement);

        const detailsElement = document.createElement('ul');
        detailsElement.classList.add('plan-features');

        tariff.details.forEach((detail) => {
            const detailItem = document.createElement('li');

            const detailText = document.createElement('span');
            detailText.style.flex = '1';
            detailText.style.textAlign = 'center';
            detailText.textContent = detail;
            detailItem.appendChild(detailText);

            detailsElement.appendChild(detailItem);
        });

        tariffElement.appendChild(detailsElement);

        const linkElement = document.createElement('a');
        linkElement.href = "https://dash.pay4fish.cloud/servers/create";
        linkElement.classList.add('plan-btn');
        linkElement.style.color = 'inherit';
        linkElement.style.textDecoration = 'none';
        linkElement.textContent = tariff.buttonText;

        linkElement.style.display = 'block';
        linkElement.style.margin = '0 auto';
        linkElement.style.width = '80%';

        tariffElement.appendChild(linkElement);

        const guaranteeText = document.createElement('p');
        guaranteeText.classList.add('guarantee-text');
        guaranteeText.textContent = '30-дневная гарантия возврата средств';
        tariffElement.appendChild(guaranteeText);

        tariffContainer.appendChild(tariffElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const productLinks = document.querySelectorAll(".tariff-view-btn");

    productLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const productList = document.querySelector("#tariff-section");
            if (productList) {
                productList.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    renderTariffs(minecraftTab);
});
