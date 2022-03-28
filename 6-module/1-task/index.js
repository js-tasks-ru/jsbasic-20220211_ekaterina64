/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
class User {
  constructor(row) {
    [this.name, this.age, this.salary, this.city] = [
      row.name,
      row.age,
      row.salary,
      row.city,
    ];
    console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.city}`);
  }
}

export default class UserTable {

  constructor(rows) {
    this.elem = document.createElement("table");
    let header = `
        <thead>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </thead>
        <tbody/>
      `;

    this.elem.insertAdjacentHTML("afterbegin", header);

    rows.forEach((row) => {
      const user = new User(row);
      this.elem.tBodies[0].insertAdjacentHTML(
        "beforeend",
        this.#rowTemplate(user)
      );
    });

    const btns = this.elem.querySelectorAll(".removeButton");
    Array.from(btns).forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove();
      })
    );
  }

  #rowTemplate(user) {
    return `
    <tr>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.salary}</td>
      <td>${user.city}</td>
      <td/><button class='removeButton'>X</button></td>
    </tr>
    `;
  }
}
