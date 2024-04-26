const SPELL_LIST = {
  "kitana": [{
    "name": {
      "rus": "Волшебный камень",
      "eng": "Magic Stone"
    },
    "level": 0,
    "school": "преобразование",
    "components": {
      "v": true,
      "s": true
    },
    "url": "/spells/magic_stone",
    "source": {
      "shortName": "XGE",
      "name": "Руководство Занатара обо всем"
    },
    "id": 382,
    "range": "Касание",
    "duration": "1 минута",
    "time": "1 бонусное действие",
    "classes": [
      {
        "name": "Друид",
        "url": "/classes/druid",
        "icon": "class/druid"
      },
      {
        "name": "Колдун",
        "url": "/classes/warlock",
        "icon": "class/warlock"
      },
      {
        "name": "Изобретатель",
        "url": "/classes/artificer",
        "icon": "class/artificer"
      },
      {
        "name": "Шаман",
        "url": "/classes/shaman",
        "icon": "class/shaman"
      }
    ],
    "description": "<p>Вы касаетесь от&nbsp;1&nbsp;до&nbsp;3 камней и наделяете их магической силой.</p><p>Вы или кто-либо ещё можете совершить <em>дальнобойную атаку заклинанием</em>, кинув один из этих камней или запустив его при помощи пращи. Дальность броска рукой составляет 60&nbsp;футов. Если кто-либо другой атакует этим камнем, он использует для броска атаки ваш модификатор базовой характеристики вместо своего.</p><p>При попадании цель получает дробящий урон, равный&nbsp;<dice-roller formula=\"1к6\">1к6</dice-roller> + модификатор вашей базовой характеристики.</p><p>Вне зависимости от того, попал камень или нет, это заклинание перестаёт на него действовать. Если вы сотворяете это заклинание ещё раз, его эффект преждевременно заканчивается на тех камнях, что были зачарованы прежде.</p>"
  },
    {
      "name": {
        "rus": "Сотворение пламени",
        "eng": "Produce Flame"
      },
      "level": 0,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/produce_flame",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 324,
      "range": "На себя",
      "duration": "10 минут",
      "time": "1 действие",
      "classes": [
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "races": [
        {
          "name": "Дженази (огненный)",
          "url": "/races/fire"
        }
      ],
      "description": "<p>В вашей ладони появляется мерцающее пламя. Оно остаётся там, пока заклинание активно, и не вредит ни вам, ни вашему снаряжению. Огонь испускает <detail-tooltip type=\"screen\"><a href=\"/screens/bright_light\">яркий свет</a></detail-tooltip> в радиусе 10 футов и <detail-tooltip type=\"screen\"><a href=\"/screens/dim_light\">тусклый свет</a></detail-tooltip> в пределах ещё 10 футов.</p><p>Заклинание оканчивается, если вы оканчиваете его <em>Действием</em> или накладываете ещё раз.</p><p>Вы можете атаковать этим пламенем, но это тоже оканчивает заклинание. Когда вы накладываете это заклинание, или другим действием в одном из последующих ходов вы можете метнуть пламя в существо, находящееся в пределах 30 футов от вас.</p><p>Совершите <em>дальнобойную атаку заклинанием</em>. При попадании цель получает&nbsp;<dice-roller formula=\"1к8\">1к8</dice-roller> урона огнём.</p><p>Урон этого заклинания увеличивается на <dice-roller formula=\"1к8\">1к8</dice-roller>, когда вы достигаете 5 уровня (<dice-roller formula=\"2к8\">2к8</dice-roller>), 11 уровня (<dice-roller formula=\"3к8\">3к8</dice-roller>) и 17 уровня (<dice-roller formula=\"4к8\">4к8</dice-roller>).</p>"
    },
    {
      "name": {
        "rus": "Формование воды",
        "eng": "Shape Water"
      },
      "level": 0,
      "school": "преобразование",
      "components": {
        "s": true
      },
      "url": "/spells/shape_water",
      "source": {
        "shortName": "XGE",
        "name": "Руководство Занатара обо всем"
      },
      "id": 467,
      "range": "30 футов",
      "duration": "Мгновенная или 1 час",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "races": [
        {
          "name": "Дженази (водный)",
          "url": "/races/water"
        }
      ],
      "description": "<p>Выберите область воды, которую вы видите в пределах дистанции заклинания, и которая помещается в 5-футовый куб.</p><p>Вы можете управлять ею одним из нижеперечисленных способов:</p><ul class=\"text-justify mb-1\"><li>Вы мгновенно перемещаете или изменяете скорость течения потока воды на 5 футов в любом направлении. Этого воздействия недостаточно, чтобы причинить урон.</li><li>Вы можете заставить воду принимать простые формы или двигаться согласно вашим указаниям. Этот эффект действует 1 час.</li><li>Вы можете изменить цвет или прозрачность воды. Вся область воды должна быть одного цвета и прозрачности. Эффект действует 1 час.</li><li>Вы замораживаете воду, если в ней нет никаких существ. Вода размораживается через 1 час.</li></ul><p>Если вы накладываете это заклинание несколько раз, вы не можете поддерживать более 2 немгновенных эффектов одновременно. Вы можете действием отменить один из действующих эффектов.</p>"
    },
    {
      "name": {
        "rus": "Ледяной кинжал",
        "eng": "Ice Knife"
      },
      "level": 1,
      "school": "вызов",
      "components": {
        "s": true,
        "m": "капля воды или кусочек льда"
      },
      "url": "/spells/ice_knife",
      "source": {
        "shortName": "XGE",
        "name": "Руководство Занатара обо всем"
      },
      "id": 405,
      "range": "60 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "description": "<p>Вы создаёте осколок льда и метаете его в одно существо, находящееся в пределах дистанции заклинания.</p><p>Совершите по цели <em>дальнобойную атаку заклинанием</em>. При попадании цель получает&nbsp;<dice-roller formula=\"1к10\">1к10</dice-roller> колющего урона. После этого, вне зависимости от попадания или промаха, осколок взрывается. Цель и все существа в пределах 5 футов от места взрыва осколка должны преуспеть в спасброске <span class=\"saving_throw\">Ловкости</span>, иначе получат&nbsp;<dice-roller formula=\"2к6\">2к6</dice-roller> урона холодом.</p>",
      "upper": "Если вы сотворяете это заклинание, используя ячейку 2 уровня или выше, то урон холодом увеличивается на <dice-roller formula=\"1к6\">1к6</dice-roller> за каждый уровень ячейки выше 1. "
    },
    {
      "name": {
        "rus": "Споры телепатической связи",
        "eng": "Rapport Spores"
      },
      "level": 1,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true,
        "m": "грибная спора"
      },
      "url": "/spells/rapport_spores",
      "source": {
        "shortName": "PG",
        "name": "Путеводитель игрока: Прорастающий хаос",
        "homebrew": true
      },
      "id": 492,
      "range": "На себя",
      "duration": "1 час",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Жрец",
          "url": "/classes/cleric",
          "icon": "class/cleric"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "description": "<p>Вы призываете особые споры в радиусе 30 футов вокруг себя. Эти споры огибают углы и влияют только на существ с <strong>Интеллектом</strong> 2 или выше, которые не являются нежитью, конструктами или элементалями.</p><p>Пока длится заклинание, эти существа могут общаться телепатически друг с другом на расстоянии не превышающем 60 футов.</p>"
    },
    {
      "name": {
        "rus": "Очарование личности",
        "eng": "Charm Person"
      },
      "level": 1,
      "school": "очарование",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/charm_person",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 207,
      "range": "30 футов",
      "duration": "1 час",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Обмана",
          "url": "/classes/cleric/trickery",
          "class": "Жрец"
        },
        {
          "name": "Фейский Странник",
          "url": "/classes/ranger/fey_wanderer",
          "class": "Следопыт"
        },
        {
          "name": "Скаут Зобека",
          "url": "/classes/ranger/zobecker_scout",
          "class": "Следопыт"
        }
      ],
      "races": [
        {
          "name": "Тифлинг (фьёрна)",
          "url": "/races/fierna"
        },
        {
          "name": "Тифлинг (язык дьявола)",
          "url": "/races/variant_devils_tongue"
        }
      ],
      "description": "<p>Вы пытаетесь очаровать гуманоида, которого видите в пределах дистанции. Он должен совершить спасбросок <span class=\"saving_throw\">Мудрости</span>, с <span class=\"advantage\">преимуществом</span>, если вы или ваши спутники сражаетесь с ним.</p><p>Если он проваливает спасбросок, он <detail-tooltip type=\"screen\"><a href=\"/screens/Charmed\">очарован</a></detail-tooltip> вами, пока заклинание активно или пока вы или ваши спутники не причините ему вред. <detail-tooltip type=\"screen\"><a href=\"/screens/Charmed\">Очарованное</a></detail-tooltip> существо считает вас своим другом.</p><p>Когда заклинание оканчивается, существо знает, что было очаровано вами.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого. Эти существа должны находиться в пределах 30 футов друг от друга, чтобы вы могли на них нацелиться."
    },
    {
      "name": {
        "rus": "Поиск предмета",
        "eng": "Locate Object"
      },
      "level": 2,
      "school": "прорицание",
      "components": {
        "v": true,
        "s": true,
        "m": "раздвоенная веточка"
      },
      "concentration": true,
      "url": "/spells/locate_object",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 230,
      "range": "На себя",
      "duration": "Концентрация, вплоть до 10 минут",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Жрец",
          "url": "/classes/cleric",
          "icon": "class/cleric"
        },
        {
          "name": "Паладин",
          "url": "/classes/paladin",
          "icon": "class/paladin"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Пророчества",
          "url": "/classes/cleric/prophecy",
          "class": "Жрец"
        },
        {
          "name": "Маг Лорхолда",
          "url": "/classes/bard/mage_of_lorehold",
          "class": "Бард"
        }
      ],
      "races": [
        {
          "name": "Полуорк (метка поиска)",
          "url": "/races/mark_of_finding"
        }
      ],
      "description": "<p>Опишите или назовите известный вам предмет. Вы чувствуете направление к этому предмету, пока он находится в пределах 1 000 футов от вас. Если предмет перемещается, вы узнаёте его направление. Это заклинание может искать конкретный известный вам предмет, если вы хотя бы раз видели его вблизи (в пределах 30 футов).</p><p>В качестве альтернативы, это заклинание может искать ближайший предмет определённого вида, например, особый предмет одежды, ювелирное украшение, мебель, инструмент или оружие. Это заклинание не может обнаружить предмет, если прямой путь между вами перерезан свинцом, пусть даже самым тонким листом.</p>"
    },
    {
      "name": {
        "rus": "Шипы",
        "eng": "Spike Growth"
      },
      "level": 2,
      "school": "преобразование",
      "components": {
        "v": true,
        "s": true,
        "m": "семь острых шипов или семь заострённых веточек"
      },
      "concentration": true,
      "url": "/spells/spike_growth",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 367,
      "range": "150 футов",
      "duration": "Концентрация, до 10 минут",
      "time": "1 действие",
      "classes": [
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Природы",
          "url": "/classes/cleric/nature",
          "class": "Жрец"
        },
        {
          "name": "Коллегия Зелёного Листа",
          "url": "/classes/bard/greenleaf",
          "class": "Бард"
        }
      ],
      "description": "<p>Пол в пределах 20-футового радиуса с центром на точке в пределах дистанции покрывается шипами и колючками. Эта местность становится <detail-tooltip type=\"screen\"><a href=\"/screens/difficult_terrain_move\">труднопроходимой</a></detail-tooltip> на время действия заклинания.</p><p>Когда существо перемещением входит в эту область или идёт по ней, оно получает колющий урон <dice-roller formula=\"2к4\">2к4</dice-roller> за каждые 5 пройдённых футов. Трансформация поверхности проходит практически незаметно, и шипы хорошо замаскированы. Существа, которые не видели эту местность в момент накладывания заклинания, должны совершить проверку <strong><em>Мудрости (Внимательность</em>)</strong> против Сл ваших заклинаний, чтобы распознать местность опасной, перед тем как в неё войти.</p>"
    },
    {
      "name": {
        "rus": "Ядовитый залп",
        "eng": "Poisoned Volley"
      },
      "level": 2,
      "school": "преобразование",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/poisoned_volley",
      "source": {
        "shortName": "MHH",
        "name": "Мидгард Справочник героя",
        "homebrew": true
      },
      "id": 777,
      "range": "60 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        }
      ],
      "description": "<p>Натягивая воображаемую тетиву, вы призываете несколько десятков светящихся зеленым стрел и выпускаете их все в своих врагов.</p><p>Все существа в квадрате со стороной 20 футов в пределах дистанции получают <dice-roller formula=\"3к8\">3к8</dice-roller> урона ядом и становятся <detail-tooltip type=\"screen\"><a href=\"/screens/Poisoned\">отравленными</a></detail-tooltip>; существа, совершившие успешный спасбросок <span class=\"saving_throw\">Телосложения</span>, получают только половину урона и не <detail-tooltip type=\"screen\"><a href=\"/screens/Poisoned\">отравлены</a></detail-tooltip>.</p>",
      "upper": "Когда вы накладываете это заклинание, используя ячейку третьего уровня или выше, урон увеличивается на <dice-roller formula=\"1к8\">1к8</dice-roller> за каждый уровень ячейки выше второго."
    },
    {
      "name": {
        "rus": "Извержение земли",
        "eng": "Erupting Earth"
      },
      "level": 3,
      "school": "преобразование",
      "components": {
        "v": true,
        "s": true,
        "m": "кусочек обсидиана"
      },
      "url": "/spells/erupting_earth",
      "source": {
        "shortName": "XGE",
        "name": "Руководство Занатара обо всем"
      },
      "id": 394,
      "range": "120 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "description": "<p>Выберите точку на поверхности земли, видимую в пределах дистанции заклинания. Фонтан вывороченной земли и камней вырывается в 20-футовом кубе и центром в этой точке.</p><p>Все существа в этой области должны сделать спасбросок <span class=\"saving_throw\">Ловкости</span>. При провале существо получает дробящий урон <dice-roller formula=\"3к12\">3к12</dice-roller>, а при успехе &ndash; половину урона.</p><p>Кроме того, земля в области действия заклинания становится <detail-tooltip type=\"screen\"><a href=\"/screens/difficult_terrain_move\">труднопроходимой местностью</a></detail-tooltip>, пока её не расчистят. Расчистка квадрата с длиной стороны 5 футов вручную займёт не менее 1 минуты.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 4 уровня или выше, то урон увеличивается на <dice-roller formula=\"1к12\">1к12</dice-roller> за каждый уровень ячейки выше 3. "
    },
    {
      "name": {
        "rus": "Конус шипов",
        "eng": "Spray of Thorn"
      },
      "level": 3,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true,
        "m": "терновый шип"
      },
      "url": "/spells/spray_of_thorn",
      "source": {
        "shortName": "PG",
        "name": "Путеводитель игрока: Прорастающий хаос",
        "homebrew": true
      },
      "id": 479,
      "range": "На себя",
      "duration": "Мгновенная",
      "time": "1 бонусное действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Жрец",
          "url": "/classes/cleric",
          "icon": "class/cleric"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        }
      ],
      "description": "<p>Из ваших рук вырывается поток шипов, который пронзает всех существ на своем пути.</p><p>Каждое существо в области 15 футового конуса должно сделать спасбросок <span class=\"saving_throw\">Ловкости</span> и при провале получит <dice-roller formula=\"3к6\">3к6</dice-roller> колющего урона, а также <strong>уязвимость</strong> к колющему, дробящему и рубящему урону. В случае успеха, существо получает половину урона и не получает уязвимости.</p>"
    },
    {
      "name": {
        "rus": "Лечение ран",
        "eng": "Cure Wounds"
      },
      "level": 1,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/cure_wounds",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 236
      },
      "id": 130,
      "range": "Касание",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Жрец",
          "url": "/classes/cleric",
          "icon": "class/cleric"
        },
        {
          "name": "Паладин",
          "url": "/classes/paladin",
          "icon": "class/paladin"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        },
        {
          "name": "Изобретатель",
          "url": "/classes/artificer",
          "icon": "class/artificer"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Жизни",
          "url": "/classes/cleric/life",
          "class": "Жрец"
        },
        {
          "name": "Небожитель",
          "url": "/classes/warlock/celestial",
          "class": "Колдун"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        }
      ],
      "description": "<p>Существо, которого вы касаетесь, восстанавливает количество хитов, равное <dice-roller formula=\"1к8\">1к8</dice-roller> + ваш модификатор базовой характеристики.</p><p>Это заклинание не оказывает никакого эффекта на нежить и конструктов.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, лечение увеличивается на <dice-roller formula=\"1к8\">1к8</dice-roller> за каждый уровень ячейки выше первого."
    },
    {
      "name": {
        "rus": "Огненные ладони",
        "eng": "Burning Hands"
      },
      "level": 1,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/burning_hands",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 248
      },
      "id": 188,
      "range": "На себя (15-футовый конус)",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Света",
          "url": "/classes/cleric/light",
          "class": "Жрец"
        },
        {
          "name": "Исчадие",
          "url": "/classes/warlock/fiend",
          "class": "Колдун"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        }
      ],
      "races": [
        {
          "name": "Дженази (огненный)",
          "url": "/races/fire"
        },
        {
          "name": "Тифлинг (мефистофель)",
          "url": "/races/mephistopheles"
        },
        {
          "name": "Тифлинг (адское пламя)",
          "url": "/races/variant_hellfire"
        }
      ],
      "description": "<p>Соединив ладони и растопырив пальцы веером, вы испускаете из них тонкие языки пламени.</p><p>Все существа в пределах 15-футового конуса должны совершить спасбросок <span class=\"saving_throw\">Ловкости</span>. Существо получает&nbsp;<dice-roller formula=\"3к6\">3к6</dice-roller> урона огнём в случае провала и половину этого урона в случае успеха. Пламя поджигает все горючие предметы, никем не несомые и не носимые.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон увеличивается на <dice-roller formula=\"1к6\">1к6</dice-roller> за каждый уровень ячейки выше первого."
    },
    {
      "name": {
        "rus": "Палящий луч",
        "eng": "Scorching Ray"
      },
      "level": 2,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/scorching_ray",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 211,
      "range": "120 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Света",
          "url": "/classes/cleric/light",
          "class": "Жрец"
        },
        {
          "name": "Исчадие",
          "url": "/classes/warlock/fiend",
          "class": "Колдун"
        },
        {
          "name": "Артиллерист",
          "url": "/classes/artificer/artillerist",
          "class": "Изобретатель"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        },
        {
          "name": "Клятва Сияния",
          "url": "/classes/paladin/oath_of_radiance",
          "class": "Паладин"
        }
      ],
      "description": "<p>Вы создаёте три огненных луча и направляете их на целей, находящихся в пределах дистанции. Это может быть одна или несколько целей. Для каждого луча совершите д<em>альнобойную атаку заклинанием</em>. При попадании цель получает урон огнём <dice-roller formula=\"2к6\">2к6</dice-roller>.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы создаёте один дополнительный луч за каждый уровень ячейки выше второго."
    },
    {
      "name": {
        "rus": "Пылающий шар",
        "eng": "Flaming Sphere"
      },
      "level": 2,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true,
        "m": "кусок сала, щепотка серы и толчёного железа"
      },
      "concentration": true,
      "url": "/spells/flaming_sphere",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 275,
      "range": "60 футов",
      "duration": "Концентрация, вплоть до 1 минуты",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Света",
          "url": "/classes/cleric/light",
          "class": "Жрец"
        },
        {
          "name": "Небожитель",
          "url": "/classes/warlock/celestial",
          "class": "Колдун"
        },
        {
          "name": "Алхимик",
          "url": "/classes/artificer/alchemist",
          "class": "Изобретатель"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        }
      ],
      "description": "<p>В свободном пространстве на ваш выбор в пределах дистанции появляется шар из огня с диаметром 5 футов, существующий, пока активно заклинание.</p><p>Все существа, оканчивающие ход в пределах 5 футов от шара, должны совершать спасбросок <span class=\"saving_throw\">Ловкости</span>. Существа получают урон огнём <dice-roller formula=\"2d6\">2к6</dice-roller> при провале или половину этого урона при успехе.</p><p>Вы можете <em>бонусным действием</em> переместить шар на 30 футов. Если вы тараните шаром существо, это существо должно совершить спасбросок от урона шара, и шар останавливается до конца этого хода.</p><p>Когда вы перемещаете шар, вы можете поднимать его над препятствиями до 5 футов в высоту и перепрыгивать им разломы до 10 футов в длину. Шар поджигает горючие предметы, которые никто не несёт и не носит, и испускает яркий свет в пределах 20 футов и тусклый свет в пределах ещё 20 футов.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, урон увеличивается на <dice-roller formula=\"1к6\">1к6</dice-roller> за каждый уровень ячейки выше второго."
    },
    {
      "name": {
        "rus": "Возрождение",
        "eng": "Revivify"
      },
      "level": 3,
      "school": "некромантия",
      "components": {
        "v": true,
        "s": true,
        "m": "бриллианты, стоящие в сумме 300 зм, расходуемые заклинанием"
      },
      "url": "/spells/revivify",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 216
      },
      "id": 35,
      "range": "Касание",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Жрец",
          "url": "/classes/cleric",
          "icon": "class/cleric"
        },
        {
          "name": "Паладин",
          "url": "/classes/paladin",
          "icon": "class/paladin"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        },
        {
          "name": "Изобретатель",
          "url": "/classes/artificer",
          "icon": "class/artificer"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Жизни",
          "url": "/classes/cleric/life",
          "class": "Жрец"
        },
        {
          "name": "Домен Упокоения",
          "url": "/classes/cleric/grave",
          "class": "Жрец"
        },
        {
          "name": "Небожитель",
          "url": "/classes/warlock/celestial",
          "class": "Колдун"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        },
        {
          "name": "Чумной Доктор",
          "url": "/classes/shaman/witch_doctor",
          "class": "Шаман"
        }
      ],
      "description": "<p>Вы касаетесь существа, мёртвого не больше минуты. Это существо возвращается к жизни с <span class=\"dice_text\">1</span> хитом. Это заклинание не может оживить существ, умерших от старости, а также не восстанавливает отсутствующие части тел.</p>"
    },
    {
      "name": {
        "rus": "Рост растений",
        "eng": "Plant Growth"
      },
      "level": 3,
      "school": "преобразование",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/plant_growth",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 291,
      "range": "150 футов",
      "duration": "Мгновенная",
      "time": "8 часов или 1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Друид",
          "url": "/classes/druid",
          "icon": "class/druid"
        },
        {
          "name": "Следопыт",
          "url": "/classes/ranger",
          "icon": "class/ranger"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Природы",
          "url": "/classes/cleric/nature",
          "class": "Жрец"
        },
        {
          "name": "Клятва Древних",
          "url": "/classes/paladin/ancients",
          "class": "Паладин"
        },
        {
          "name": "Архифея",
          "url": "/classes/warlock/archfey",
          "class": "Колдун"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        }
      ],
      "races": [
        {
          "name": "Сильва",
          "url": "/races/silva"
        }
      ],
      "description": "<p>Это заклинание вливает жизненные силы в растения, находящиеся в определённой области.</p><p>Есть два варианта использования этого заклинания; одно даёт <em>краткосрочный</em>, другое &mdash; <em>долговременный</em> эффект.</p><p>Если вы активируете это заклинание 1 действием, выберите точку в пределах дистанции. Все обычные растения в пределах 100-футового радиуса с центром на этой точке становятся густыми и рослыми. Существо, перемещающееся по этой местности, должно потратить 4 фута перемещения за каждый 1 пройдённый фут. Вы можете исключить одну или несколько областей любого размера в пределах зоны действия заклинания.</p><p>Если вы активируете это заклинание 8 часов, вы делаете почву удобренной. Все растения в радиусе полумили с центром на точке в пределах дистанции становятся удобренными на 1 год. Эти растения приносят удвоенный урожай еды.</p>"
    }],
  "nura": [
    {
      "name": {
        "rus": "Огненный снаряд",
        "eng": "Fire Bolt"
      },
      "level": 0,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/fire_bolt",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 249
      },
      "id": 189,
      "range": "120 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Изобретатель",
          "url": "/classes/artificer",
          "icon": "class/artificer"
        }
      ],
      "description": "<p>Вы кидаете сгусток огня в существо или предмет в пределах дистанции.</p><p>Совершите по цели <em>дальнобойную атаку заклинанием</em>. При попадании цель получает&nbsp;<dice-roller formula=\"1к10\">1к10</dice-roller> урона огнём. Горючие предметы, по которым попало это заклинание, воспламеняются, если их никто не несёт и не носит.</p><p>Урон этого заклинания увеличивается на <dice-roller formula=\"1к10\">1к10</dice-roller>, когда вы достигаете 5 уровня (<dice-roller formula=\"2к10\">2к10</dice-roller>), 11 уровня (<dice-roller formula=\"3к10\">3к10</dice-roller>) и 17 уровня (<dice-roller formula=\"4к10\">4к10</dice-roller>).</p>"
    },
    {
      "name": {
        "rus": "Волшебная рука",
        "eng": "Mage Hand"
      },
      "level": 0,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/mage_hand",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 216
      },
      "id": 38,
      "range": "30 футов",
      "duration": "1 минута",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Изобретатель",
          "url": "/classes/artificer",
          "icon": "class/artificer"
        }
      ],
      "races": [
        {
          "name": "Гитъянки",
          "url": "/races/githyanki"
        },
        {
          "name": "Гитцераи",
          "url": "/races/githzerai"
        },
        {
          "name": "Тифлинг (маммон)",
          "url": "/races/mammon"
        },
        {
          "name": "Тифлинг (мефистофель)",
          "url": "/races/mephistopheles"
        }
      ],
      "description": "<p>В точке, выбранной вами в пределах дистанции, появляется призрачная парящая рука. Рука существует, пока заклинание активно, или пока вы не отпустите её <em>Действием</em>. Рука исчезает, если окажется более чем в 30 футах от вас, или если вы повторно используете это заклинание.</p><p>Вы можете <em>Действием</em> контролировать руку. Вы можете с её помощью манипулировать предметами, открывать незапертые двери и контейнеры, убирать предметы в открытые контейнеры и доставать их оттуда, или выливать содержимое флаконов.</p><p>При каждом использовании руки вы можете переместить её на 30 футов. Рука не может совершать атаки, активировать магические предметы и переносить более 10 фунтов.</p>"
    },
    {
      "name": {
        "rus": "Защита от оружия",
        "eng": "Blade Ward"
      },
      "level": 0,
      "school": "ограждение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/blade_ward",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 228
      },
      "id": 91,
      "range": "На себя",
      "duration": "1 раунд",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "description": "<p>Вы протягиваете руку и рисуете в воздухе ограждающий знак. Вы получаете до конца своего следующего хода сопротивление <em>дробящему, колющему и рубящему</em> урону, причинённому атаками оружием.</p>"
    },
    {
      "name": {
        "rus": "Воздушный хлыст",
        "eng": "Wind Lash"
      },
      "level": 0,
      "school": "воплощение",
      "additionalType": "Стихийная магия",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/wind_lash",
      "source": {
        "shortName": "MHH",
        "name": "Мидгард Справочник героя",
        "homebrew": true
      },
      "id": 788,
      "range": "20 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "subclasses": [
        {
          "name": "Элементалист",
          "url": "/classes/wizard/elementalist",
          "class": "Волшебник"
        }
      ],
      "description": "<p>Быстрым движением вы создаёте плотный порыв сильного ветра. Совершите <em>рукопашную атаку заклинанием</em> по существу. При попадании цель получает <dice-roller formula=\"1к8\">1к8</dice-roller> рубящего урона и <em>отталкивается</em> от вас на 5 футов.</p><p>Урон заклинания увеличивается на <dice-roller formula=\"1к8\">1к8</dice-roller>, когда вы достигаете 5 уровня (<dice-roller formula=\"2к8\">2к8</dice-roller>), 11 уровня (<dice-roller formula=\"3к8\">3к8</dice-roller>), и 17 уровня (<dice-roller formula=\"4к8\">4к8</dice-roller>).</p>"
    },
    {
      "name": {
        "rus": "Леденящее прикосновение",
        "eng": "Chill Touch"
      },
      "level": 0,
      "school": "некромантия",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/chill_touch",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 235
      },
      "id": 125,
      "range": "120 футов",
      "duration": "1 раунд",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Шаман",
          "url": "/classes/shaman",
          "icon": "class/shaman"
        }
      ],
      "subclasses": [
        {
          "name": "Круг Спор",
          "url": "/classes/druid/spores",
          "class": "Друид"
        }
      ],
      "description": "<p>Вы создаёте призрачную руку скелета в пространстве существа, находящегося в пределах дистанции.</p><p>Совершите <em>дальнобойную атаку заклинанием</em> по существу, чтобы окутать его могильным холодом. При попадании цель получает <dice-roller formula=\"1к8\">1к8</dice-roller> урона некротической энергией, и не может восстанавливать хиты до начала вашего следующего хода. Всё это время рука держится за цель.</p><p>Если вы попадаете по нежити, то она также до конца вашего следующего хода совершает по вам броски атаки с <span class=\"disadvantage\">помехой</span>.</p><p>Урон этого заклинания увеличивается на <dice-roller formula=\"1к8\">1к8</dice-roller>, когда вы достигаете 5 уровня (<dice-roller formula=\"2к8\">2к8</dice-roller>), 11 уровня (<dice-roller formula=\"3к8\">3к8</dice-roller>), 17 уровня (<dice-roller formula=\"4к8\">4к8</dice-roller>).</p>"
    },
    {
      "name": {
        "rus": "Снаряд хаоса",
        "eng": "Chaos Bolt"
      },
      "level": 1,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/chaos_bolt",
      "source": {
        "shortName": "XGE",
        "name": "Руководство Занатара обо всем"
      },
      "id": 453,
      "range": "120 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "subclasses": [
        {
          "name": "Хаос",
          "url": "/classes/warlock/chaos",
          "class": "Колдун"
        }
      ],
      "description": "<p>Вы бросаете волнистую, трепещущую массу хаотической энергии в одно существо в радиусе действия.</p><p>Совершите <em>дальнобойную атаку заклинанием</em> по существу. При попадании цель получает <dice-roller formula=\"2к8 + 1к6\">2к8 + 1к6</dice-roller> урона. Выберите одно из <dice-roller formula=\"к8\">к8</dice-roller>. Выпавшее число определяет тип урона атаки, как показано ниже.</p><div claass=\"table-responsive\"><table class=\"dnd5_table\"><thead><tr><th style=\"width: 23px; text-align: center;\">к8</th><th style=\"width: 160px; text-align: left;\">Тип урона</th></tr></thead><tbody><tr><td style=\"width: 23px; text-align: center;\">1</td><td style=\"width: 160px;\">Кислота</td></tr><tr><td style=\"width: 23px; text-align: center;\">2</td><td style=\"width: 160px;\">Холод</td></tr><tr><td style=\"width: 23px; text-align: center;\">3</td><td style=\"width: 160px;\">Огонь</td></tr><tr><td style=\"width: 23px; text-align: center;\">4</td><td style=\"width: 160px;\">Силовое поле</td></tr><tr><td style=\"width: 23px; text-align: center;\">5</td><td style=\"width: 160px;\">Электричество</td></tr><tr><td style=\"width: 23px; text-align: center;\">6</td><td style=\"width: 160px;\">Яд</td></tr><tr><td style=\"width: 23px; text-align: center;\">7</td><td style=\"width: 160px;\">Психическая энергия</td></tr><tr><td style=\"width: 23px; text-align: center;\">8</td><td style=\"width: 160px;\">Звук</td></tr></tbody></table></div><p>Если вы выбрасываете одинаковое значение на обоих <dice-roller formula=\"к8\">к8</dice-roller>, хаотическая энергия прыгает с цели на другое существо по вашему выбору в пределах 30 футов от него. Совершите новую атаку против новой цели и сделайте новый бросок урона, который может привести к тому, что хаотическая энергия снова перескочит.</p><p>Существо может быть целью только один раз за каждое произношение этого заклинания.</p>",
      "upper": "Если вы сотворяете это заклинание, используя ячейку 2 уровня или выше, каждая цель получает дополнительно <dice-roller formula=\"1к6\">1к6</dice-roller> урона за каждый уровень ячейки выше 1. "
    },
    {
      "name": {
        "rus": "Обнаружение мыслей",
        "eng": "Detect Thoughts"
      },
      "level": 2,
      "school": "прорицание",
      "components": {
        "v": true,
        "s": true,
        "m": "медная монетка"
      },
      "concentration": true,
      "url": "/spells/detect_thoughts",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 246
      },
      "id": 181,
      "range": "На себя",
      "duration": "Концентрация, вплоть до 1 минуты",
      "time": "1 действие",
      "classes": [
        {
          "name": "Бард",
          "url": "/classes/bard",
          "icon": "class/bard"
        },
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "subclasses": [
        {
          "name": "Великий Древний",
          "url": "/classes/warlock/great_old_one",
          "class": "Колдун"
        },
        {
          "name": "Аберрантный Разум",
          "url": "/classes/sorcerer/aberrant_mind",
          "class": "Чародей"
        },
        {
          "name": "Домен Разума",
          "url": "/classes/cleric/intelligence",
          "class": "Жрец"
        },
        {
          "name": "Домен Ужаса",
          "url": "/classes/cleric/eldritch",
          "class": "Жрец"
        },
        {
          "name": "Клятва Рвения",
          "url": "/classes/paladin/zeal",
          "class": "Паладин"
        },
        {
          "name": "Провидец",
          "url": "/classes/shaman/far_seer",
          "class": "Шаман"
        }
      ],
      "races": [
        {
          "name": "Гитцераи",
          "url": "/races/githzerai"
        },
        {
          "name": "Тифлинг (диспатер)",
          "url": "/races/dispater"
        }
      ],
      "description": "<p>Пока заклинание активно, вы можете читать мысли некоторых существ. Если вы сотворили это заклинание, и в свой ход совершаете <em>Действие</em>, вы можете сосредоточиться на одном существе, которое видите в пределах 30 футов.</p><p>Если у выбранного существа <strong>Интеллект</strong> равен 3 или ниже, или если оно не может говорить ни на одном языке, оно не попадает под действие заклинания.</p><p>Вначале вы знаете поверхностные мысли существа &mdash; то, что находится в его сознании на текущий момент.</p><p>Вы можете <em>Действием</em> либо перенести внимание на мысли другого существа, либо попытаться углубиться в мысли текущего существа.</p><p>Если вы погружаетесь глубже, цель должна совершить спасбросок <span class=\"saving_throw\">Мудрости</span>. В случае провала вы получаете понимание её мыслей (если есть), её эмоционального состояния, и того, что её больше всего заботит (а также то, что она любит и ненавидит). Если существо преуспеет, заклинание оканчивается. В любом случае, цель знает, что вы прощупывали её сознание, и если вы не перевели внимание на мысли другого существа, предыдущее существо может в свой ход <em>Действием</em> совершить проверку <strong>Интеллекта</strong>, противопоставленную вашей проверке <strong>Интеллекта</strong>; в случае успеха заклинание оканчивается.</p><p>Вопросы, задаваемые устно цели, влияют на ход её мыслей, поэтому это заклинание чрезвычайно эффективно во время допросов. Вы можете также использовать это заклинание для обнаружения присутствия мыслящих существ, которых вы не видите.</p><p>Когда вы накладываете это заклинание, или позже, пока оно активно, потратив <em>Действие</em>, вы можете поискать мысли существ в пределах 30 футов.</p><p>Заклинание проницает большую часть барьеров, но блокируется 2 футами камня, 2 дюймами обычного металла или тонким листом свинца.</p><p>Вы не можете обнаружить существ с <strong>Интеллектом</strong> 3 и ниже, а также тех, кто не говорят ни на одном языке.</p><p>Обнаружив таким методом присутствие существа, вы можете до окончания действия заклинания читать его мысли, как описано выше, даже если вы его не видите, но оно должно находиться в пределах дистанции.</p>"
    },
    {
      "name": {
        "rus": "Палящий луч",
        "eng": "Scorching Ray"
      },
      "level": 2,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true
      },
      "url": "/spells/scorching_ray",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока"
      },
      "id": 211,
      "range": "120 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Света",
          "url": "/classes/cleric/light",
          "class": "Жрец"
        },
        {
          "name": "Исчадие",
          "url": "/classes/warlock/fiend",
          "class": "Колдун"
        },
        {
          "name": "Артиллерист",
          "url": "/classes/artificer/artillerist",
          "class": "Изобретатель"
        },
        {
          "name": "Круг Дикого Огня",
          "url": "/classes/druid/wildfire",
          "class": "Друид"
        },
        {
          "name": "Клятва Сияния",
          "url": "/classes/paladin/oath_of_radiance",
          "class": "Паладин"
        }
      ],
      "description": "<p>Вы создаёте три огненных луча и направляете их на целей, находящихся в пределах дистанции. Это может быть одна или несколько целей. Для каждого луча совершите д<em>альнобойную атаку заклинанием</em>. При попадании цель получает урон огнём <dice-roller formula=\"2к6\">2к6</dice-roller>.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, вы создаёте один дополнительный луч за каждый уровень ячейки выше второго."
    },
    {
      "name": {
        "rus": "Земляная хватка Максимилиана",
        "eng": "Maximilian's Earthen Grasp"
      },
      "level": 2,
      "school": "преобразование",
      "components": {
        "v": true,
        "s": true,
        "m": "миниатюрная рука из глины"
      },
      "concentration": true,
      "url": "/spells/maximilian's_earthen_grasp",
      "source": {
        "shortName": "XGE",
        "name": "Руководство Занатара обо всем"
      },
      "id": 393,
      "range": "30 футов",
      "duration": "Концентрация, до 1 минуты",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        }
      ],
      "description": "<p>Вы выбираете свободное пространство в пределах 5-футового квадрата, видимое в пределах дистанции. Область должна находиться на поверхности земли.</p><p>В указанном месте вырастает рука Среднего размера, созданная из спрессованной земли. Рука <detail-tooltip type=\"screen\"><a href=\"/screens/grapple\">хватает</a></detail-tooltip> одно существо, которое вы можете видеть, и которое находится в пределах 5 футов от руки. Цель должна совершить спасбросок <span class=\"saving_throw\">Силы</span>. При провале цель получает&nbsp;<dice-roller formula=\"2к6\">2к6</dice-roller> дробящего урона и становится <detail-tooltip type=\"screen\"><a href=\"/screens/restrained\">опутанной</a></detail-tooltip> на время действия заклинания.</p><p>Вы можете <em>Действием</em> приказать руке сдавить <detail-tooltip type=\"screen\"><a href=\"/screens/restrained\">опутанную</a></detail-tooltip> цель. В этом случае цель должна совершить спасбросок <span class=\"saving_throw\">Силы</span>. При провале она получает&nbsp;<dice-roller formula=\"2к6\">2к6</dice-roller> дробящего урона, а при успехе &ndash; половину урона. Чтобы освободиться, цель должна совершить успешную проверку <strong>Силы</strong> против Сл вашего заклинания. При успехе цель освобождается и более не считается <detail-tooltip type=\"screen\"><a href=\"/screens/restrained\">опутанной</a></detail-tooltip> рукой.</p><p>Вы можете <em>Действием</em> приказать руке <detail-tooltip type=\"screen\"><a href=\"/screens/grapple\">схватить</a></detail-tooltip> другое существо или переместиться в любое свободное пространство в пределах дистанции заклинания. В этих случаях рука отпускает предыдущую цель.</p>"
    },
    {
      "name": {
        "rus": "Голод Хадара",
        "eng": "Hunger of Hadar"
      },
      "level": 3,
      "school": "вызов",
      "components": {
        "v": true,
        "s": true,
        "m": "маринованное щупальце осьминога"
      },
      "concentration": true,
      "url": "/spells/hunger_of_hadar",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 221
      },
      "id": 59,
      "range": "150 футов",
      "duration": "Концентрация, вплоть до 1 минуты",
      "time": "1 действие",
      "classes": [
        {
          "name": "Колдун",
          "url": "/classes/warlock",
          "icon": "class/warlock"
        }
      ],
      "subclasses": [
        {
          "name": "Аберрантный Разум",
          "url": "/classes/sorcerer/aberrant_mind",
          "class": "Чародей"
        },
        {
          "name": "Домен Голода",
          "url": "/classes/cleric/hunger",
          "class": "Жрец"
        }
      ],
      "description": "<p>Вы открываете врата в межзвёздную тьму, область, населённую неизвестными кошмарами. Появляется сфера мглы и холода с радиусом 20 футов, с центром на точке в пределах дистанции, существующая, пока активно заклинание.</p><p>Эта пустота заполнена какофонией тихих шёпотов и хлюпающих шумов, которые слышно в пределах 30 футов. Никакой свет, ни магический, ни обычный, не может осветить эту местность, и существа, полностью находящиеся в этой области <detail-tooltip type=\"screen\"><a href=\"/screens/Blinded\">ослеплены</a></detail-tooltip>.</p><p>Пустота создаёт искажения в ткани пространства, и её местность является <detail-tooltip type=\"screen\"><a href=\"/screens/Difficult_Terrain_Move\">труднопроходимой</a></detail-tooltip>. Все существа, начинающие ход в этой местности, получают урон холодом <dice-roller formula=\"2к6\">2к6</dice-roller>.</p><p>Все существа, оканчивающие ход в этой местности, должны преуспеть в спасброске <span class=\"saving_throw\">Ловкости</span>, иначе получают урон кислотой <dice-roller formula=\"2к6\">2к6</dice-roller>, так как к ним прикасаются бледные потусторонние щупальца.</p>"
    },
    {
      "name": {
        "rus": "Огненный шар",
        "eng": "Fireball"
      },
      "level": 3,
      "school": "воплощение",
      "components": {
        "v": true,
        "s": true,
        "m": "крошечный шарик из гуано летучей мыши и серы"
      },
      "url": "/spells/fireball",
      "source": {
        "shortName": "PHB",
        "name": "Книга игрока",
        "page": 249
      },
      "id": 190,
      "range": "150 футов",
      "duration": "Мгновенная",
      "time": "1 действие",
      "classes": [
        {
          "name": "Волшебник",
          "url": "/classes/wizard",
          "icon": "class/wizard"
        },
        {
          "name": "Чародей",
          "url": "/classes/sorcerer",
          "icon": "class/sorcerer"
        },
        {
          "name": "Магус",
          "url": "/classes/magus",
          "icon": "class/magus"
        }
      ],
      "subclasses": [
        {
          "name": "Домен Света",
          "url": "/classes/cleric/light",
          "class": "Жрец"
        },
        {
          "name": "Исчадие",
          "url": "/classes/warlock/fiend",
          "class": "Колдун"
        },
        {
          "name": "Артиллерист",
          "url": "/classes/artificer/artillerist",
          "class": "Изобретатель"
        },
        {
          "name": "Хазорет: Домен Рвения",
          "url": "/classes/cleric/hazoret_zeal",
          "class": "Жрец"
        }
      ],
      "description": "<p>Яркий луч вылетает из вашего указательного пальца в точку, выбранную вами в пределах дистанции, где и происходит взрыв пламени с гулким рёвом.</p><p>Все существа в пределах сферы с радиусом 20 футов с центром в этой точке должны совершить спасбросок <span class=\"saving_throw\">Ловкости</span>.</p><p>Цель получает урон огнём <dice-roller formula=\"8к6\">8к6</dice-roller> при провале или половину этого урона при успехе. Этот огонь огибает углы. Он воспламеняет горючие предметы, которые никто не несёт и не носит.</p>",
      "upper": "Если вы накладываете это заклинание, используя ячейку 4 уровня или выше, урон увеличивается на <dice-roller formula=\"1к6\">1к6</dice-roller> за каждый уровень ячейки выше третьего."
    }
  ]
}
