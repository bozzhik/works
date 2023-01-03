const array = ['Катя Карнаух', 'Даниил Волгин', 'Андрей Шульга', 'Алсу', 'Аня Михайловская', 'Лиза Щербакова', 'Миша Пименов', 'Катя Шагина', 'Надя Скуртул', 'Валера', 'Миша Шуляев', 'Артем Адмайкин', 'Паша Нижегородов (Адмирал)', 'Паша Пименов', 'Маша', 'Гриша Мишин', 'Максим']

array.sort(() => Math.random() - 0.5)

const chain = document.getElementById('chain')

for (const element of array) {
   const link = document.createElement('li')
   link.textContent = element

   chain.appendChild(link)
}

console.log(link)
