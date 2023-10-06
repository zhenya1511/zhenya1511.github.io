function makeMenu() {
    const mainMenu = document.getElementById('mainMenu');

    if (typeof players === 'undefined') {
        return false;
    }

    players.forEach(player => {
        mainMenu.innerHTML = mainMenu.innerHTML + `
        <li class="nav-item">
            <a class="nav-link" href="spell/?code=${player.code}">${player.name}</a>
        </li>
        `;
    })
}

function makeSpellList() {
    if (typeof players === 'undefined') {
        return false;
    }

    if (typeof SPELL_LIST === 'undefined') {
        return false;
    }

    const playerCode = (new URL(location.href)).searchParams.get('code');

    document.getElementById('playerName').innerText = players.find(it => it.code === playerCode).name;

    const mainMenu = document.getElementById('mainMenu');
    const spellTable = document.getElementById('spellTable');

    SPELL_LIST[playerCode].forEach(spell => {
        mainMenu.innerHTML = mainMenu.innerHTML + `
        <li class="nav-item">
            <a class="nav-link" href="#${spell.mnemonicCode}">${spell.name.rus} [${spell.name.eng}]</a>
        </li>
        `;
    })   ;

    SPELL_LIST[playerCode].forEach(spell => {
        spellTable.innerHTML = spellTable.innerHTML + makeSpellItem(spell);
    })
}


function makeSpellItem(item) {
    return `
    <div id="${item.mnemonicCode}" class="spell-item border p-2 m-3">
            <h2 class="text-center">${item['name']['rus']}  <div>[${item['name']['eng']}]</div></h2>

            <div class="text-secondary mb-2">
                ${item['level'] ? item['level'] + ' ур' : 'заговор'} , ${item['school']}
            </div>
            
            <div><span class="fw-bold">Время накладывания:</span> ${item['time']}</div>
            <div><span class="fw-bold">Дистанция: </span>${item['range']}</div>
            <div><span class="fw-bold">Длительность: </span>${item['time']}</div>
            <div>
            <span class="fw-bold">Компоненты:</span> ${[
                item['components']['v'] ? 'В' : null,
                item['components']['s'] ? 'С' : null,
                item['components']['m'] ? `М ${item['components']['m']}` : null,
                ].filter(it => !!it).join(',')}
            </div>

            <div>
                ${item['description'].replace(/<a href="(.*)">(.*)<\/a>/gim, '<a target="_blank" href="http://ttg.club$1">$2</a>') }
            </div>
        </div>
    `;
}
