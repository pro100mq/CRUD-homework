export function deleteStudent(id){
  try {
    return fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
    });
  } catch (error) {
    console.log(error)
  }
};