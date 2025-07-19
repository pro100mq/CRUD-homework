export function addStudent(student) {
  try {
    return fetch("http://localhost:3000/students", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        }
    }).then((res) => res.json())
  } catch (error) {
    console.log(error)
}
}