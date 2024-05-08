// Данные о персонале (можно получить из базы данных или другого источника)
    var personnelData = [
        {
            photo: "chef.jpg",
            name: "Иван Иванов",
            position: "Шеф-повар",
            description: "Иван специализируется на создании вкуснейших десертов и тортов, он заботится о том, чтобы каждый клиент получил незабываемый вкусовой опыт."
        },
        {
            photo: "pastry_chef.jpg",
            name: "Мария Петрова",
            position: "Пекарь",
            description: "Мария виртуозно владеет хлебобулочным делом и создает самые нежные и вкусные выпечки, которые растапливают сердца наших клиентов."
        },
        {
            photo: "assistant.jpg",
            name: "Андрей Сидоров",
            position: "Помощник",
            description: "Андрей помогает в организации производства и уходит за чистотой в кондитерской. Он всегда рад помочь нашим клиентам с выбором их любимых десертов."
        }
    ];

    // Функция для добавления данных о персонале в таблицу
    function populatePersonnelTable() {
        var table = document.getElementById("personnelTable");
        personnelData.forEach(function(person) {
            var row = document.createElement("tr");
            
            var photoCell = document.createElement("td");
            var img = document.createElement("img");
            img.src = person.photo;
            img.alt = person.position;
            img.width = 80;
            photoCell.appendChild(img);
            
            var nameCell = document.createElement("td");
            nameCell.textContent = person.name;
            
            var positionCell = document.createElement("td");
            positionCell.textContent = person.position;
            
            var descriptionCell = document.createElement("td");
            descriptionCell.textContent = person.description;

            row.appendChild(photoCell);
            row.appendChild(nameCell);
            row.appendChild(positionCell);
            row.appendChild(descriptionCell);

            table.appendChild(row);
        });
    }

    // Вызов функции для заполнения таблицы при загрузке страницы
    populatePersonnelTable();