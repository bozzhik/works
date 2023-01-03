const array = ['Катя Карнаух', 'Даниил Волгин', 'Андрей Шульга', 'Алсу', 'Аня Михайловская', 'Лиза Щербакова', 'Миша Пименов', 'Катя Шагина', 'Надя Скуртул', 'Валера', 'Миша Шуляев', 'Артем Адмайкин', 'Паша Нижегородов (Адмирал)', 'Паша Пименов', 'Маша', 'Гриша Мишин', 'Максим']
const players = document.getElementById('players')
const infoPairs = document.getElementById('pairs')

players.innerHTML = array.join(', ')

array.sort(() => Math.random() - 0.5)

const pairs = []

for (let i = 0; i < array.length; i += 2) {
   pairs.push([array[i], array[i + 1]])
}

infoPairs.innerHTML = pairs.map((pair) => pair.join(' - ')).join(', <br>')
