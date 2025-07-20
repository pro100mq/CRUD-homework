// export function renderStudents(students) {
//   return students.map((obj) => {
//     return `
//       <tr id="${obj.id}">
//         <td name="id">${obj.id}</td>
//         <td>${obj.name}</td>
//         <td>${obj.age}</td>
//         <td>${obj.course}</td>
//         <td>${obj.skills}</td>
//         <td>${obj.email}</td>
//         <td>${obj.isEnrolled}</td>
//         <td><button type="button" class="delete-btn">Видалити</button></td>
//         <td><button type="button" class="update-btn">Редагувати</button></td>
//       </tr>
//     `;
//   })
//   .join('');
// }


export function renderStudents(students) {
    const objectChange = students
    .map((object) => {
    const newObject = `
    <tr data-id="${object.id}">
        <td>${object.id}</td>
        <td class="name">${object.name}</td>
        <td class="age">${object.age}</td>
        <td class="course">${object.course}</td>
        <td class="skills">${object.skills}</td>
        <td class="email">${object.email}</td>
        <td class="isEnrolled">${object.isEnrolled}</td>
        <td>
            <button class="edit-button">Редагувати</button>
            <button class="delete-button">Видалити</button>
        </td>
    </tr>
    `;
    return newObject;
    })

    .join("");
    return objectChange;
}