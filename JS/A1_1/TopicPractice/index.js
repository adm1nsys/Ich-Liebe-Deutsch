const TOPIC_PRACTICE = {
    VhsLesson1: {
        title: { en: "Lektion 1. Guten Tag. Mein Name ist ...", uk: "Урок 1. Guten Tag. Mein Name ist ..." },
        intro: {
            en: "VHS path: greetings, names, origin, languages and the first forms of sein, heißen and sprechen.",
            uk: "VHS-доріжка: вітання, ім’я, походження, мови та перші форми sein, heißen і sprechen."
        },
        rules: [
            { de: "Guten Tag. Ich heiße Olena.", en: "Use ich heiße to introduce yourself.", uk: "Для представлення себе: ich heiße." },
            { de: "Ich komme aus der Ukraine.", en: "Use kommen aus for origin.", uk: "Для походження: kommen aus." },
            { de: "Sprechen Sie Deutsch?", en: "Polite questions often use Sie.", uk: "У ввічливих питаннях часто використовується Sie." },
            { de: "Ich bin Anfänger.", en: "sein: ich bin, Sie sind.", uk: "sein: ich bin, Sie sind." }
        ],
        exercises: [
            { sentence: "Ich ___ Olena.", answer: "heiße", options: ["heiße", "heißt", "heißen"], hint: { en: "ich -> heiße.", uk: "ich -> heiße." } },
            { sentence: "Ich komme ___ der Ukraine.", answer: "aus", options: ["aus", "in", "bei"], hint: { en: "Origin: aus.", uk: "Походження: aus." } },
            { sentence: "___ Sie Deutsch?", answer: "Sprechen", options: ["Sprechen", "Sprichst", "Spreche"], hint: { en: "Polite Sie uses infinitive form.", uk: "Ввічливе Sie має форму як інфінітив." } },
            { sentence: "Ich ___ Anfänger.", answer: "bin", options: ["bin", "ist", "sind"], hint: { en: "ich + sein = bin.", uk: "ich + sein = bin." } }
        ]
    },
    VhsLesson2: {
        title: { en: "Lektion 2. Meine Familie", uk: "Урок 2. Meine Familie" },
        intro: {
            en: "VHS path: family, simple personal information, wohnen, haben and possessive words.",
            uk: "VHS-доріжка: сім’я, прості особисті дані, wohnen, haben і присвійні слова."
        },
        rules: [
            { de: "Das ist meine Mutter.", en: "mein changes by gender: mein Vater, meine Mutter.", uk: "mein змінюється за родом: mein Vater, meine Mutter." },
            { de: "Ich habe einen Bruder.", en: "haben often takes Akkusativ.", uk: "haben часто потребує Akkusativ." },
            { de: "Wir wohnen in Köln.", en: "Use wohnen in for where someone lives.", uk: "Де хтось живе: wohnen in." },
            { de: "Wie geht es dir?", en: "A common friendly question.", uk: "Типове дружнє питання." }
        ],
        exercises: [
            { sentence: "Das ist ___ Vater.", answer: "mein", options: ["mein", "meine", "meinen"], hint: { en: "Vater is masculine Nominativ.", uk: "Vater чоловічого роду в Nominativ." } },
            { sentence: "Das ist ___ Schwester.", answer: "meine", options: ["meine", "mein", "meinen"], hint: { en: "Schwester is feminine.", uk: "Schwester жіночого роду." } },
            { sentence: "Ich ___ einen Bruder.", answer: "habe", options: ["habe", "bin", "hat"], hint: { en: "ich + haben = habe.", uk: "ich + haben = habe." } },
            { sentence: "Wir ___ in Berlin.", answer: "wohnen", options: ["wohnen", "wohnt", "wohne"], hint: { en: "wir -> wohnen.", uk: "wir -> wohnen." } }
        ]
    },
    VhsLesson3: {
        title: { en: "Lektion 3. Einkaufen", uk: "Урок 3. Einkaufen" },
        intro: {
            en: "VHS path: shopping, food, prices, ein/eine, kein/keine and möchten.",
            uk: "VHS-доріжка: покупки, продукти, ціни, ein/eine, kein/keine і möchten."
        },
        rules: [
            { de: "Ich möchte einen Kaffee.", en: "möchten is polite for ordering.", uk: "möchten — ввічлива форма для замовлення." },
            { de: "Das ist ein Apfel.", en: "ein for masculine and neuter Nominativ.", uk: "ein для чоловічого й середнього роду в Nominativ." },
            { de: "Das ist eine Banane.", en: "eine for feminine nouns.", uk: "eine для жіночого роду." },
            { de: "Ich habe keine Milch.", en: "kein/keine negates nouns.", uk: "kein/keine заперечує іменники." }
        ],
        exercises: [
            { sentence: "Ich ___ einen Tee.", answer: "möchte", options: ["möchte", "möchtest", "möchten"], hint: { en: "ich -> möchte.", uk: "ich -> möchte." } },
            { sentence: "Das ist ___ Banane.", answer: "eine", options: ["eine", "ein", "einen"], hint: { en: "Banane is feminine.", uk: "Banane жіночого роду." } },
            { sentence: "Ich habe ___ Milch.", answer: "keine", options: ["keine", "kein", "keinen"], hint: { en: "Milch is feminine.", uk: "Milch жіночого роду." } },
            { sentence: "Was ___ das?", answer: "kostet", options: ["kostet", "kosten", "kostest"], hint: { en: "das -> kostet.", uk: "das -> kostet." } }
        ]
    },
    VhsLesson4: {
        title: { en: "Lektion 4. Meine Wohnung", uk: "Урок 4. Meine Wohnung" },
        intro: {
            en: "VHS path: rooms, furniture, describing a flat, articles and simple negation.",
            uk: "VHS-доріжка: кімнати, меблі, опис квартири, артиклі й просте заперечення."
        },
        rules: [
            { de: "Das ist die Küche.", en: "Learn room nouns with der/die/das.", uk: "Назви кімнат вчи разом із der/die/das." },
            { de: "Der Tisch ist im Wohnzimmer.", en: "Use in + Dativ for location.", uk: "Для місця: in + Dativ." },
            { de: "Die Wohnung ist groß.", en: "Adjectives after sein do not take endings at A1.", uk: "Прикметники після sein на A1 без закінчень." },
            { de: "Das Zimmer ist nicht klein.", en: "nicht negates adjectives.", uk: "nicht заперечує прикметники." }
        ],
        exercises: [
            { sentence: "Das ist ___ Küche.", answer: "die", options: ["die", "der", "das"], hint: { en: "Küche is feminine.", uk: "Küche жіночого роду." } },
            { sentence: "Der Tisch ist ___ Wohnzimmer.", answer: "im", options: ["im", "in", "am"], hint: { en: "in dem = im.", uk: "in dem = im." } },
            { sentence: "Die Wohnung ___ groß.", answer: "ist", options: ["ist", "bin", "sind"], hint: { en: "Wohnung is singular.", uk: "Wohnung — однина." } },
            { sentence: "Das Zimmer ist ___ klein.", answer: "nicht", options: ["nicht", "kein", "keine"], hint: { en: "Adjective: nicht klein.", uk: "Прикметник: nicht klein." } }
        ]
    },
    VhsLesson5: {
        title: { en: "Lektion 5. Mein Tag", uk: "Урок 5. Mein Tag" },
        intro: {
            en: "VHS path: daily routine, time, weekdays and separable verbs.",
            uk: "VHS-доріжка: розпорядок дня, час, дні тижня й відокремлювані дієслова."
        },
        rules: [
            { de: "Ich stehe um sieben Uhr auf.", en: "Separable prefix goes to the end.", uk: "Відокремлюваний префікс іде в кінець." },
            { de: "Der Kurs beginnt um neun Uhr.", en: "Clock time uses um.", uk: "Час на годиннику має um." },
            { de: "Am Montag lerne ich Deutsch.", en: "Days use am.", uk: "Дні тижня мають am." },
            { de: "Von acht bis zwölf arbeite ich.", en: "von ... bis ... = from ... to ...", uk: "von ... bis ... = від ... до ..." }
        ],
        exercises: [
            { sentence: "Ich stehe früh ___.", answer: "auf", options: ["auf", "an", "ein"], hint: { en: "aufstehen separates.", uk: "aufstehen відокремлюється." } },
            { sentence: "Der Kurs beginnt ___ acht Uhr.", answer: "um", options: ["um", "am", "im"], hint: { en: "Clock time: um.", uk: "Час на годиннику: um." } },
            { sentence: "___ Montag arbeite ich.", answer: "Am", options: ["Am", "Im", "Um"], hint: { en: "Days: am Montag.", uk: "Дні: am Montag." } },
            { sentence: "Ich arbeite von neun ___ fünf.", answer: "bis", options: ["bis", "um", "am"], hint: { en: "von ... bis ...", uk: "von ... bis ..." } }
        ]
    },
    VhsLesson6: {
        title: { en: "Lektion 6. Freizeit", uk: "Урок 6. Freizeit" },
        intro: {
            en: "VHS path: free time, hobbies, weather, Akkusativ and short answers.",
            uk: "VHS-доріжка: вільний час, хобі, погода, Akkusativ і короткі відповіді."
        },
        rules: [
            { de: "Ich lese ein Buch.", en: "Akkusativ object can stay ein for neuter nouns.", uk: "Для середнього роду в Akkusativ форма ein лишається." },
            { de: "Ich treffe den Freund.", en: "Masculine Akkusativ: den/einen.", uk: "Чоловічий рід в Akkusativ: den/einen." },
            { de: "Ja, ich komme. / Nein, ich komme nicht.", en: "Short answers repeat the key verb idea.", uk: "Коротка відповідь повторює головну дію." },
            { de: "Doch, ich komme.", en: "doch answers a negative question positively.", uk: "doch позитивно відповідає на заперечне питання." }
        ],
        exercises: [
            { sentence: "Ich treffe ___ Freund.", answer: "den", options: ["den", "der", "dem"], hint: { en: "Masculine Akkusativ.", uk: "Чоловічий рід, Akkusativ." } },
            { sentence: "Ich lese ___ Buch.", answer: "ein", options: ["ein", "einen", "eine"], hint: { en: "Buch is neuter.", uk: "Buch середнього роду." } },
            { sentence: "Kommst du nicht? — ___, ich komme.", answer: "Doch", options: ["Doch", "Nein", "Nicht"], hint: { en: "Positive answer to a negative question.", uk: "Позитивна відповідь на заперечне питання." } },
            { sentence: "Heute ___ die Sonne.", answer: "scheint", options: ["scheint", "scheinen", "scheinst"], hint: { en: "die Sonne -> scheint.", uk: "die Sonne -> scheint." } }
        ]
    },
    VhsLesson7: {
        title: { en: "Lektion 7. Kinder und Schule", uk: "Урок 7. Kinder und Schule" },
        intro: {
            en: "VHS path: school, children, können/wollen, sentence brackets and first Perfekt patterns.",
            uk: "VHS-доріжка: школа, діти, können/wollen, рамкова конструкція речення й перші форми Perfekt."
        },
        rules: [
            { de: "Ich kann gut lesen.", en: "Modal verb in position 2, infinitive at the end.", uk: "Модальне дієслово на 2-й позиції, інфінітив у кінці." },
            { de: "Wir wollen Deutsch lernen.", en: "wollen works like other modal verbs.", uk: "wollen працює як інші модальні дієслова." },
            { de: "Ich habe Hausaufgaben gemacht.", en: "First Perfekt pattern: haben + Partizip II.", uk: "Перший шаблон Perfekt: haben + Partizip II." },
            { de: "Sie ist zur Schule gegangen.", en: "Some movement verbs use sein in Perfekt.", uk: "Деякі дієслова руху мають sein у Perfekt." }
        ],
        exercises: [
            { sentence: "Ich ___ gut lesen.", answer: "kann", options: ["kann", "können", "kannst"], hint: { en: "ich -> kann.", uk: "ich -> kann." } },
            { sentence: "Wir ___ Deutsch lernen.", answer: "wollen", options: ["wollen", "will", "willst"], hint: { en: "wir -> wollen.", uk: "wir -> wollen." } },
            { sentence: "Ich habe Hausaufgaben ___.", answer: "gemacht", options: ["gemacht", "machen", "macht"], hint: { en: "Perfekt: haben + gemacht.", uk: "Perfekt: haben + gemacht." } },
            { sentence: "Sie ___ zur Schule gegangen.", answer: "ist", options: ["ist", "hat", "sind"], hint: { en: "Movement: ist gegangen.", uk: "Рух: ist gegangen." } }
        ]
    },
    NominativeCase: {
        title: { en: "9. Nominative Case", uk: "9. Називний відмінок (Nominativ)" },
        intro: {
            en: "Nominativ names the subject: who or what does the action.",
            uk: "Nominativ називає підмет: хто або що виконує дію."
        },
        rules: [
            { de: "Der Mann kommt.", en: "der/ein for masculine subjects.", uk: "der/ein для чоловічого роду в ролі підмета." },
            { de: "Die Frau lernt Deutsch.", en: "die/eine for feminine subjects.", uk: "die/eine для жіночого роду в ролі підмета." },
            { de: "Das Kind spielt.", en: "das/ein for neuter subjects.", uk: "das/ein для середнього роду в ролі підмета." },
            { de: "Die Kinder sind hier.", en: "Plural subjects use die, no indefinite plural article.", uk: "Множина має die, а неозначеного артикля в множині немає." }
        ],
        exercises: [
            { sentence: "___ Mann trinkt Kaffee.", answer: "Der", options: ["Der", "Den", "Dem"], hint: { en: "Mann is the subject.", uk: "Mann тут підмет." } },
            { sentence: "___ Frau wohnt in Berlin.", answer: "Die", options: ["Die", "Der", "Den"], hint: { en: "Feminine subject: die.", uk: "Жіночий рід як підмет: die." } },
            { sentence: "___ Kind spielt im Garten.", answer: "Das", options: ["Das", "Den", "Dem"], hint: { en: "Neuter subject: das.", uk: "Середній рід як підмет: das." } },
            { sentence: "___ Lehrer ist nett.", answer: "Ein", options: ["Ein", "Einen", "Einem"], hint: { en: "Masculine Nominativ indefinite article.", uk: "Чоловічий рід, Nominativ, неозначений артикль." } },
            { sentence: "___ Bücher sind neu.", answer: "Die", options: ["Die", "Das", "Der"], hint: { en: "Plural Nominativ: die.", uk: "Множина в Nominativ: die." } }
        ]
    },
    AccusativeCase: {
        title: { en: "10. Accusative Case", uk: "10. Знахідний відмінок (Akkusativ)" },
        intro: {
            en: "Akkusativ marks the direct object: whom or what someone sees, has, buys, needs.",
            uk: "Akkusativ позначає прямий додаток: кого або що бачать, мають, купують, потребують."
        },
        rules: [
            { de: "Ich sehe den Mann.", en: "Only masculine articles clearly change: der -> den, ein -> einen.", uk: "Найпомітніше змінюється чоловічий рід: der -> den, ein -> einen." },
            { de: "Ich sehe die Frau.", en: "Feminine stays die/eine.", uk: "Жіночий рід лишається die/eine." },
            { de: "Ich sehe das Kind.", en: "Neuter stays das/ein.", uk: "Середній рід лишається das/ein." },
            { de: "Ich sehe die Kinder.", en: "Plural definite article stays die.", uk: "У множині означений артикль лишається die." }
        ],
        exercises: [
            { sentence: "Ich sehe ___ Mann.", answer: "den", options: ["den", "der", "dem"], hint: { en: "Masculine direct object: den.", uk: "Чоловічий рід як прямий додаток: den." } },
            { sentence: "Wir kaufen ___ Tisch.", answer: "einen", options: ["einen", "ein", "einem"], hint: { en: "Tisch is masculine in Akkusativ.", uk: "Tisch чоловічого роду в Akkusativ." } },
            { sentence: "Sie hat ___ Katze.", answer: "eine", options: ["eine", "einen", "ein"], hint: { en: "Katze is feminine; no visible change.", uk: "Katze жіночого роду; форма не змінюється." } },
            { sentence: "Er braucht ___ Auto.", answer: "ein", options: ["ein", "einen", "eine"], hint: { en: "Auto is neuter.", uk: "Auto середнього роду." } },
            { sentence: "Ich kenne ___ Kinder.", answer: "die", options: ["die", "den", "der"], hint: { en: "Plural direct object with definite article: die.", uk: "Множина як прямий додаток з означеним артиклем: die." } }
        ]
    },
    PluralNouns: {
        title: { en: "11. Plural Nouns", uk: "11. Множина іменників" },
        intro: {
            en: "German plurals are learned with the noun. The article is usually die in plural.",
            uk: "Німецьку множину краще вчити разом зі словом. Артикль у множині зазвичай die."
        },
        rules: [
            { de: "der Tisch -> die Tische", en: "Many nouns add -e, often with umlaut.", uk: "Багато іменників додають -e, інколи з умлаутом." },
            { de: "die Frau -> die Frauen", en: "Many feminine nouns add -n or -en.", uk: "Багато жіночих іменників додають -n або -en." },
            { de: "das Kind -> die Kinder", en: "Some neuter nouns add -er, often with umlaut.", uk: "Деякі середнього роду додають -er, інколи з умлаутом." },
            { de: "das Auto -> die Autos", en: "International words often add -s.", uk: "Інтернаціональні слова часто додають -s." }
        ],
        exercises: [
            { sentence: "der Tisch -> die ___", answer: "Tische", options: ["Tische", "Tischen", "Tischs"], hint: { en: "Tisch usually takes -e.", uk: "Tisch зазвичай має множину на -e." } },
            { sentence: "die Frau -> die ___", answer: "Frauen", options: ["Frauen", "Fraue", "Fraus"], hint: { en: "Feminine noun with -en.", uk: "Жіночий рід з -en." } },
            { sentence: "das Kind -> die ___", answer: "Kinder", options: ["Kinder", "Kinds", "Kinde"], hint: { en: "Common A1 plural: Kinder.", uk: "Типова A1-множина: Kinder." } },
            { sentence: "das Auto -> die ___", answer: "Autos", options: ["Autos", "Autoen", "Auter"], hint: { en: "International word: -s.", uk: "Інтернаціональне слово: -s." } },
            { sentence: "der Apfel -> die ___", answer: "Äpfel", options: ["Äpfel", "Apfels", "Apfeln"], hint: { en: "Umlaut appears: Apfel -> Äpfel.", uk: "З’являється умлаут: Apfel -> Äpfel." } }
        ]
    },
    ModalVerbs: {
        title: { en: "13. Basic Modal Verbs", uk: "13. Базові модальні дієслова" },
        intro: {
            en: "Modal verbs take position 2, and the main verb goes to the end in infinitive.",
            uk: "Модальне дієслово стоїть на другій позиції, а головне дієслово йде в кінець в інфінітиві."
        },
        rules: [
            { de: "Ich kann schwimmen.", en: "können = can, to be able to.", uk: "können = могти, вміти." },
            { de: "Du musst lernen.", en: "müssen = must, have to.", uk: "müssen = мусити, бути змушеним." },
            { de: "Wir möchten Kaffee trinken.", en: "möchten = would like.", uk: "möchten = хотіти б." },
            { de: "Er darf hier bleiben.", en: "dürfen = may, be allowed to.", uk: "dürfen = мати дозвіл." }
        ],
        exercises: [
            { sentence: "Ich ___ Deutsch sprechen.", answer: "kann", options: ["kann", "können", "kannst"], hint: { en: "ich -> kann.", uk: "ich -> kann." } },
            { sentence: "Du ___ heute lernen.", answer: "musst", options: ["musst", "muss", "müssen"], hint: { en: "du -> musst.", uk: "du -> musst." } },
            { sentence: "Wir ___ einen Kaffee trinken.", answer: "möchten", options: ["möchten", "möchte", "möchtest"], hint: { en: "wir -> möchten.", uk: "wir -> möchten." } },
            { sentence: "Er ___ hier nicht rauchen.", answer: "darf", options: ["darf", "dürfen", "darfst"], hint: { en: "er -> darf.", uk: "er -> darf." } },
            { sentence: "Ihr ___ das machen.", answer: "sollt", options: ["sollt", "sollen", "soll"], hint: { en: "ihr -> sollt.", uk: "ihr -> sollt." } }
        ]
    },
    SeparableVerbs: {
        title: { en: "14. Separable Verbs", uk: "14. Відокремлювані дієслова" },
        intro: {
            en: "With separable verbs, the prefix often moves to the end of the sentence.",
            uk: "У відокремлюваних дієсловах префікс часто переходить у кінець речення."
        },
        rules: [
            { de: "Ich stehe um 7 Uhr auf.", en: "aufstehen -> stehe ... auf.", uk: "aufstehen -> stehe ... auf." },
            { de: "Wir kaufen heute ein.", en: "einkaufen -> kaufen ... ein.", uk: "einkaufen -> kaufen ... ein." },
            { de: "Rufst du mich an?", en: "In yes/no questions the prefix still goes to the end.", uk: "У питаннях так/ні префікс теж іде в кінець." },
            { de: "Ich muss früh aufstehen.", en: "With a modal verb, the infinitive stays together at the end.", uk: "З модальним дієсловом інфінітив лишається разом у кінці." }
        ],
        exercises: [
            { sentence: "Ich stehe um 7 Uhr ___.", answer: "auf", options: ["auf", "an", "ein"], hint: { en: "aufstehen separates: stehe ... auf.", uk: "aufstehen відокремлюється: stehe ... auf." } },
            { sentence: "Wir kaufen heute ___.", answer: "ein", options: ["ein", "auf", "mit"], hint: { en: "einkaufen -> kaufen ... ein.", uk: "einkaufen -> kaufen ... ein." } },
            { sentence: "Er ruft seine Mutter ___.", answer: "an", options: ["an", "auf", "aus"], hint: { en: "anrufen -> ruft ... an.", uk: "anrufen -> ruft ... an." } },
            { sentence: "Der Zug kommt um 8 Uhr ___.", answer: "an", options: ["an", "ein", "mit"], hint: { en: "ankommen -> kommt ... an.", uk: "ankommen -> kommt ... an." } },
            { sentence: "Ich muss früh ___.", answer: "aufstehen", options: ["aufstehen", "stehe auf", "auf"], hint: { en: "After a modal verb, use the full infinitive.", uk: "Після модального дієслова потрібен повний інфінітив." } }
        ]
    },
    BasicPrepositions: {
        title: { en: "15. Basic Prepositions", uk: "15. Базові прийменники" },
        intro: {
            en: "Prepositions often require a case. At A1, learn them together with common phrases.",
            uk: "Прийменники часто вимагають певного відмінка. На A1 краще вчити їх разом із типовими фразами."
        },
        rules: [
            { de: "mit dem Bus", en: "mit takes Dativ.", uk: "mit вимагає Dativ." },
            { de: "für den Kurs", en: "für takes Akkusativ.", uk: "für вимагає Akkusativ." },
            { de: "um 8 Uhr", en: "um is used for clock time.", uk: "um використовується для часу на годиннику." },
            { de: "in der Schule / in die Schule", en: "in can show place or direction.", uk: "in може показувати місце або напрямок." }
        ],
        exercises: [
            { sentence: "Ich fahre ___ dem Bus.", answer: "mit", options: ["mit", "für", "um"], hint: { en: "Transport phrase: mit dem Bus.", uk: "Фраза з транспортом: mit dem Bus." } },
            { sentence: "Das Geschenk ist ___ dich.", answer: "für", options: ["für", "mit", "bei"], hint: { en: "for you = für dich.", uk: "для тебе = für dich." } },
            { sentence: "Der Kurs beginnt ___ 9 Uhr.", answer: "um", options: ["um", "am", "im"], hint: { en: "Clock time uses um.", uk: "Час на годиннику має um." } },
            { sentence: "Ich bin ___ der Schule.", answer: "in", options: ["in", "nach", "zu"], hint: { en: "Place: in der Schule.", uk: "Місце: in der Schule." } },
            { sentence: "Ich gehe ___ Hause.", answer: "nach", options: ["nach", "bei", "mit"], hint: { en: "Homeward direction: nach Hause.", uk: "Напрямок додому: nach Hause." } }
        ]
    },
    NumbersTimeDates: {
        title: { en: "16. Numbers, Time & Dates", uk: "16. Числа, час і дати" },
        intro: {
            en: "Numbers help with prices, addresses, time and dates. Time often uses um.",
            uk: "Числа потрібні для цін, адрес, часу й дат. Для часу часто використовується um."
        },
        rules: [
            { de: "eins, zwei, drei", en: "Learn numbers in chunks: 1-12, then tens.", uk: "Вчи числа блоками: 1-12, потім десятки." },
            { de: "um acht Uhr", en: "At eight o'clock = um acht Uhr.", uk: "О восьмій годині = um acht Uhr." },
            { de: "am Montag", en: "Days use am.", uk: "Дні тижня використовують am." },
            { de: "im Juni", en: "Months use im.", uk: "Місяці використовують im." }
        ],
        exercises: [
            { sentence: "7 = ___", answer: "sieben", options: ["sieben", "sechs", "acht"], hint: { en: "7 is sieben.", uk: "7 німецькою sieben." } },
            { sentence: "20 = ___", answer: "zwanzig", options: ["zwanzig", "zwei", "zwölf"], hint: { en: "20 is zwanzig.", uk: "20 німецькою zwanzig." } },
            { sentence: "Der Unterricht beginnt ___ acht Uhr.", answer: "um", options: ["um", "am", "im"], hint: { en: "Clock time uses um.", uk: "Час на годиннику має um." } },
            { sentence: "Wir lernen ___ Montag.", answer: "am", options: ["am", "im", "um"], hint: { en: "Days use am.", uk: "Дні тижня мають am." } },
            { sentence: "Ich habe Geburtstag ___ Juni.", answer: "im", options: ["im", "am", "um"], hint: { en: "Months use im.", uk: "Місяці мають im." } }
        ]
    },
    BasicStructures: {
        title: { en: "17. Basic Structures", uk: "17. Базові конструкції" },
        intro: {
            en: "These short patterns are useful for everyday A1 speech.",
            uk: "Ці короткі конструкції дуже корисні для щоденного мовлення на A1."
        },
        rules: [
            { de: "Das ist mein Buch.", en: "das ist = this/that is.", uk: "das ist = це є / це." },
            { de: "Es gibt hier ein Café.", en: "es gibt = there is / there are.", uk: "es gibt = є / існує." },
            { de: "Ich möchte Wasser.", en: "ich möchte = I would like.", uk: "ich möchte = я хотів/хотіла б." },
            { de: "Ich hätte gern einen Kaffee.", en: "ich hätte gern is polite ordering language.", uk: "ich hätte gern — ввічлива фраза для замовлення." }
        ],
        exercises: [
            { sentence: "___ ist mein Bruder.", answer: "Das", options: ["Das", "Es", "Ich"], hint: { en: "This is my brother: Das ist...", uk: "Це мій брат: Das ist..." } },
            { sentence: "___ gibt hier ein Restaurant.", answer: "Es", options: ["Es", "Das", "Ich"], hint: { en: "There is: Es gibt.", uk: "Є / існує: Es gibt." } },
            { sentence: "Ich ___ einen Tee.", answer: "möchte", options: ["möchte", "gibt", "ist"], hint: { en: "I would like: ich möchte.", uk: "Я хотів/хотіла б: ich möchte." } },
            { sentence: "Ich ___ gern einen Kaffee.", answer: "hätte", options: ["hätte", "hat", "bin"], hint: { en: "Polite order: Ich hätte gern...", uk: "Ввічливе замовлення: Ich hätte gern..." } },
            { sentence: "___ sind meine Eltern.", answer: "Das", options: ["Das", "Es", "Ich"], hint: { en: "Introducing people: Das sind...", uk: "Представляємо людей: Das sind..." } }
        ]
    }
};

const VHS_LESSON_DETAILS = {
    VhsLesson1: {
        goals: {
            en: ["greet people formally and informally", "say your name and ask for another person's name", "say where you come from", "ask which languages someone speaks"],
            uk: ["привітатися формально й неформально", "назвати своє ім'я і запитати ім'я іншої людини", "сказати, звідки ти", "запитати, якими мовами хтось говорить"]
        },
        explanation: {
            en: "This first lesson is about building a tiny self-introduction. German keeps the verb in the second position in normal statements: Ich heiße Olena. Ich komme aus der Ukraine. In polite questions with Sie, the verb comes first: Sprechen Sie Deutsch?",
            uk: "Перший урок будує маленьке самопредставлення. У звичайному німецькому реченні дієслово стоїть на другій позиції: Ich heiße Olena. Ich komme aus der Ukraine. У ввічливому питанні з Sie дієслово виходить на перше місце: Sprechen Sie Deutsch?"
        },
        grammar: [
            { title: "heißen", de: "Ich heiße ... / Wie heißen Sie?", uk: "heißen означає 'зватися'. Для ich: heiße, для Sie: heißen." },
            { title: "kommen aus", de: "Ich komme aus Polen.", uk: "Походження передаємо через kommen aus. З країнами часто кажемо просто aus + країна, але з деякими країнами потрібен артикль: aus der Ukraine." },
            { title: "sein", de: "Ich bin ... / Sie sind ...", uk: "sein неправильне дієслово. На старті тримай у пам'яті дві форми: ich bin, Sie sind." }
        ],
        phrases: [
            { de: "Guten Morgen / Guten Tag / Guten Abend", uk: "Доброго ранку / добрий день / добрий вечір" },
            { de: "Hallo. Ich heiße ...", uk: "Привіт. Мене звати ..." },
            { de: "Woher kommen Sie?", uk: "Звідки Ви?" },
            { de: "Ich spreche Ukrainisch und ein bisschen Deutsch.", uk: "Я говорю українською і трохи німецькою." }
        ],
        dialog: [
            { de: "Guten Tag. Wie heißen Sie?", uk: "Добрий день. Як Вас звати?" },
            { de: "Ich heiße Olena. Und Sie?", uk: "Мене звати Олена. А Вас?" },
            { de: "Ich heiße Martin. Woher kommen Sie?", uk: "Мене звати Мартін. Звідки Ви?" },
            { de: "Ich komme aus der Ukraine.", uk: "Я з України." }
        ],
        remember: {
            en: "Do not translate word by word from Ukrainian. 'Мене звати ...' becomes Ich heiße ..., not Ich bin Name.",
            uk: "Не перекладай дослівно з української. 'Мене звати ...' німецькою Ich heiße ..., а не Ich bin Name."
        }
    },
    VhsLesson2: {
        goals: {
            en: ["talk about family members", "use mein/meine", "use haben for family", "say where people live"],
            uk: ["називати членів сім'ї", "вживати mein/meine", "говорити про сім'ю через haben", "сказати, де люди живуть"]
        },
        explanation: {
            en: "Family topics combine vocabulary with articles and possessive words. German does not use one fixed word for 'my': it changes by the noun. mein Vater, but meine Mutter. With haben, the person or thing you have is usually in Akkusativ.",
            uk: "Тема сім'ї поєднує словник, артиклі й присвійні слова. У німецькій немає одного незмінного 'мій': форма залежить від іменника. mein Vater, але meine Mutter. Після haben людина або річ зазвичай стоїть в Akkusativ."
        },
        grammar: [
            { title: "mein / meine", de: "mein Vater, meine Mutter, mein Kind", uk: "mein для der/das, meine для die. Це той самий принцип, що ein/eine." },
            { title: "haben", de: "Ich habe einen Bruder. Sie hat eine Schwester.", uk: "haben: ich habe, du hast, er/sie hat. Чоловічий рід у Akkusativ: einen Bruder." },
            { title: "wohnen", de: "Wir wohnen in Berlin.", uk: "wohnen = жити/мешкати. Для міста: in Berlin, in Köln, in Hamburg." }
        ],
        phrases: [
            { de: "Das ist meine Familie.", uk: "Це моя сім'я." },
            { de: "Ich habe einen Bruder und eine Schwester.", uk: "У мене є брат і сестра." },
            { de: "Meine Eltern wohnen in Lwiw.", uk: "Мої батьки живуть у Львові." },
            { de: "Wie geht es dir?", uk: "Як справи?" }
        ],
        dialog: [
            { de: "Hast du Geschwister?", uk: "У тебе є брати або сестри?" },
            { de: "Ja, ich habe eine Schwester.", uk: "Так, у мене є сестра." },
            { de: "Wo wohnt deine Schwester?", uk: "Де живе твоя сестра?" },
            { de: "Sie wohnt in Berlin.", uk: "Вона живе в Берліні." }
        ],
        remember: {
            en: "For family, learn the article together with every noun: der Vater, die Mutter, das Kind.",
            uk: "Для сім'ї вчи кожне слово разом з артиклем: der Vater, die Mutter, das Kind."
        }
    },
    VhsLesson3: {
        goals: {
            en: ["buy food and drinks", "ask for prices", "use ein/eine and kein/keine", "order politely with möchten"],
            uk: ["купувати їжу й напої", "питати ціну", "вживати ein/eine і kein/keine", "ввічливо замовляти через möchten"]
        },
        explanation: {
            en: "Shopping language is formulaic: you can reuse the same patterns with many nouns. Ich möchte ... is safer and more polite than Ich will ... in a shop or cafe. kein works like ein, but means 'not a / no'.",
            uk: "Мова покупок дуже шаблонна: ті самі конструкції можна повторювати з різними словами. Ich möchte ... у магазині чи кафе звучить ввічливіше й безпечніше, ніж Ich will ... Kein працює як ein, але означає 'не / жоден'."
        },
        grammar: [
            { title: "möchten", de: "Ich möchte einen Kaffee.", uk: "möchten = хотів/хотіла б. Після нього часто йде предмет в Akkusativ: einen Kaffee, eine Banane, ein Brot." },
            { title: "ein / eine", de: "ein Apfel, eine Banane, ein Brot", uk: "ein для der/das, eine для die. У чоловічому Akkusativ: einen Apfel." },
            { title: "kein / keine", de: "kein Kaffee, keine Milch, kein Brot", uk: "kein заперечує іменник: keine Milch = немає молока / не молоко." }
        ],
        phrases: [
            { de: "Was kostet das?", uk: "Скільки це коштує?" },
            { de: "Ich möchte einen Tee.", uk: "Я хотів/хотіла б чай." },
            { de: "Haben Sie Milch?", uk: "У вас є молоко?" },
            { de: "Das macht drei Euro.", uk: "З Вас три євро." }
        ],
        dialog: [
            { de: "Guten Tag. Was möchten Sie?", uk: "Добрий день. Що бажаєте?" },
            { de: "Ich möchte einen Kaffee und ein Brot.", uk: "Я хотів/хотіла б каву і хліб." },
            { de: "Noch etwas?", uk: "Ще щось?" },
            { de: "Nein, danke. Was kostet das?", uk: "Ні, дякую. Скільки це коштує?" }
        ],
        remember: {
            en: "Milch as a drink or substance usually appears without an article: Ich möchte Milch.",
            uk: "Milch як напій або речовина зазвичай без артикля: Ich möchte Milch."
        }
    },
    VhsLesson4: {
        goals: {
            en: ["name rooms and furniture", "describe a flat", "use der/die/das with objects", "negate descriptions with nicht"],
            uk: ["називати кімнати й меблі", "описувати квартиру", "вживати der/die/das з предметами", "заперечувати описи через nicht"]
        },
        explanation: {
            en: "When describing a flat, German often uses short sein sentences: Die Küche ist klein. Das Zimmer ist hell. For location, you meet forms like im Wohnzimmer, in der Küche. At A1, memorize them as chunks first.",
            uk: "Опис квартири часто будується через короткі речення з sein: Die Küche ist klein. Das Zimmer ist hell. Для місця з'являються форми im Wohnzimmer, in der Küche. На A1 краще спершу вчити їх як готові блоки."
        },
        grammar: [
            { title: "articles", de: "der Tisch, die Küche, das Bad", uk: "Для предметів і кімнат артикль треба вчити одразу зі словом." },
            { title: "location", de: "im Wohnzimmer, in der Küche", uk: "Де? часто дає Dativ: in dem -> im, in der лишається in der." },
            { title: "nicht + adjective", de: "Das Zimmer ist nicht groß.", uk: "Якщо заперечуємо прикметник, ставимо nicht прямо перед ним." }
        ],
        phrases: [
            { de: "Meine Wohnung ist hell.", uk: "Моя квартира світла." },
            { de: "Das Bad ist klein.", uk: "Ванна кімната маленька." },
            { de: "Der Tisch ist in der Küche.", uk: "Стіл на кухні." },
            { de: "Das Zimmer ist nicht teuer.", uk: "Кімната не дорога." }
        ],
        dialog: [
            { de: "Wie ist deine Wohnung?", uk: "Яка твоя квартира?" },
            { de: "Sie ist klein, aber hell.", uk: "Вона маленька, але світла." },
            { de: "Hast du einen Balkon?", uk: "У тебе є балкон?" },
            { de: "Nein, ich habe keinen Balkon.", uk: "Ні, у мене немає балкона." }
        ],
        remember: {
            en: "Use nicht for adjectives: nicht klein. Use kein for nouns: kein Balkon.",
            uk: "Для прикметників використовуй nicht: nicht klein. Для іменників використовуй kein: kein Balkon."
        }
    },
    VhsLesson5: {
        goals: {
            en: ["talk about daily routine", "tell time", "use weekdays", "understand separable verbs"],
            uk: ["говорити про розпорядок дня", "називати час", "вживати дні тижня", "розуміти відокремлювані дієслова"]
        },
        explanation: {
            en: "Daily routine introduces a very German sentence pattern: separable verbs. The main part of the verb is in position 2, and the prefix waits at the end. This creates a sentence bracket: Ich stehe um sieben Uhr auf.",
            uk: "Розпорядок дня вводить дуже німецьку конструкцію: відокремлювані дієслова. Основна частина дієслова стоїть на 2-й позиції, а префікс чекає в кінці. Так утворюється рамка речення: Ich stehe um sieben Uhr auf."
        },
        grammar: [
            { title: "time", de: "um sieben Uhr", uk: "Для точного часу використовуємо um: um 7 Uhr, um halb acht." },
            { title: "weekdays", de: "am Montag, am Dienstag", uk: "Для днів тижня використовуємо am." },
            { title: "separable verbs", de: "aufstehen -> Ich stehe ... auf.", uk: "Префікс auf, ein, an, mit часто переходить у кінець." }
        ],
        phrases: [
            { de: "Ich stehe um sieben Uhr auf.", uk: "Я встаю о сьомій." },
            { de: "Der Kurs beginnt um neun Uhr.", uk: "Курс починається о дев'ятій." },
            { de: "Am Abend lerne ich Deutsch.", uk: "Увечері я вчу німецьку." },
            { de: "Von Montag bis Freitag arbeite ich.", uk: "З понеділка до п'ятниці я працюю." }
        ],
        dialog: [
            { de: "Wann stehst du auf?", uk: "Коли ти встаєш?" },
            { de: "Ich stehe um sieben Uhr auf.", uk: "Я встаю о сьомій." },
            { de: "Wann beginnt dein Deutschkurs?", uk: "Коли починається твій курс німецької?" },
            { de: "Er beginnt um neun Uhr.", uk: "Він починається о дев'ятій." }
        ],
        remember: {
            en: "In a normal statement the conjugated verb stays second, even if the time phrase is first: Um sieben Uhr stehe ich auf.",
            uk: "У звичайному реченні відмінюване дієслово завжди друге, навіть якщо час стоїть першим: Um sieben Uhr stehe ich auf."
        }
    },
    VhsLesson6: {
        goals: {
            en: ["talk about free time", "say what you like doing", "use Akkusativ objects", "answer negative questions with doch"],
            uk: ["говорити про вільний час", "сказати, що любиш робити", "вживати об'єкти в Akkusativ", "відповідати doch на заперечні питання"]
        },
        explanation: {
            en: "Free-time sentences often need an object: Ich lese ein Buch. Ich treffe den Freund. This is where Akkusativ becomes practical. You also learn short answers: ja, nein and doch.",
            uk: "Речення про вільний час часто мають об'єкт: Ich lese ein Buch. Ich treffe den Freund. Тут Akkusativ стає практичним. Також з'являються короткі відповіді: ja, nein і doch."
        },
        grammar: [
            { title: "Akkusativ", de: "Ich treffe den Freund.", uk: "Після treffen, sehen, kaufen часто стоїть прямий додаток. Чоловічий рід: den/einen." },
            { title: "gern", de: "Ich lese gern.", uk: "gern показує, що дія подобається: ich spiele gern, ich lese gern." },
            { title: "doch", de: "Kommst du nicht? Doch.", uk: "doch означає позитивну відповідь на заперечне питання: 'Навпаки, прийду'." }
        ],
        phrases: [
            { de: "Ich spiele gern Fußball.", uk: "Я люблю грати у футбол." },
            { de: "Wir treffen Freunde.", uk: "Ми зустрічаємо друзів." },
            { de: "Heute scheint die Sonne.", uk: "Сьогодні світить сонце." },
            { de: "Nein, heute habe ich keine Zeit.", uk: "Ні, сьогодні я не маю часу." }
        ],
        dialog: [
            { de: "Was machst du gern?", uk: "Що ти любиш робити?" },
            { de: "Ich lese gern und treffe Freunde.", uk: "Я люблю читати і зустрічати друзів." },
            { de: "Kommst du heute nicht?", uk: "Ти сьогодні не прийдеш?" },
            { de: "Doch, ich komme um acht Uhr.", uk: "Прийду, я прийду о восьмій." }
        ],
        remember: {
            en: "doch is small but important. It corrects a negative question or statement.",
            uk: "doch маленьке, але важливе. Воно заперечує негативне питання або твердження."
        }
    },
    VhsLesson7: {
        goals: {
            en: ["talk about school and children", "use können and wollen", "understand sentence brackets", "recognize first Perfekt forms"],
            uk: ["говорити про школу й дітей", "вживати können і wollen", "розуміти рамку речення", "впізнавати перші форми Perfekt"]
        },
        explanation: {
            en: "This lesson brings together two bracket patterns. With modal verbs, the conjugated modal is second and the infinitive is at the end. With Perfekt, haben/sein is second and the participle is at the end.",
            uk: "Цей урок поєднує дві рамкові конструкції. З модальними дієсловами відмінюване модальне стоїть другим, а інфінітив у кінці. У Perfekt haben/sein стоїть другим, а Partizip II у кінці."
        },
        grammar: [
            { title: "modal bracket", de: "Ich kann gut lesen.", uk: "kann стоїть на 2-й позиції, lesen іде в кінець." },
            { title: "wollen", de: "Wir wollen Deutsch lernen.", uk: "wollen = хотіти. Форма wir: wollen, форма ich/er/sie/es: will." },
            { title: "Perfekt", de: "Ich habe gelernt. Sie ist gegangen.", uk: "Більшість дієслів мають haben + Partizip II. Деякі рухи мають sein." }
        ],
        phrases: [
            { de: "Mein Kind geht zur Schule.", uk: "Моя дитина ходить до школи." },
            { de: "Ich kann gut lesen.", uk: "Я добре вмію читати." },
            { de: "Wir wollen Deutsch lernen.", uk: "Ми хочемо вчити німецьку." },
            { de: "Ich habe Hausaufgaben gemacht.", uk: "Я зробив/зробила домашнє завдання." }
        ],
        dialog: [
            { de: "Kann dein Kind schon lesen?", uk: "Твоя дитина вже вміє читати?" },
            { de: "Ja, sie kann gut lesen.", uk: "Так, вона добре вміє читати." },
            { de: "Habt ihr Hausaufgaben gemacht?", uk: "Ви зробили домашнє завдання?" },
            { de: "Ja, wir haben gelernt.", uk: "Так, ми вчилися." }
        ],
        remember: {
            en: "Do not put the final verb too early. German often keeps the important verb piece at the end.",
            uk: "Не став фінальне дієслово занадто рано. Німецька часто тримає важливу дієслівну частину в кінці."
        }
    }
};

const CURRENT_TOPIC = TOPIC_PRACTICE[PAGE_NAME] || TOPIC_PRACTICE.NominativeCase;
const lang = getLanguage();
let currentIndex = 0;
let selectedAnswer = null;
let score = 0;

function localText(value) {
    if (typeof value === "string") return value;
    return value[lang] || value.en || value.uk || "";
}

function localList(value) {
    if (!value) return [];
    return value[lang] || value.en || value.uk || [];
}

function renderRichLessonDetails() {
    const details = VHS_LESSON_DETAILS[PAGE_NAME];
    if (!details) return "";

    const goals = localList(details.goals);
    const explanation = localText(details.explanation);
    const remember = localText(details.remember);

    return `
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Що вивчаємо в цьому уроці" : "What this lesson teaches"}</div>
            <ul class="learning-list">
                ${goals.map(goal => `<li>${goal}</li>`).join("")}
            </ul>
        </div>
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Пояснення" : "Explanation"}</div>
            <div class="rule-desc">${explanation}</div>
        </div>
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Граматика крок за кроком" : "Grammar step by step"}</div>
            <div class="lesson-stack">
                ${details.grammar.map(item => `
                    <div class="explanation-item">
                        <div class="explanation-title">${item.title}</div>
                        <div class="example-de">${item.de}</div>
                        <div class="example-note">${localText(item)}</div>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Корисні фрази" : "Useful phrases"}</div>
            <div class="phrase-list">
                ${details.phrases.map(item => `
                    <div class="phrase-row">
                        <span>${item.de}</span>
                        <span>${localText(item)}</span>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Міні-діалог" : "Mini dialogue"}</div>
            <div class="dialog-list">
                ${details.dialog.map((item, index) => `
                    <div class="dialog-line ${index % 2 ? "reply" : ""}">
                        <div class="dialog-de">${item.de}</div>
                        <div class="dialog-uk">${localText(item)}</div>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="rule-card lesson-card">
            <div class="rule-header">${lang === "uk" ? "Запам'ятай" : "Remember"}</div>
            <div class="rule-desc">${remember}</div>
        </div>
    `;
}

function iconPath(path) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", path);
    svg.appendChild(p);
    return svg;
}

const styleElement = document.createElement("style");
styleElement.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    :root {
        --bg-color: #0f172a;
        --surface-color: #1e293b;
        --text-primary: #f8fafc;
        --text-secondary: #94a3b8;
        --accent-red: #ff4b2b;
        --accent-gold: #f5af19;
        --accent-green: #10b981;
        --border-color: rgba(255, 255, 255, 0.1);
        --header-bg: rgba(15, 23, 42, 0.7);
        --hover-bg: rgba(255, 255, 255, 0.06);
        --content-bg: rgba(0, 0, 0, 0.2);
        --shadow-color: rgba(0, 0, 0, 0.2);
    }
    @media (prefers-color-scheme: light) {
        :root {
            --bg-color: #f8fafc;
            --surface-color: #ffffff;
            --text-primary: #0f172a;
            --text-secondary: #64748b;
            --accent-red: #e11d48;
            --accent-gold: #d97706;
            --accent-green: #059669;
            --border-color: rgba(0, 0, 0, 0.1);
            --header-bg: rgba(255, 255, 255, 0.85);
            --hover-bg: rgba(0, 0, 0, 0.04);
            --content-bg: rgba(0, 0, 0, 0.03);
            --shadow-color: rgba(0, 0, 0, 0.06);
        }
    }
    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background: var(--bg-color);
        color: var(--text-primary);
        min-height: 100vh;
    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        background: var(--header-bg);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        z-index: 10;
    }
    .icon-btn {
        background: transparent;
        border: 0;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.25s ease;
    }
    .icon-btn:hover { background: var(--hover-bg); color: var(--accent-gold); transform: translateY(-2px); }
    .header-title { font-size: 1.05rem; font-weight: 800; }
    main {
        max-width: 900px;
        margin: 0 auto;
        padding: 6rem 2rem 2rem;
        box-sizing: border-box;
    }
    h1 {
        text-align: center;
        font-size: 2.25rem;
        font-weight: 800;
        margin: 0 0 1.5rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .rules-container, .practice-container { display: flex; flex-direction: column; gap: 1rem; }
    .rule-card, .task-card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.4rem;
        box-shadow: 0 4px 6px var(--shadow-color);
        box-sizing: border-box;
    }
    .rule-header { color: var(--accent-gold); font-size: 1.2rem; font-weight: 800; margin-bottom: 0.55rem; }
    .rule-desc { color: var(--text-primary); line-height: 1.55; margin-bottom: 0.75rem; }
    .example-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.8rem; }
    .example-item {
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 0.9rem;
        background: var(--content-bg);
    }
    .example-de { font-weight: 800; color: var(--accent-gold); margin-bottom: 0.35rem; }
    .example-note { color: var(--text-secondary); line-height: 1.4; font-size: 0.92rem; }
    .lesson-card { overflow: hidden; }
    .learning-list {
        margin: 0;
        padding-left: 1.2rem;
        color: var(--text-primary);
        line-height: 1.65;
    }
    .learning-list li { margin-bottom: 0.35rem; }
    .lesson-stack { display: flex; flex-direction: column; gap: 0.85rem; }
    .explanation-item {
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        background: var(--content-bg);
        padding: 0.95rem;
    }
    .explanation-title {
        color: var(--text-primary);
        font-weight: 800;
        margin-bottom: 0.35rem;
    }
    .phrase-list { display: flex; flex-direction: column; border: 1px solid var(--border-color); border-radius: 0.75rem; overflow: hidden; }
    .phrase-row {
        display: grid;
        grid-template-columns: minmax(180px, 0.9fr) minmax(220px, 1.1fr);
        gap: 1rem;
        padding: 0.85rem 1rem;
        border-bottom: 1px solid var(--border-color);
        line-height: 1.4;
    }
    .phrase-row:last-child { border-bottom: 0; }
    .phrase-row span:first-child { color: var(--accent-gold); font-weight: 800; }
    .phrase-row span:last-child { color: var(--text-primary); }
    .dialog-list { display: flex; flex-direction: column; gap: 0.8rem; }
    .dialog-line {
        width: min(78%, 620px);
        border: 1px solid var(--border-color);
        border-radius: 0.9rem;
        background: var(--content-bg);
        padding: 0.9rem 1rem;
        box-sizing: border-box;
    }
    .dialog-line.reply { margin-left: auto; }
    .dialog-de { color: var(--accent-gold); font-weight: 800; margin-bottom: 0.3rem; }
    .dialog-uk { color: var(--text-secondary); line-height: 1.4; }
    .action-row { display: flex; gap: 1rem; margin-top: 1.25rem; flex-wrap: wrap; }
    .btn-primary, .btn-secondary {
        flex: 1;
        min-width: 180px;
        border-radius: 0.75rem;
        padding: 1rem 1.2rem;
        font-size: 1rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.25s ease;
    }
    .btn-primary { border: 0; color: white; background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); }
    .btn-secondary { border: 1px solid var(--border-color); color: var(--text-primary); background: var(--surface-color); }
    .btn-primary:hover, .btn-secondary:hover { transform: translateY(-2px); }
    .practice-container { display: none; }
    .status-bar { display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); font-weight: 800; margin-bottom: 1rem; }
    .progress-counter { color: var(--accent-gold); }
    .task-label { color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.8rem; font-weight: 800; margin-bottom: 0.5rem; }
    .sentence { font-size: 1.55rem; line-height: 1.35; font-weight: 800; margin-bottom: 1rem; }
    .options { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; }
    .option-btn {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 0.65rem;
        color: var(--text-primary);
        font-size: 1rem;
        font-weight: 800;
        min-width: 110px;
        padding: 0.85rem 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .option-btn:hover { border-color: var(--accent-gold); transform: translateY(-2px); }
    .option-btn.selected { border-color: var(--accent-gold); color: var(--accent-gold); background: rgba(245, 175, 25, 0.1); }
    .option-btn.correct { border-color: var(--accent-green); color: var(--accent-green); background: rgba(16, 185, 129, 0.12); }
    .option-btn.wrong { border-color: var(--accent-red); color: var(--accent-red); background: rgba(255, 75, 43, 0.12); }
    .hint-box {
        display: none;
        border-left: 3px solid var(--accent-gold);
        border-radius: 0.5rem;
        background: var(--content-bg);
        padding: 0.85rem 1rem;
        line-height: 1.45;
        margin-bottom: 1rem;
    }
    .feedback { min-height: 1.5rem; font-weight: 800; text-align: center; margin-bottom: 1rem; }
    .feedback.ok { color: var(--accent-green); }
    .feedback.bad { color: var(--accent-red); }
    @media (max-width: 640px) {
        main { padding: 5.5rem 1rem 1rem; }
        h1 { font-size: 1.65rem; }
        .sentence { font-size: 1.25rem; }
        .phrase-row { grid-template-columns: 1fr; gap: 0.35rem; }
        .dialog-line { width: 100%; }
        .btn-primary, .btn-secondary { min-width: 100%; }
    }
`;
document.head.appendChild(styleElement);

const header = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.className = "icon-btn";
backBtn.title = "Back";
backBtn.appendChild(iconPath("M19 12H5M12 19l-7-7 7-7"));
backBtn.onclick = () => window.location.href = "index.html?page=Home";
const headerTitle = document.createElement("div");
headerTitle.className = "header-title";
headerTitle.textContent = localText(CURRENT_TOPIC.title);
header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement("main");
const title = document.createElement("h1");
title.textContent = localText(CURRENT_TOPIC.title);
main.appendChild(title);

const rulesSection = document.createElement("section");
rulesSection.className = "rules-container";
const introCard = document.createElement("div");
introCard.className = "rule-card";
introCard.innerHTML = `
    <div class="rule-header">${lang === "uk" ? "Правило" : "Rule"}</div>
    <div class="rule-desc">${localText(CURRENT_TOPIC.intro)}</div>
    <div class="example-grid">
        ${CURRENT_TOPIC.rules.map(rule => `
            <div class="example-item">
                <div class="example-de">${rule.de}</div>
                <div class="example-note">${localText(rule)}</div>
            </div>
        `).join("")}
    </div>
`;
rulesSection.appendChild(introCard);

const richLessonDetails = renderRichLessonDetails();
if (richLessonDetails) {
    const detailsWrapper = document.createElement("div");
    detailsWrapper.className = "rules-container";
    detailsWrapper.innerHTML = richLessonDetails;
    rulesSection.appendChild(detailsWrapper);
}

const actionRow = document.createElement("div");
actionRow.className = "action-row";
const startBtn = document.createElement("button");
startBtn.className = "btn-primary";
startBtn.textContent = lang === "uk" ? "Почати тренування" : "Start practice";
startBtn.onclick = startPractice;
actionRow.appendChild(startBtn);
rulesSection.appendChild(actionRow);
main.appendChild(rulesSection);

const practiceSection = document.createElement("section");
practiceSection.className = "practice-container";
practiceSection.innerHTML = `
    <div class="status-bar">
        <span>${lang === "uk" ? "Тренування" : "Practice"}</span>
        <span class="progress-counter"></span>
    </div>
    <div class="task-card">
        <div class="task-label">${lang === "uk" ? "Обери правильний варіант" : "Choose the correct option"}</div>
        <div class="sentence"></div>
        <div class="options"></div>
        <div class="hint-box"></div>
        <div class="feedback"></div>
        <button class="btn-primary check-btn">${lang === "uk" ? "Перевірити" : "Check"}</button>
    </div>
`;
main.appendChild(practiceSection);
document.body.appendChild(main);

const progressCounter = practiceSection.querySelector(".progress-counter");
const sentenceEl = practiceSection.querySelector(".sentence");
const optionsEl = practiceSection.querySelector(".options");
const hintEl = practiceSection.querySelector(".hint-box");
const feedbackEl = practiceSection.querySelector(".feedback");
const checkBtn = practiceSection.querySelector(".check-btn");
checkBtn.onclick = checkAnswer;

function startPractice() {
    currentIndex = 0;
    score = 0;
    selectedAnswer = null;
    rulesSection.style.display = "none";
    practiceSection.style.display = "flex";
    renderExercise();
}

function renderExercise() {
    const item = CURRENT_TOPIC.exercises[currentIndex];
    selectedAnswer = null;
    progressCounter.textContent = `${currentIndex + 1} / ${CURRENT_TOPIC.exercises.length}`;
    sentenceEl.textContent = item.sentence;
    hintEl.style.display = "none";
    hintEl.textContent = localText(item.hint);
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    checkBtn.textContent = lang === "uk" ? "Перевірити" : "Check";
    checkBtn.onclick = checkAnswer;
    optionsEl.innerHTML = "";
    item.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;
        btn.onclick = () => {
            selectedAnswer = option;
            optionsEl.querySelectorAll(".option-btn").forEach(el => el.classList.remove("selected"));
            btn.classList.add("selected");
        };
        optionsEl.appendChild(btn);
    });
}

function checkAnswer() {
    const item = CURRENT_TOPIC.exercises[currentIndex];
    if (!selectedAnswer) {
        feedbackEl.textContent = lang === "uk" ? "Спершу обери відповідь." : "Choose an answer first.";
        feedbackEl.className = "feedback bad";
        return;
    }

    const isCorrect = selectedAnswer === item.answer;
    optionsEl.querySelectorAll(".option-btn").forEach(btn => {
        if (btn.textContent === item.answer) btn.classList.add("correct");
        if (btn.textContent === selectedAnswer && !isCorrect) btn.classList.add("wrong");
    });

    hintEl.style.display = "block";
    if (isCorrect) {
        score += 1;
        feedbackEl.textContent = lang === "uk" ? "Правильно." : "Correct.";
        feedbackEl.className = "feedback ok";
    } else {
        feedbackEl.textContent = lang === "uk" ? `Не зовсім. Правильно: ${item.answer}` : `Not quite. Correct: ${item.answer}`;
        feedbackEl.className = "feedback bad";
    }

    checkBtn.textContent = currentIndex + 1 === CURRENT_TOPIC.exercises.length
        ? (lang === "uk" ? "Завершити" : "Finish")
        : (lang === "uk" ? "Далі" : "Next");
    checkBtn.onclick = nextExercise;
}

function nextExercise() {
    currentIndex += 1;
    if (currentIndex >= CURRENT_TOPIC.exercises.length) {
        finishPractice();
        return;
    }
    renderExercise();
}

function finishPractice() {
    practiceSection.innerHTML = `
        <div class="task-card">
            <div class="rule-header">${lang === "uk" ? "Готово" : "Done"}</div>
            <div class="rule-desc">${lang === "uk" ? "Результат" : "Score"}: ${score} / ${CURRENT_TOPIC.exercises.length}</div>
            <div class="action-row">
                <button class="btn-primary" id="againBtn">${lang === "uk" ? "Ще раз" : "Again"}</button>
                <button class="btn-secondary" id="rulesBtn">${lang === "uk" ? "До правил" : "Back to rules"}</button>
            </div>
        </div>
    `;
    practiceSection.querySelector("#againBtn").onclick = startPractice;
    practiceSection.querySelector("#rulesBtn").onclick = () => {
        practiceSection.style.display = "none";
        rulesSection.style.display = "flex";
    };
}
