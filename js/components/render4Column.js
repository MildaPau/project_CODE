function render4Column(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        HTML += `<div class="column1">
                <img src="${item.img}" alt="paveikslelis">
                <h5>${item.h5}</h5> 
                <p>${item.p}</p></div>`;

        console.log(item);
    }

    const DOM = document.querySelector('.section-three > .column');

    DOM.innerHTML = HTML;

    return HTML;
}

export { render4Column };
