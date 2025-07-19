export function updateStudent(studentData, id) {
  try {
    return fetch(`http://localhost:3000/students/${id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    }).then((res) => res.json())
  } catch (error) {
    console.log(error)
}
}