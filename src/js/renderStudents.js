export function renderStudents(students) {
  return students.map((obj) => {
    return `
      <tr id="${obj.id}">
        <td name="id">${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.age}</td>
        <td>${obj.course}</td>
        <td>${obj.skills}</td>
        <td>${obj.email}</td>
        <td>${obj.isEnrolled}</td>
        <td><button type="button" class="delete-btn">Видалити</button></td>
        <td><button type="button" class="update-btn">Оновити</button></td>
      </tr>
    `;
  })
  .join('');
}